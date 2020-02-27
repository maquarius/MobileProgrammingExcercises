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
import CalculatorScreen from "./components2020/calculatorScreen";
import HistoryScreen from "./components2020/historyScreen";
import CalculatorScreen from "./components2020/calculatorScreen";

const AppNavigator = createStackNavigator({
  Calculator: { screen: CalculatorScreen },
  History: { screen: HistoryScreen }
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
