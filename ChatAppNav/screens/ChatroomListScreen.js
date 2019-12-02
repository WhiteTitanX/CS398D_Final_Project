import * as React from "react";
import {Text, TouchableHighlight, View} from "react-native";

export default class ChatroomListScreen extends React.Component {
    static navigationOptions = {
        title: 'Chatroom List',
        headerRight: () => (
          <TouchableHighlight
            onPress={()=>{alert("hello");}}
          >
            <View style={{paddingRight: 15,paddingLeft:10, paddingBottom:1}}><Text style={{fontSize: 18}}>Add +</Text></View>
          </TouchableHighlight>
        ),
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Chatroom List Screen</Text>
              <TouchableHighlight
                onPress={()=>{global.firebase.auth.signOut().then(() => {
                    this.props.navigation.navigate('AuthLoading');
                })}}
              >
                <View style={styles.button}><Text style={styles.buttonText}>{global.firebase.auth.currentUser.displayName} Sign Out</Text></View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={()=>{global.firebase.authService.checkAuth()}}
              >
                <View style={styles.button}><Text style={styles.buttonText}>Check User</Text></View>
              </TouchableHighlight>
            </View>
        );
    }
}
