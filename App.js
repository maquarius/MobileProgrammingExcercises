import React, { useState, useEffect } from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
<<<<<<< HEAD
import CalculatorScreen from "./components2020/calculatorScreen";
import HistoryScreen from "./components2020/historyScreen";
=======
import CalculatorScreen from "./components2020/calculatorScreen.js";
import HistoryScreen from "./components2020/historyScreen.js";
>>>>>>> 97aad9b4ef4f6b575fc764f0e9fff004a165d7fb

const AppNavigator = createStackNavigator({
  Calculator: { screen: CalculatorScreen },
  History: { screen: HistoryScreen }
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
