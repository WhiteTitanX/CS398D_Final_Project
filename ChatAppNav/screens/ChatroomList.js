import * as React from "react";
import {Text, TouchableHighlight, View, ScrollView, Image} from "react-native";
import {Menu, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

export default class ChatroomList extends React.Component {

    chatroomRef;
    static navigationOptions = props => {
        return {
            title: 'Chatroom List',
            headerRight: () => (
                <Menu style={{paddingRight: 15,paddingLeft:10, paddingBottom:1}}>
                    <MenuTrigger>
                        <Text style={{fontSize: 18, padding:2}}>☰</Text>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={() => {
                            props.navigation.navigate('ContactListScreen');
                        }}>
                            <Text style={{padding: 5, fontSize: 16}}>Contacts</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => {
                            props.navigation.navigate('CreateChatroomScreen');
                        }}>
                            <Text style={{padding: 5, fontSize: 16}}>Create Chatroom</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => {
                            props.navigation.navigate('JoinChatroomScreen');
                        }}>
                            <Text style={{padding: 5, fontSize: 16}}>Join Chatroom</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => {
                            global.firebase.auth().signOut().then(() => {
                                props.navigation.navigate('AuthLoading');
                            })
                        }}>
                            <Text style={{padding: 5, fontSize: 16}}>Sign out of {global.firebase.auth().currentUser.displayName}</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => {global.firebase.authService.checkAuth();}}>
                            <Text style={{padding: 5, fontSize: 16}}>[DEV] Check User</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            ),}
    };

    state = {
        groups: [
        ]
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{}}>
                        {this.state.groups.map((gName) => (
                                <TouchableHighlight
                                    key={gName.name}
                                    onPress={() => {
                                        this.props.navigation.navigate('ChatScreen', gName);
                                    }} >
                                    <View style={styles.contactContainer}>
                                        <Image
                                            source = {{uri:gName.icon}}
                                            style={{width: 64, height: 64}}
                                        />
                                        <Text style={styles.contactName}>
                                            {gName.name}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            )
                        )}
                    </View>
                </ScrollView>
            </View>
        );
    }

    updateChatroomList(datasnapshot){
      let chatroomList = [];
      for(let key in datasnapshot.val()){
        chatroomList.push(datasnapshot.val()[key])
      }
      this.state.groups = chatroomList;
      this.forceUpdate();
    }

    componentDidMount() {
      this.chatroomRef = global.firebase.database().ref(global.firebase.databaseHelper.getPrivateProfileChatroomPath(global.firebase.auth().currentUser.uid));
      this.chatroomRef.on('value', this.updateChatroomList, this);
    }

    componentWillUnmount() {
      this.chatroomRef.off('value',this.updateChatroomList, this);
    }
}
