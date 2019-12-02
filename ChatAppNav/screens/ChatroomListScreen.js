import * as React from "react";
import {Text, TouchableHighlight, View} from "react-native";

export default class ChatroomListScreen extends React.Component {
    static navigationOptions = {
        title: 'Chatroom List',
        headerRight: () => (
            <TouchableHighlight
                onPress={()=>{alert("hello");}}
            >
                <View style={{paddingRight: 15,paddingLeft:10, paddingBottom: 5}}><Text style={{fontSize: 24}}>+</Text></View>
            </TouchableHighlight>
        ),
    };

    render() {
        global.firebase.auth.onAuthStateChanged(user=>{
            if(!user){
                this.props.navigation.navigate('AuthLoading');
            }
        });
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Chatroom List Screen</Text>
                <TouchableHighlight
                    onPress={()=>{global.firebase.auth.signOut()}}
                >
                    <View style={styles.button}><Text style={styles.buttonText}>{global.firebase.auth.currentUser.displayName} Sign Out</Text></View>
                </TouchableHighlight>
            </View>
        );
    }
}