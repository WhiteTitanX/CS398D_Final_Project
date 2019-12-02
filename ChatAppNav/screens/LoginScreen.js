import * as React from "react";
import {Image, ImageBackground, Text, TextInput, TouchableHighlight, View} from "react-native";

export default class LoginScreen extends React.Component {
  state = {
    username: '',
    password: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require('./../res/login_background.jpg')}
        >
          <Image
            style={{width: 128, height: 128}}
            source={require('./../res/speech-bubble.png')}
          />
          <Text style={styles.title}>Chat App</Text>
          <TextInput style={styles.loginInput}
                     onChangeText={(username) => this.setState({username})}
                     placeholder='Email'
          />
          <TextInput style={styles.loginInput}
                     onChangeText={(password) => this.setState({password})}
                     placeholder='Password'
                     secureTextEntry={true}
          />
          <View style={styles.row}>
            <TouchableHighlight
              onPress={()=>{global.firebase.auth.signInWithEmailAndPassword(this.state.username,this.state.password)
                .then(user=>{
                  this.props.navigation.navigate('App');
                })
                .catch(error=>{
                  if(error.code==='auth/invalid-email' || error.code==='auth/wrong-password'){
                    alert('Incorrect Email/Password entered.')
                  }
                  else{
                    console.log(error);
                  }
                });
              }}
            >
              <View style={styles.button}><Text style={styles.buttonText}>Login</Text></View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={()=>{this.props.navigation.navigate('Signup');}}
            >
              <View style={styles.button}><Text style={styles.buttonText}>Signup</Text></View>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }

  componentDidMount() {
    global.firebase.authService.checkAuth()
      .then(()=>{
        this.props.navigation.navigate('App');
      })
  }
}

