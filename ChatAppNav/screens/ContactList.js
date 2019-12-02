import * as React from "react";
import {Text, TouchableHighlight, View, ScrollView, Image} from "react-native";

export default class ContactList extends React.Component {
    static navigationOptions = {
        title: 'Contacts'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Contact list</Text>
            </View>
        );
    }
}
