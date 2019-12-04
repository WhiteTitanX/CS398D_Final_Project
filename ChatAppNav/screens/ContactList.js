import * as React from "react";
import {Text, TouchableHighlight, View, ScrollView, Image} from "react-native";
import {Menu, MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";

export default class ContactList extends React.Component {
    contactRef;
    static navigationOptions = props => {
        return {
            title: 'Contacts',
            headerRight: () => (
                <Menu style={{paddingRight: 15,paddingLeft:10, paddingBottom:1}}>
                    <MenuTrigger>
                        <Text style={{fontSize: 20, padding:5, paddingLeft: 10, paddingRight: 10}}>☰</Text>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={() => {
                            props.navigation.navigate('AddContactScreen');
                        }}>
                            <Text style={{padding: 5, fontSize: 16}}>Add Contact</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            ),}
    };

    state = {
        contacts: [

        ],
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{}}>
                        {this.state.contacts.map((gName) => (
                            <Menu
                                key={gName.displayName}
                            >
                                <MenuTrigger>
                                    <View style={styles.contactContainer}>
                                        <Image
                                            source = {{uri:gName.photoURL}}
                                            style={{width: 64, height: 64}}
                                        />
                                        <Text style={styles.contactName}>
                                            {gName.displayName}
                                        </Text>
                                    </View>
                                </MenuTrigger>
                                <MenuOptions>
                                    <MenuOption onSelect={() => {
                                        let icon = gName.photoURL;
                                        let names = [gName.displayName,global.firebase.auth().currentUser.displayName];
                                        names = names.sort();
                                        let chatName = names.join(' & ');
                                        global.firebase.databaseHelper.getChatroom(chatName)
                                          .then((chatroom) => {
                                              //Check if you are joined to the chat, if so, navigate, if not, join, then navigate.
                                              global.firebase.databaseHelper.getJoinedChatroomList(global.firebase.auth().currentUser.uid)
                                                .then(chatroomList=>{
                                                    if(!chatroomList.find(chatroom=>chatroom.name===chatName)){
                                                        global.firebase.databaseHelper.joinChatRoom(chatName)
                                                          .then(() => {
                                                              this.props.navigation.navigate('ChatScreen',chatroom);
                                                          })
                                                          .catch(error => {
                                                              console.log(error);
                                                          })
                                                    }
                                                    else{
                                                        this.props.navigation.navigate('ChatScreen',chatroom);
                                                    }
                                                })
                                                .catch(error => {
                                                    console.log(error);
                                                });
                                              //Check if other person is joined, if not, join them.
                                              global.firebase.databaseHelper.getJoinedChatroomList(gName.uid)
                                                .then(chatroomList=>{
                                                    if(!chatroomList.find(chatroom=>chatroom.name===chatName)){
                                                        global.firebase.databaseHelper.joinChatRoom(chatName,gName.uid)
                                                          .then(() => {
                                                          })
                                                          .catch(error => {
                                                              console.log(error);
                                                          })
                                                    }
                                                })
                                                .catch(error => {
                                                    console.log(error);
                                                })
                                          })
                                          .catch(error => {
                                              //Chatroom doesn't exist yet, so create it.
                                              if(error.status && error.status===404){
                                                  global.firebase.databaseHelper.createChatRoom(chatName,icon)
                                                    .then(() => {
                                                        //Join newly created chatroom
                                                        global.firebase.databaseHelper.joinChatRoom(chatName)
                                                          .then(() => {
                                                              //Have other user join chatroom
                                                              global.firebase.databaseHelper.joinChatRoom(chatName,gName.uid)
                                                                .then(() => {
                                                                    //get the chatroom object from database, so you can navigate to it
                                                                    global.firebase.databaseHelper.getChatroom(chatName)
                                                                      .then((chatroom) => {
                                                                          //navigate to such chat
                                                                          this.props.navigation.navigate('ChatScreen',chatroom);
                                                                      })
                                                                      .catch(error => {
                                                                          console.log(error);
                                                                      })
                                                                })
                                                                .catch(error => {
                                                                    console.log(error);
                                                                })
                                                          })
                                                          .catch(error => {
                                                              console.log(error);
                                                          })
                                                    })
                                                    .catch(error => {
                                                        console.log(error);
                                                    })
                                              }
                                              else{
                                                  console.log(error);
                                              }
                                          });
                                    }}>
                                        <Text style={{padding: 5, fontSize: 16}}>Start Direct Message</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={() => {
                                        global.firebase.databaseHelper.RemoveContact(gName.uid);
                                    }}>
                                        <Text style={{padding: 5, fontSize: 16}}>Remove Contact</Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                            )
                        )}
                    </View>
                </ScrollView>
            </View>
        );
    }

    updateContacts(dataSnapshot){
        let contacts = [];
        for(let key in dataSnapshot.val()){
            contacts.push(dataSnapshot.val()[key])
        }
        this.state.contacts = contacts;
        this.forceUpdate();
    }

    componentDidMount() {
        this.contactRef = global.firebase.database().ref(global.firebase.databaseHelper.getPrivateProfileContactsPath(global.firebase.auth().currentUser.uid));
        this.contactRef.on('value', this.updateContacts, this);
    }
    componentWillUnmount() {
        this.contactRef.off('value',this.updateContacts, this);
    }
}
