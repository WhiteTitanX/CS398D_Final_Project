import * as React from "react";
import {Image, ImageBackground, Text, TextInput, TouchableHighlight, View} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class SignupScreen extends React.Component {
    static navigationOptions = {
        title: 'Sign Up',
    };

    state = {
        username: '',
        password: '',
        displayName: '',
        image: null
    };

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    componentDidMount() {
        this.getPermissionAsync().then(()=>{}).catch(error=>{console.log(error);});
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.imageBackground}
                    source={require('./../res/login_background.jpg')}
                >
                    <Image
                        style={{width: 128, height: 128}}
                        source={require('./../res/speech-bubble.png')}
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
                    <TouchableHighlight
                        onPress={()=>{
                            this.pickImage().then(()=>{

                            }).catch(error=>{
                                console.log(error);
                            });
                        }}
                    >
                        <View style={[styles.button, {width:200}]}><Text style={styles.buttonText}>Image Upload</Text></View>
                    </TouchableHighlight>
                    <View style={styles.row}>
                        <TouchableHighlight
                            onPress={()=>{global.firebase.auth().createUserWithEmailAndPassword(this.state.username.toLowerCase(),this.state.password)
                                .then((res)=>{
                                    //console.log(res);
                                    //After creating the user, update that user profile with the display name provided in Sign Up
                                    let avatar = global.firebase.authHelper.avatarPlaceholders[Math.floor(Math.random() * global.firebase.authHelper.avatarPlaceholders.length)]
                                    global.firebase.auth().currentUser.updateProfile({displayName:this.state.displayName, photoURL:avatar})
                                        .then(()=>{
                                            global.firebase.authService.updatePublicProfile()
                                                .then(()=>{
                                                    if(this.state.image != null){
                                                        console.log(this.state.image);
                                                        if(this.state.image.startsWith('file')){
                                                            console.log("Starts with file");
                                                            global.firebase.storage().ref(`images/${global.firebase.auth().currentUser.uid}`).put(this.state.image).then(() => {
                                                                console.log("Uploaded image - ios-android");
                                                                global.firebase.storage().ref(`images/${global.firebase.auth().currentUser.uid}`).getDownloadURL()
                                                                    .then(url => {
                                                                        global.firebase.auth().currentUser.updateProfile({
                                                                            displayName: this.state.displayName,
                                                                            photoURL: url
                                                                        }).then(() => {
                                                                            this.props.navigation.navigate('App');
                                                                        }).catch(error => {
                                                                            console.log(error);
                                                                        });
                                                                    })
                                                                    .catch(error => {
                                                                        console.log(error);
                                                                    });
                                                            }).catch(error => {
                                                                console.log(error);
                                                            })
                                                        }else {
                                                            global.firebase.storage().ref(`images/${global.firebase.auth().currentUser.uid}`).putString(this.state.image, 'data_url').then(() => {
                                                                console.log("Uploaded image");
                                                                global.firebase.storage().ref(`images/${global.firebase.auth().currentUser.uid}`).getDownloadURL()
                                                                    .then(url => {
                                                                        global.firebase.auth().currentUser.updateProfile({
                                                                            displayName: this.state.displayName,
                                                                            photoURL: url
                                                                        }).then(() => {
                                                                            this.props.navigation.navigate('App');
                                                                        }).catch(error => {
                                                                            console.log(error);
                                                                        });
                                                                    })
                                                                    .catch(error => {
                                                                        console.log(error);
                                                                    });
                                                            }).catch(error => {
                                                                console.log(error);
                                                            })
                                                        }
                                                    }else{
                                                        this.props.navigation.navigate('App');
                                                    }
                                                })
                                                .catch(error=>{
                                                    console.log(error);
                                                });
                                            //Wait until user account is updated, then navigate to chatroom listing page.
                                        });
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
