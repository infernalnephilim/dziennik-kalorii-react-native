import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

export default class App extends React.Component {
    constructor(props){
        super(props);
        // createAppContainer(TabNavigator);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Strona główna</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Profile: ProfileScreen,
});
