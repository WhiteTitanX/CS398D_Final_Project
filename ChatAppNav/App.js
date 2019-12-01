import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDGfkt8lepEHsIRgJUqC4dMjGtDHFAPwGg",
  authDomain: "chatapp-b83db.firebaseapp.com",
  databaseURL: "https://chatapp-b83db.firebaseio.com",
  projectId: "chatapp-b83db",
  storageBucket: "chatapp-b83db.appspot.com",
  messagingSenderId: "826894141261",
  appId: "1:826894141261:web:8723b45db8e735ad131904"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let user = {
  username:'billy',
  password:'1234565478945',
  email:'billygerhard@gmail.com',
};

let userSave = {
  displayName: 'Billy',
  email: 'billygerhard@gmail.com',
};
firebase.auth().onAuthStateChanged(user=>{
  if(user){
    console.log('User logged in');
    console.log(user);
    firebase.database().ref(`/users/${user.uid}`).set(userSave);
  }
  else{
    console.log('user logged out');
  }
});

let chatroom = {
  name:'CS398D',
  description:'Classroom Chat'
};
firebase.database().ref(`/chatrooms/${chatroom.name}`).set(chatroom);
firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then(res=>{
    console.log(res);
  })
  .catch((error) => {
  // Handle Errors here.
  console.log(error);
  // ...
});

firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then(res=>{
    console.log(res);
  })
  .catch((error)=>{
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

let ref = firebase.database().ref(`/messages/`);//.child(`chatID`).equalTo(chatroom.name);

ref.on('child_added',(data)=>{
  console.log('key',data.key);
  console.log('value',data.val());
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
