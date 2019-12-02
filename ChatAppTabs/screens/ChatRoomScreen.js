import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import { MonoText } from '../components/StyledText';
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function ChatRoomScreen() {

  const [name,setName] = useState("");
  const [currentMessage,setCurrentMessage] = useState("");

  setInterval(()=>{
    if(global.name!==name){
      setName(global.name);
    }
  },100);

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer]}>
          <Text style={styles.headerText}>
            Chat With {name}
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
              setCurrentMessage(value);
            }}
            value={currentMessage}
          />

          {/* Button send message */}
          <TouchableOpacity
            onPress={()=>{
              global.name=currentMessage;
              setCurrentMessage("");
            }}
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
    height: deviceHeight,
    width: deviceWidth,
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
    backgroundColor: 'green',
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
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
  },
  viewTextInput: {
    flex: 1,
    fontSize: deviceHeight/48,
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
    width: deviceWidth/2,
    backgroundColor: '#8AEA95',
    color: 'black',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden',
    fontSize: deviceHeight/48,
  },

  // Message left
  viewWrapItemLeft: {
    marginLeft: 10,
    marginBottom: 6,
    marginTop: 6,
  },
  textItemLeft: {
    borderRadius: 10,
    width: deviceWidth/2,
    backgroundColor: '#63D471',
    color: 'white',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden',
    fontSize: deviceHeight/48,
  },
  avatarItemLeft: {
    width: deviceWidth/12,
    height: deviceWidth/12,
    borderRadius: 15,
    marginLeft: 10
  },
  // my own styles for titleAndIcon
  headerContainer: {
    flexDirection: 'row',
    height: deviceHeight / 9,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    paddingTop: 30,
    alignItems: 'flex-end',
  },
  //headerStyle: {
    //backgroundColor: '#455a64',
  //},
  // my own styles for titleAndIcon
  headerText: {
    paddingLeft: 8,
    fontFamily: 'NotoSans-Regular',
    fontSize: deviceHeight / 20,
    fontWeight: 'bold',
    width: '100%'
  }
});
