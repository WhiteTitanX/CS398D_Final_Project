import * as React from "react";
import {Text, TouchableHighlight, View, TextInput, ImageBackground} from "react-native";

export default class CreateChatroomScreen extends React.Component {
    static navigationOptions = {
        title: 'Create Chatroom'
    };

    state = {
        chatroomName: '',
        icon: '',
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
                               onChangeText={(icon) => this.setState({icon})}
                               placeholder='Icon URL'
                    />
                    <View style={styles.row}>
                        <TouchableHighlight
                            onPress={()=>{
                                //console.log("Creating chatroom: " + this.state.chatroomName);
                                if(this.state.icon===''){
                                    this.state.icon = 'https://cdn.raceroster.com/assets/images/team-placeholder.png';
                                }
                                global.firebase.databaseHelper.createChatRoom(this.state.chatroomName,this.state.icon)
                                  .then(()=>{
                                    global.firebase.databaseHelper.joinChatRoom(this.state.chatroomName)
                                      .then(()=>{
                                        this.props.navigation.goBack();
                                      })
                                      .catch(error=>{
                                        console.log(error);
                                      });
                                  })
                                  .catch(error=>{
                                    console.log(error);
                                  });
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
