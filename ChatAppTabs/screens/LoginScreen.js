import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TouchableHighlight,
  TextInput,
} 

from 'react-native';
import Constants from 'expo-constants';
import { MonoText } from '../components/StyledText';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function LoginScreen() {
    state = {
        name: '',
        username: '',
        password: '',
        number: '',     
    };


    return (
            <View style={styles.container}>

                <View style={styles.appLogo}>
                  <Text style={styles.logoGroup}>
                        Group 
                  </Text>
                  <Text style={styles.logoChat}>
                        Chat
                  </Text>  
                </View>

                    <View style={styles.questionContainer}>
                        <Text style={styles.question}>
                            Do you need to sign up or log in?
                        </Text>
                    </View>
                    <View style={styles.buttonView}>
                      <TouchableHighlight>
                          <View style={styles.buttonL}>
                              <Text style={styles.textSorL}>
                                  Log In
                              </Text>
                          </View>
                      </TouchableHighlight>
                      <TouchableHighlight>
                          <View style={styles.buttonL}>
                              <Text style={styles.textSorL}>
                                  Sign Up
                              </Text>
                          </View>
                      </TouchableHighlight>
                    </View>

            </View>
        );
    }


const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#C8C2AE',
    },
    appLogo: {
      height: deviceHeight/5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoChat: {
      fontSize: deviceHeight/10,
      color: '#6CC551',
      fontFamily: 'Avenir',
    },
    logoGroup: {
        fontSize: deviceHeight/10,
        fontFamily: 'Avenir',
    },
    questionContainer: {
        height: deviceHeight/7,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceHeight/20,
        marginBottom: deviceHeight/20,
    },
    question: {
        fontFamily: 'Avenir',
        fontSize: deviceHeight/25,
        textAlign: 'center',
    },
    buttonL: {
        height: deviceHeight/13,
        width: 2*(deviceWidth/3),
        backgroundColor: '#447604',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: deviceHeight/15,
        borderRadius: 15,
    },
    textSorL: {
        fontFamily: 'Avenir',
        color: 'white',
        fontSize: deviceHeight/20,
    },
    buttonView: {
      alignItems: 'center',
      justifyContent: 'space-around',
    }

});
