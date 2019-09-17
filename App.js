import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  FlatList
} from "react-native";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import SettingScreen from "./SettingScreen";

const AppNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingScreen }
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
