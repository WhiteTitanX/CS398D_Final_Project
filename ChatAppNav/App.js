import * as React from 'react';
import { Button, View,
	Text, StyleSheet, Image, TextInput,
	TouchableHighlight, ImageBackground,
	Dimensions, Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StatusBar } from 'react-native';
import {MenuProvider} from "react-native-popup-menu";

import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import * as FirebaseDatabaseHelper from './services/firebase-database';
import * as FirebaseAuthHelper from './services/firebase-auth';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from "./screens/SignupScreen";
import ChatroomList from "./screens/ChatroomList";
import CreateChatroom from "./screens/CreateChatroom";
import JoinChatroom from "./screens/JoinChatroom";
import ContactList from "./screens/ContactList";
import Chat from "./screens/Chat";
import AddContact from "./screens/AddContact";

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
	authHelper:FirebaseAuthHelper,
	auth:firebase.auth,
	authService:{},
	database:firebase.database,
	databaseHelper:FirebaseDatabaseHelper,
	databaseService:{}
};
global.firebase.authService.checkAuth = checkAuth;
global.firebase.authService.updatePublicProfile = updatePublicProfile;

function checkAuth(){
	return new Promise((resolve, reject) => {
		let unsubscribe = firebase.auth().onAuthStateChanged(user => {
			if (user) {
				//If logged in, navigate to chatroom list screen.
				console.log(user);
				unsubscribe();
				resolve(true);
			} else {
				unsubscribe();
				reject(false);
			}
		});
	});
}

function updatePublicProfile(uid){
	if(!uid && global.firebase.auth().currentUser){
		uid = global.firebase.auth().currentUser.uid;
	}
	let path = global.firebase.databaseHelper.getPublicProfilePath(uid);
	let publicProfile = global.firebase.authHelper.getPublicUserProfile(global.firebase.auth().currentUser);
	return global.firebase.database().ref(path).set(publicProfile);
}

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
		ChatroomListScreen: ChatroomList,
		CreateChatroomScreen: CreateChatroom,
		JoinChatroomScreen: JoinChatroom,
		ContactListScreen: ContactList,
		ChatScreen: Chat,
		AddContactScreen: AddContact
	},
	{
		initialRouteName: 'ChatroomListScreen',
	}
);

const AppContainer = createAppContainer(
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

export default class App extends React.Component {
	render() {
		return (
			<MenuProvider>
				<AppContainer />
			</MenuProvider>
		);
	}
}

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
	},
	contactContainer: {
		height: Math.max(2*(deviceHeight/20), 80),
		width: deviceWidth,
		borderBottomWidth: 1,
		borderBottomColor: '#d9d9d9',
		paddingLeft: 15,
		alignItems: 'center',
		flexDirection: 'row',
	},
	contactName: {
		fontSize: deviceWidth/20,
		paddingLeft: 20,
		color: 'rgba(96,100,109, 1)',
	},
});
