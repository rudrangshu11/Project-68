import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import facebook from './screens/fb.js';
import insta from './screens/in.js';

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  Facebook : {screen : facebook},
  Instagram : {screen : insta}
});

const AppContainer = createAppContainer(TabNavigator)
