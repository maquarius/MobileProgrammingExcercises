import React, { useState, useEffect } from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CalculatorScreen from "./components2020/calculatorScreen";
import HistoryScreen from "./components2020/historyScreen";
import Excercise7RecipeFinder from "./components2020/excercise7RecipeFinder";
import Excercise8Map from "./components2020/excercise8Map";
const AppNavigator = createStackNavigator({
  Calculator: { screen: CalculatorScreen },
  History: { screen: HistoryScreen }
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <Excercise8Map />;
}
