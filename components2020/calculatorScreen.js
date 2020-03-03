<<<<<<< HEAD
import React, {useState, version} from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  Stylesheet
} from "react-native";

export default function calculatorScreen(props) {
=======
import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

export default function CalculatorScreen(props) {
  navigationOptions = { title: "Calculator" };

>>>>>>> 97aad9b4ef4f6b575fc764f0e9fff004a165d7fb
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [total, setTotal] = useState(0);
  const [history, setHistory] = useState([]);
  const [text, setText] = useState("");

  const buttonPlus = () => {
    let sum = parseInt(number1) + parseInt(number2);
    setTotal(sum);
    let text = number1 + " + " + number2 + " = " + sum;
    setText(text);
    setHistory([...history, { key: text }]);
  };

  const buttonMinus = () => {
    let sum = parseInt(number1) - parseInt(number2);
    setTotal(sum);
    let text = number1 + " - " + number2 + " = " + sum;
    setHistory([...history, { key: text }]);
  };

  const { navigate } = props.navigation;
  return (
<<<<<<< HEAD
    <View>
      <View>{total}</View>
      <TextInput
        onChangeText={input => setNumber1(parseInt(input))}
        value={number1}
        keyboardType="numeric"
      />
      <TextInput
        onChangeText={input => setNumber2(parseInt(input))}
        value={number2}
        keyboardType="numeric"
      />
      <View>
        <Button onPress={() => buttonPlus()} title="+"></Button>
        <Button onPress={() => buttonMinus()} title="-"></Button>
      
      </View>
      <Button
        onPress={() => navigate("history", { history: history })}
        title="History"
      />
=======
    <View style={styles.container}>
      <Text style={styles.resultText}>{total}</Text>
      <View stlye={styles.textInputContainer}>
        <TextInput
          onChangeText={input => setNumber1(input)}
          value={number1}
          keyboardType="numeric"
          style={styles.textBox}
        />
        <TextInput
          onChangeText={input => setNumber2(input)}
          value={number2}
          keyboardType="numeric"
          style={styles.textBox}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={() => buttonMinus()}
          title="-"
        ></Button>
        <Button
          style={styles.button}
          onPress={() => buttonPlus()}
          title="+"
        ></Button>
        <Button
          onPress={() => navigate("History", { data: { history } })}
          title="History"
        />
      </View>
>>>>>>> 97aad9b4ef4f6b575fc764f0e9fff004a165d7fb
    </View>
  );
}

<<<<<<< HEAD
=======
CalculatorScreen.navigationOptions = ({ navigate }) => ({
  title: "Calculator"
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#B8E2F2",
    alignItems: "center"
  },
  resultText: {
    fontSize: 30
  },
  textInputContainer: {
    flex: 1
  },
  textBox: {
    width: 200,
    borderBottomColor: "#77C3EC",
    borderWidth: 1,
    backgroundColor: "white",
    margin: 4
  },
  buttonContainer: {
    flexDirection: "row"
  },
  result: {
    flex: 2,
    justifyContent: "center"
  },
  button: {}
});
>>>>>>> 97aad9b4ef4f6b575fc764f0e9fff004a165d7fb
