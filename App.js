import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  FlatList
} from "react-native";

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  const buttonPlus = () => {
    setTotal(number1 + number2);
  };

  const buttonMinus = () => {
    setTotal(number1 - number2);
  };
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>Result: {total}</Text>
      </View>
      <View style={{ flex: 1 }}>
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
        <Button style={styles.button} title=" + " onPress={buttonPlus} />
        <Button style={styles.button} title=" - " onPress={buttonMinus} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center"
  },
  textBox: {
    width: 200,
    borderBottomColor: "blue",
    borderWidth: 1
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 3
  },
  result: {
    flex: 2,
    justifyContent: "center"
  },
  resultText: {
    fontSize: 30
  },
  button: {
    flex: 1
  }
});
