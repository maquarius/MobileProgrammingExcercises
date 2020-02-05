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

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);

  const buttonPlus = () => {
    let sum = number1 + number2;
    setResult(sum);
    let text = number1 + " + " + number2 + " = " + sum;
    setText(text);
    setHistory([...history, { key: text }]);
  };

  const buttonMinus = () => {
    let sum = number1 - number2;
    setResult(sum);
    let text = number1 + " - " + number2 + " = " + sum;
    setText(text);
    setHistory([...history, { key: text }]);
  };

  React.useEffect(() => {}, [history]);

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.textinputContainer}>
        <TextInput
          style={styles.textBox}
          onChangeText={input => setNumber1(parseInt(input))}
          value={number1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textBox}
          onChangeText={input => setNumber2(parseInt(input))}
          value={number2}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <AwesomeButton
          backgroundColor="pink"
          backgroundDarker="#e6acd2"
          textSize={40}
          onPress={buttonMinus}
        >
          -
        </AwesomeButton>
        <AwesomeButton
          backgroundColor="pink"
          backgroundDarker="#e6acd2"
          textSize={40}
          onPress={buttonPlus}
        >
          +
        </AwesomeButton>
      </View>
      <View style={styles.historyContainer}>
        <Text>History: </Text>
        <FlatList
          data={history}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#B8E2F2",
    alignItems: "center",
    justifyContent: "center"
  },
  textinputContainer: {
    flex: 1
  },
  resultContainer: {
    flex: 1
  },
  historyContainer: {
    flex: 4,
    backgroundColor: "red"
  },
  textBox: {
    flex: 1,
    width: 200,
    borderBottomColor: "#77C3EC",
    borderWidth: 1,
    backgroundColor: "white",
    margin: 4
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 1
  },
  result: {
    flex: 1
  },
  resultText: {
    fontSize: 30,
    flex: 1
  },
  button: {
    padding: 80
  }
});
s;
