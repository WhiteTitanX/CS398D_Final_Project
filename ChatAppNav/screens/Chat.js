import * as React from "react";
import {Text, TouchableHighlight, View, ScrollView, Image, Dimensions} from "react-native";
import {Menu, MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";
import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends React.Component {
    messagesRef;
    static navigationOptions = props => {
        return {
            title: props.navigation.getParam('name'),
            headerRight: () => (
                <Menu style={{paddingRight: 15,paddingLeft:10, paddingBottom:1}}>
                    <MenuTrigger>
                        <Text style={{fontSize: 18, padding:2}}>☰</Text>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={() => {
                            global.firebase.databaseHelper.LeaveChatRoom(props.navigation.getParam('key'));
                            props.navigation.goBack();
                        }}>
                            <Text style={{padding: 5, fontSize: 16}}>Leave Chatroom</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            )
        }
    };

    state = {
        messages: []
    };

    componentWillMount() {
        this.setState({
            messages: [],
        })
    }

    onSend(messages = []) {
        console.log(messages);
        //console.log(this.props.navigation.state.params);
        global.firebase.databaseHelper.sendMessages(messages,this.props.navigation.getParam('key'));
        /*
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
        */
    }

    render() {
        return (
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: global.firebase.auth().currentUser.uid,
                        name: global.firebase.auth().currentUser.displayName,
                        avatar: global.firebase.auth().currentUser.photoURL
                    }}
                />
        );
    }

    updateChatroomMessages(datasnapshot){
        console.log(datasnapshot.val());
        let messageList = [];
        for(let key in datasnapshot.val()){
            messageList.push(datasnapshot.val()[key]);
        }
        messageList = messageList.reverse();
        //console.log(messageList);
        this.state.messages = GiftedChat.append([],messageList);
        this.forceUpdate();
    }

    componentDidMount() {
        this.messagesRef = global.firebase.database()
          .ref(global.firebase.databaseHelper.getChatroomMessagesPath(this.props.navigation.getParam('key')))
          .limitToLast(50);
        this.messagesRef.on('value', this.updateChatroomMessages, this);
    }

    componentWillUnmount() {
        this.messagesRef.off('value',this.updateChatroomMessages, this);
    }
}
