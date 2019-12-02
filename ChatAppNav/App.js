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

class LoginScreen extends React.Component {

	state = {
		username: '',
		password: ''
	};

	render() {
		global.firebase.auth.onAuthStateChanged(user=>{
			if(user){
				this.props.navigation.navigate('App');
			}
		});
		return (

			<View style={styles.container}>
				<ImageBackground
					style={styles.imageBackground}
					source={require('./res/login_background.jpg')}
				>
					<Image
						style={{width: 128, height: 128}}
						source={require('./res/speech-bubble.png')}
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
}

class SignupScreen extends React.Component {
	static navigationOptions = {
		title: 'Sign Up',
		/* No more header config here! */
	};

	state = {
		username: '',
		password: '',
		displayName: ''
	};

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					style={styles.imageBackground}
					source={require('./res/login_background.jpg')}
				>
					<Image
						style={{width: 128, height: 128}}
						source={require('./res/speech-bubble.png')}
					/>
					<Text style={styles.title}>Sign Up</Text>
					<TextInput style={styles.loginInput}
										 onChangeText={(username) => this.setState({username})}
										 placeholder='Email'
					/>
					<TextInput style={styles.loginInput}
										 onChangeText={(password) => this.setState({password})}
										 placeholder='Password'
										 secureTextEntry={true}
					/>
					<TextInput style={styles.loginInput}
										 onChangeText={(displayName) => this.setState({displayName})}
										 placeholder='Display Name'
					/>
					<View style={styles.row}>
						<TouchableHighlight
							onPress={()=>{global.firebase.auth.createUserWithEmailAndPassword(this.state.username,this.state.password)
								.then((res)=>{
									console.log(res);
									global.firebase.auth.currentUser.updateProfile({displayName:this.state.displayName});
								})
								.catch(error=>{
									console.log(error);
								});
							}}
						>
							<View style={styles.button}><Text style={styles.buttonText}>Signup</Text></View>
						</TouchableHighlight>
					</View>
				</ImageBackground>
			</View>
		);
	}
}

class ChatroomListScreen extends React.Component {
	static navigationOptions = {
		title: 'Chatroom List',
		/* No more header config here! */
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

//const AppContainer = createAppContainer(LoggedOutStack);
/*
export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}
*/
const styles = StyleSheet.create({
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
