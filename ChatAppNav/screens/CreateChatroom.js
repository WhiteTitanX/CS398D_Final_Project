import * as React from "react";
import {Text, TouchableHighlight, View, TextInput, ImageBackground} from "react-native";

export default class CreateChatroomScreen extends React.Component {
    state = {
        chatroomName: ''
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
                    <View style={styles.row}>
                        <TouchableHighlight
                            onPress={()=>{alert("Create");}}
                        >
                            <View style={styles.button}><Text style={styles.buttonText}>Create</Text></View>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
