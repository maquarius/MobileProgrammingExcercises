import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  FlatList
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import settingsScreen from "./components2020/settingsScreen";
import HomeScreen from "./components2020/homescreen";

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: settingsScreen }
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
