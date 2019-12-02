import * as React from "react";
import {Text, TouchableHighlight, View, ScrollView, Image} from "react-native";
import {Menu, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

export default class ChatroomListScreen extends React.Component {
    static navigationOptions = props => {
        return {
            title: 'Chatroom List',
            headerRight: () => (
                <Menu style={{paddingRight: 15,paddingLeft:10, paddingBottom:1}}>
                    <MenuTrigger>
                        <Text style={{fontSize: 18, padding:2}}>☰</Text>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={() => {alert("pog");}}>
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
                            global.firebase.auth.signOut().then(() => {
                                props.navigation.navigate('AuthLoading');
                            })
                        }}>
                            <Text style={{padding: 5, fontSize: 16}}>Sign out of {global.firebase.auth.currentUser.displayName}</Text>
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
            {
                groupName: 'CIS120 Chat',
                groupImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rr4Yntjn6QIhXmPESm1Grv2YodbvfuXyi_8JRHSnb6EQz1OZ6g&s',
            },
            {
                groupName: 'Baseball Chat',
                groupImage: 'https://www.baseballprospectus.com/wp-content/uploads/2019/04/baseball-on-dirt-1000x714.jpg',
            },
            {
                groupName: 'Music Production Team Chat',
                groupImage: 'https://pmcvariety.files.wordpress.com/2019/01/apple-music.jpg?w=1000&h=563&crop=1',
            },
            {
                groupName: 'The Squad Chat',
                groupImage: 'https://s3.amazonaws.com/s3.mp-cdn.net/56/e7/341a69a52dfdace8ffc671b0b743-is-the-wall-street-journal-stupid.jpg',
            }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{}}>
                        {this.state.groups.map((gName) => (
                                <TouchableHighlight
                                    key={gName.groupName}
                                    onPress={() => {
                                        alert('Text the contact')
                                    }} >
                                    <View style={styles.contactContainer}>
                                        <Image
                                            source = {{uri:gName.groupImage}}
                                            style={{width: 64, height: 64}}
                                        />
                                        <Text style={styles.contactName}>
                                            {gName.groupName}
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
}
