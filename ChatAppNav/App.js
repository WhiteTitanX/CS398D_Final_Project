import * as React from 'react';
import { Button, View,
	Text, StyleSheet, Image, TextInput,
	TouchableHighlight, ImageBackground,
	Dimensions, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
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

class LoginScreen extends React.Component {
	state = {
		username: '',
		password: ''
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
					<Text style={styles.title}>Chat App</Text>
					<TextInput style={styles.loginInput}
										 onChangeText={(username) => this.setState({username})}
										 placeholder='Username'
					/>
					<TextInput style={styles.loginInput}
										 onChangeText={(password) => this.setState({password})}
										 placeholder='Password'
					/>
					<View style={styles.row}>
						<TouchableHighlight
							onPress={()=>{alert("Open group chat window");}}
						>
							<View style={styles.button}><Text style={styles.buttonText}>Login</Text></View>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={()=>{this.props.navigation.navigate('Signup')}}
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
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Sign Up Screen</Text>
			</View>
		);
	}
}

const RootStack = createStackNavigator(
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

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}

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
