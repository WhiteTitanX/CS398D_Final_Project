import * as React from 'react';
import { Button, View,
	Text, StyleSheet, Image, TextInput,
	TouchableHighlight, ImageBackground,
	Dimensions, Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StatusBar } from 'react-native';

import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from "./screens/SignupScreen";
import ChatroomListScreen from "./screens/ChatroomListScreen";

let deviceH = Dimensions.get('screen').height;
let windowH = Dimensions.get('window').height;
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
let statusBarHeight = StatusBar.currentHeight;

const firebaseConfig = {
	apiKey: "AIzaSyDGfkt8lepEHsIRgJUqC4dMjGtDHFAPwGg",
	authDomain: "chatapp-b83db.firebaseapp.com",
	databaseURL: "https://chatapp-b83db.firebaseio.com",
	projectId: "chatapp-b83db",
	storageBucket: "chatapp-b83db.appspot.com",
	messagingSenderId: "826894141261",
	appId: "1:826894141261:web:8723b45db8e735ad131904"
};

firebase.initializeApp(firebaseConfig);

global.firebase = {
	authHelper:{},
	auth:firebase.auth(),
	database:firebase.database()
};

function checkAuth(){
	return new Promise((resolve, reject) => {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				//If logged in, navigate to chatroom list screen.
				resolve(true);
			} else {
				reject(false);
			}
		});
	});
}

global.firebase.authHelper.checkAuth = checkAuth;
global.firebase.authHelper.logOut = firebase.auth().signOut;

const LoggedOutStack = createStackNavigator(
	{
		Login: {
			screen: LoginScreen,
			navigationOptions: {
				header: null
			}
		},
		Signup: SignupScreen,
	},
	{
		initialRouteName: 'Login',
	}
);

const LoggedInStack = createStackNavigator(
	{
		ChatroomListScreen: ChatroomListScreen,
	},
	{
		initialRouteName: 'ChatroomListScreen',
	}
);

export default createAppContainer(
	createSwitchNavigator(
		{
			AuthLoading: LoggedOutStack,
			App: LoggedInStack,
		},
		{
			initialRouteName: 'AuthLoading',
		}
	)
);

global.styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width:deviceWidth,
		height:deviceHeight- (Platform.OS === 'android' ? 56 : 64)
	},
	imageBackground:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width:deviceWidth
	},
	title:{
		fontSize: 28,
		marginBottom: 10
	},
	loginInput:{
		borderRadius: 10,
		borderColor: 'lightgray',
		borderWidth: 2,
		backgroundColor: "#ffffff",
		width: 200,
		height: 48,
		padding: 5,
		marginTop: 10
	},
	button:{
		borderRadius: 10,
		borderColor: 'lightgray',
		borderWidth: 2,
		backgroundColor: "#ffffff",
		height: 48,
		width: 80,
		padding: 5,
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5,
	},
	row:{
		flexDirection: 'row',
		marginTop: 30
	}
});
