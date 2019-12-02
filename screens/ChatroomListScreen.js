import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	View,
	Dimensions,
} from 'react-native';

import { MonoText } from '../components/StyledText';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function ChatroomListScreen() {
	state = {
		groups: [
			{
				groupName: 'CIS120 Chat',
				groupImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rr4Yntjn6QIhXmPESm1Grv2YodbvfuXyi_8JRHSnb6EQz1OZ6g&s',
			},
			{
				groupName: 'Baseball Chat',
				groupImage: 'https://www.baseballprospectus.com/wp-content/uploads/2019/04/baseball-on-dirt-1000x714.jpg',
			},
			{
				groupName: 'Music Production Team Chat',
				groupImage: 'https://pmcvariety.files.wordpress.com/2019/01/apple-music.jpg?w=1000&h=563&crop=1',
			},
			{
				groupName: 'The Squad Chat',
				groupImage: 'https://s3.amazonaws.com/s3.mp-cdn.net/56/e7/341a69a52dfdace8ffc671b0b743-is-the-wall-street-journal-stupid.jpg',
			},
		]
	}
	return (
		<View style={styles.container}>
				<View style={styles.titleBarContainer}>
					<View style={styles.titleBarLeft}>
						<Text style={styles.titleBarText}>
							Your Chats
						</Text>
					</View>
						<TouchableHighlight
							onPress={()=>{alert("Add the group id");}}
						>
							<View style={styles.add}>
								<Text style={styles.titleBarText}>
									+
								</Text>
							</View>
						</TouchableHighlight>
				</View>

				<ScrollView>
        			<View style={styles.contactsContainer}>
        				{this.state.groups.map((gName) => (
          					<TouchableHighlight 
            					onPress={() => { 
             					alert('Text the contact') 
            				}} >
								<View style={styles.contactContainer}>
									<Text style={styles.contactName}>
										{gName.groupName}
									</Text>
								</View>
          					</TouchableHighlight>
						)
						)}
					</View>
				</ScrollView>				
		</View>
	);
}

ChatroomListScreen.navigationOptions = {
	header: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	titleBarContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: deviceHeight / 9,
		borderBottomWidth: 1,
		borderBottomColor: '#d9d9d9',
		paddingTop: 30,
		alignItems: 'flex-end',
	},
	titleBarLeft: {
		marginLeft: 10,
    	paddingBottom: 10,
	},
	titleBarRight: {
		textAlign: 'right',
		flex: 1
	},
	titleBarText:{
		fontSize: deviceHeight / 20,
    	fontWeight: 'bold',
	},
	groupImage: {
		borderRadius: 15,
		padding: 10,
		deviceHeight: 2*(deviceHeight/20),
		width: 2*(deviceHeight/20),
	},
	groupContainer: {
		height: 3*(deviceHeight/20),
		width: deviceWidth,
		borderBottomWidth: 1,
		borderBottomColor: '#d9d9d9',
		justifyContent: 'center',
	},
	groupText: {
		fontSize: 18,
		color: 'rgba(96,100,109, 1)',
	},
	groupLeft: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	groupMiddle: {
		flex: 3,
		alignItems: 'left',
		justifyContent: 'center',
		paddingLeft: 5
	},
	groupRight: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
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
	ChatroomListScreenFilename: {
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
	groupsContainer: {
		flexDirection: 'row',
    height: 8*(deviceHeight/9),
	},
	groupNameContainer: {
		height: 3*(deviceHeight/20),
		width: deviceWidth,
		borderBottomWidth: 1,
		borderBottomColor: '#d9d9d9',
		justifyContent: 'center',
	},
	groupTextName: {
		fontSize: deviceHeight/35,
		paddingLeft: 20,
		color: 'rgba(96,100,109, 1)',
	},
	contactContainer: {
		height: 2*(deviceHeight/20),
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
	add: {
		marginRight: 10,
		paddingBottom: 10,
	},
});
