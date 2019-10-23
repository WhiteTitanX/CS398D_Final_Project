import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChatRoomScreen from "../screens/ChatRoomScreen";
import ChatroomListScreen from "../screens/ChatroomListScreen";
import ContactsScreen from "../screens/ContactsScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const ChatRoomStack = createStackNavigator(
  {
    ChatRoom: ChatRoomScreen,
  },
  config
);

ChatRoomStack.navigationOptions = {
  tabBarLabel: 'Chatroom',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-' : 'md-options'} />
  ),
};

ChatRoomStack.path = '';

//Chatroom List Nav
const ChatroomListStack = createStackNavigator(
  {
    ChatroomList: ChatroomListScreen,
  },
  config
);

ChatroomListStack.navigationOptions = {
  tabBarLabel: 'ChatroomList',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-' : 'md-options'} />
  ),
};

ChatroomListStack.path = '';

//Contacts Nav
const ContactsStack = createStackNavigator(
  {
    Contacts: ContactsScreen,
  },
  config
);

ContactsStack.navigationOptions = {
  tabBarLabel: 'Contacts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-' : 'md-options'} />
  ),
};

ContactsStack.path = '';

//Login Nav
const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  config
);

LoginStack.navigationOptions = {
  tabBarLabel: 'Sign In',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-' : 'md-options'} />
  ),
};

LoginStack.path = '';

//Sign Up Nav
const SignUpStack = createStackNavigator(
  {
    SignUp: SignUpScreen,
  },
  config
);

SignUpStack.navigationOptions = {
  tabBarLabel: 'Sign Up',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-' : 'md-options'} />
  ),
};

SignUpStack.path = '';


const tabNavigator = createBottomTabNavigator({
  LoginStack,
  //SignUpStack,
  ChatroomListStack,
  ChatRoomStack,
  ContactsStack,
});

tabNavigator.path = '';

export default tabNavigator;

