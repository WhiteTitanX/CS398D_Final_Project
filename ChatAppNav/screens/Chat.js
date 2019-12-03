import * as React from "react";
import {Text, TouchableHighlight, View, ScrollView, Image, Dimensions} from "react-native";
import {Menu, MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";
import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends React.Component {
    static navigationOptions = props => {
        return {
            title: props.navigation.getParam('chatroom'),
            headerRight: () => (
                <Menu style={{paddingRight: 15,paddingLeft:10, paddingBottom:1}}>
                    <MenuTrigger>
                        <Text style={{fontSize: 18, padding:2}}>☰</Text>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={() => {
                            alert("Why you gotta leave?");
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
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <View style={styles.container}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        );
    }
}
