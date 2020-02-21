import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  FlatList
} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import settingsScreen from "./components2020/settingsScreen";
import HomeScreen from "./components2020/homescreen";
import { Ionicons } from "@expo/vector-icons";

const AppNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: settingsScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Home") {
          return <Ionicons name="md-home" size={25} color={tintColor} />;
        } else if (routeName === "Settings") {
          return <Ionicons name="md-settings" size={25} color={tintColor} />;
        }
      }
    })
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
