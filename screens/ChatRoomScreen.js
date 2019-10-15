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
  TextInput,
} from 'react-native';
import { MonoText } from '../components/StyledText';
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";

export default function ChatRoomScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer,styles.headerStyle]}>
        <Text style={styles.headerText}>
          Chat With Chad
        </Text>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        {/* Your Message */}
        <View style={styles.viewWrapItemRight}>
          <Text style={styles.textItemRight}>How are you today?</Text>
        </View>

        {/* Their Message field */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.avatarItemLeft}
            source={{uri: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"}}
          />
          <View style={styles.viewWrapItemLeft}>
            <Text style={styles.textItemLeft}>I'm doing great!</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.avatarItemLeft}
            source={{uri: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"}}
          />
          <View style={styles.viewWrapItemLeft}>
            <Text style={styles.textItemLeft}>Do you want to go to the library?</Text>
          </View>
        </View>

        {/* Your Message */}
        <View style={styles.viewWrapItemRight}>
          <Text style={styles.textItemRight}>That sounds perfect!</Text>
        </View>

      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <View style={styles.viewWrapInput}>
          {/* Input field */}
          <TextInput
            underlineColorAndroid="rgba(0,0,0,0)"
            style={styles.viewTextInput}
            placeholder="Type your message..."
            onChangeText={value => {
              //Do work here to send message.
            }}
            //value={this.state.currentMessage}
          />

          {/* Button send message */}
          <TouchableOpacity
            //onPress={this.sendMessage}
          >
            <Ionicons name="md-send" size={32} color="#488aff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

ChatRoomScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
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
  ChatRoomScreenFilename: {
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
  headerBarContainer: {
    alignItems: 'center',
    backgroundColor: 'cream',
    paddingVertical: 0,
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
    paddingVertical: 0,
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
  viewWrapInput: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10
  },
  viewTextInput: {
    flex: 1,
  },

  // Message right
  viewWrapItemRight: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 6,
    marginTop: 6
  },
  textItemRight: {
    borderRadius: 10,
    width: 170,
    backgroundColor: 'lightskyblue',
    color: 'black',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden'
  },

  // Message left
  viewWrapItemLeft: {
    marginLeft: 10,
    marginBottom: 6,
    marginTop: 6,
  },
  textItemLeft: {
    borderRadius: 10,
    width: 170,
    backgroundColor: '#203152',
    color: 'white',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden'
  },
  avatarItemLeft: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10
  },
  // my own styles for titleAndIcon
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 8,
  },
  headerStyle: {
    backgroundColor: '#455a64',
  },
  // my own styles for titleAndIcon
  headerText: {
    paddingLeft: 8,
    color: '#d9d9d9',
    fontFamily: 'NotoSans-Regular',
    fontSize: 20,
    textAlign: 'center',
    width: '100%'
  }

});
