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
} from 'react-native';

import { MonoText } from '../components/StyledText';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function ContactsScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
      <View style={styles.contactsTitile}>
        <Text style={styles.contactText}>Contacts</Text>
      </View>
        <TouchableHighlight 
          onPress={() => { 
            alert('Add conctact') 
          }} >
          <View style={styles.add}>
            <Text style={styles.contactText}>
              +
            </Text>
        </View>
        </TouchableHighlight>
      </View>

      <View style={styles.userContainer}>
        <TouchableHighlight style={styles.userDetailsButton}
          onPress={() => { 
                        alert('User Information') 
                    }} >
          <View style={styles.user}>
            <Image
              source={{ uri:'https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-9-720x720.png'}}
              style={styles.avatarStyle}
            />
            <Text style={styles.userName}>
              Jack Black
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      
      <ScrollView>
      <View style={styles.contactsContainer}>
        <TouchableHighlight 
          onPress={() => { 
            alert('Text the contact') 
          }} >
          <View style={styles.contactContainer}>
            <Text style={styles.contactName}>
              Amanda Smith
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={() => { 
            alert('Text the contact') 
          }} >
          <View style={styles.contactContainer}>
            <Text style={styles.contactName}>
              Jared Leto
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={() => { 
            alert('Text the contact') 
          }} >
          <View style={styles.contactContainer}>
            <Text style={styles.contactName}>
              Hailey Brown
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={() => { 
            alert('Text the contact') 
          }} >
          <View style={styles.contactContainer}>
            <Text style={styles.contactName}>
              Joshua Davis
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={() => { 
            alert('Text the contact') 
          }} >
          <View style={styles.contactContainer}>
            <Text style={styles.contactName}>
              Martha Jones
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={() => { 
            alert('Text the contact') 
          }} >
          <View style={styles.contactContainer}>
            <Text style={styles.contactName}>
              Ezra Miller
            </Text>
          </View>
        </TouchableHighlight>
         <TouchableHighlight 
          onPress={() => { 
            alert('Text the contact') 
          }} >
          <View style={styles.contactContainer}>
            <Text style={styles.contactName}>
              Jack Pearson
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={() => { 
            alert('Text the contact') 
          }} >
          <View style={styles.contactContainer}>
            <Text style={styles.contactName}>
              Garry Hamilton
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={() => { 
            alert('Text the contact') 
          }} >
          <View style={styles.contactContainer}>
            <Text style={styles.contactName}>
              Leah Wilson
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={() => { 
            alert('Text the contact') 
          }} >
          <View style={styles.contactContainer}>
            <Text style={styles.contactName}>
              Felix King
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={() => { 
            alert('Text the contact') 
          }} >
          <View style={styles.contactContainer}>
            <Text style={styles.contactName}>
              Jakub Lewandowski
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      </ScrollView>
    </View>
  );
}

ContactsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  ContactsScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: deviceHeight / 9,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    paddingTop: 30,
    alignItems: 'flex-end',
  },
  contactText: {
    fontSize: deviceHeight / 20,
    fontWeight: 'bold',
    color: 'rgba(96,100,109, 1)',
  },
  avatarStyle: {
    width: deviceHeight / 15,
    height: deviceHeight / 15,
    borderRadius: 15,
    marginLeft: 10,
  },
  userName: {
    fontSize: deviceHeight/30,
    color: 'black',
    marginLeft: 20,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    height: deviceHeight/10,
  },
  contactContainer: {
    height: deviceHeight/20,
    width: deviceWidth,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    justifyContent: 'center',
  },
  contactName: {
    fontSize: deviceHeight/35,
    paddingLeft: 20,
    color: 'rgba(96,100,109, 1)',
  },
  contactsTitile: {
    marginLeft: 10,
    paddingBottom: 10,
  },
  add: {
    marginRight: 10,
    paddingBottom: 10,
  }

});
