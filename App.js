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

export default function App() {
  const AppNavigator = createBottomTabNavigator({
    Home: { screen: HomeScreen },
    Settings: { screen: SettingScreen }
  });
}
