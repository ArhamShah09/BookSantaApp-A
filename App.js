import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppTabNavigator } from './components/AppTabNavigator';

export default class App extends React.Component {
  render () {
    return (
      <AppContainer/>
    );
  }
}

const SwitchNavigator = createSwitchNavigator ({
  WelcomeScreen : { screen : WelcomeScreen },
  BottomTab : { screen : AppTabNavigator}
});

const AppContainer = createAppContainer (SwitchNavigator);