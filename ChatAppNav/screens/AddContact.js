import * as React from "react";
import {Text, TouchableHighlight, View, TextInput, ImageBackground} from "react-native";

export default class AddContact extends React.Component {
    static navigationOptions = {
        title: 'Add Contact'
    };

    state = {
        name: ''
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.imageBackground}
                    source={require('./../res/createchatroom_background.jpg')}
                >
                    <Text style={styles.title}>Add a Contact</Text>
                    <TextInput style={styles.loginInput}
                               onChangeText={(name) => this.setState({name})}
                               placeholder='Contact Name'
                    />
                    <View style={styles.row}>
                        <TouchableHighlight
                            onPress={()=>{
                                global.firebase.databaseHelper.addContact(this.state.name)
                                    .then(()=>{
                                        this.props.navigation.goBack();
                                    })
                                    .catch(error=>{
                                        console.log(error);
                                    });
                            }}
                        >
                            <View style={styles.button}><Text style={styles.buttonText}>Add</Text></View>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
