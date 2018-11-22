import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Text>This is profile screen</Text>
        );
    }
}

export default ProfileScreen;