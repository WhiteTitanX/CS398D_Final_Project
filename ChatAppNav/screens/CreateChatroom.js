import * as React from "react";
import {Text, TouchableHighlight, View, TextInput, ImageBackground} from "react-native";

export default class CreateChatroomScreen extends React.Component {
    state = {
        chatroomName: '',
        users: '',
        usersArray: []
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.imageBackground}
                    source={require('./../res/createchatroom_background.jpg')}
                >
                    <Text style={styles.title}>Create a Chatroom</Text>
                    <TextInput style={styles.loginInput}
                               onChangeText={(chatroomName) => this.setState({chatroomName})}
                               placeholder='Chatroom Name'
                    />
                    <TextInput style={styles.loginInput}
                               onChangeText={(users) => this.setState({users})}
                               placeholder='Name1, Name2, Name3...'
                    />
                    <View style={styles.row}>
                        <TouchableHighlight
                            onPress={()=>{
                                this.state.usersArray = this.state.users.split(',');
                                console.log("Creating chatroom: " + this.state.chatroomName);
                                console.log("These are the people in this chatroom: " + this.state.usersArray);
                            }}
                        >
                            <View style={styles.button}><Text style={styles.buttonText}>Create</Text></View>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
