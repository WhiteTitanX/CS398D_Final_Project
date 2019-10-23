import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  AppRegistry, Text, View, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight
} 
from 'react-native';

import { MonoText } from '../components/StyledText';
import { Constants } from 'expo';
export default class App extends Component {
    state = {
        firstname: '',
        username: '',
        password: '',
        phonenumber: '',
        lastname: '',
        
    };

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    
};
    render() {
        return (
            
            <View style={styles.container}>
            
                <ImageBackground
                    style={styles.background}
                    source={{ uri: 'https://codehs.com/uploads/802894298a13da568102a68e0aa4098f' }}
                >
        
                <View style={styles.top}>
                    <Text style={styles.paragraph}>
                    YOU ARE ALMOST THERE!
                    
                    </Text>
                     </View>
                     
                     <Image
                         source={{ uri: 'https://codehs.com/uploads/a0040bc1d6f8418011ce8f239068af3d' }}
                         style={{ height: 80, width: 300 }}
                     />
                 
                    <View style={styles.middle}>
                    <Text style={styles.paragraph}>
                    First Name:
                    
                    </Text>
                    
                    < TextInput style={styles.firstnameInput}
                onChangeText={(firstname) => this.setState({firstname})}
                value={this.state.firstname}
                        style={{ width: 250, height: 44, padding: 8, backgroundColor: 'grey', borderRadius: 20, marginLeft: 20, color: 'white'}}
                    />
                    <Text style={styles.paragraph}>
                    Last Name:
                    
                    </Text>
                    
                    <TextInput style={styles.lastnameInput}
                onChangeText={(lastname) => this.setState({lastname})}
                value={this.state.lastname}
                        style={{ width: 250, height: 44, padding: 8, backgroundColor: 'grey', borderRadius: 20, marginLeft: 20, color: 'white'}}
                    />
                    <Text style={styles.paragraph}>
                    UserName:
                    
                    </Text>
                    
                    <TextInput style={styles.usernameInput}
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
                        style={{ width: 250, height: 44, padding: 8, backgroundColor: 'grey', borderRadius: 20, marginLeft: 20, color: 'white'}}
                    />
                    <Text style={styles.paragraph}>
                    Password:
                    
                    </Text>
                    
                    <TextInput style={styles.passwordInput}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                        style={{ width: 250, height: 44, padding: 8, backgroundColor: 'grey', borderRadius: 20, marginLeft: 20, color: 'white'}}
                    />
                    <Text style={styles.paragraph}>
                    Phone Number:
                    
                    </Text>
                    
                    <TextInput style={styles.phonenumberInput}
                onChangeText={(phonenumber) => this.setState({phonenumber})}
                value={this.state.phonenumber}
                        style={{ width: 250, height: 44, padding: 8, backgroundColor: 'grey', borderRadius: 20, marginLeft: 20, color: 'white'}}
                    />
                    
                    </View>
                    
                    <View style={styles.bottom}>
                    
                    
                        
                        <TouchableHighlight
                            onPress={() => {
                                alert('You Have Signed Up Successfully!')
                            }}
                        >
                        
                            <View style={styles.box}>
                            
                                <Text style={styles.text}>
                                SIGN UP
                                </Text>
                            
                            </View>
                        
                        </TouchableHighlight>
                    
                    
                    
                    </View>
    
                </ImageBackground>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    
      
    },
    top: {
     flex: 1,
        width: 300,
        
    },
    middle: {
        flex: 3,
        width: 300,
        
    },
    background: {
        width: 300,
        height: 540,
        
    },
    paragraph: {
        fontSize: 25,
        fontWeight: 'bold',
     
        color: 'white',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
       
        color: 'white',
    },
    bottom: {
        
       flex: 1,
         alignItems: 'center',
       
         justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        height: 44,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#307172',
        borderRadius: 20,
      
        
    }
});
