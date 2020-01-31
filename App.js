import React, { useState } from "react";
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
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
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
          value={String(number1)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textBox}
          onChangeText={input => setNumber2(parseInt(input))}
          value={String(number2)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <AwesomeButton
          backgroundColor="pink"
          backgroundDarker="#e6acd2"
          width={100}
          textSize={60}
          onPress={buttonPlus}
        >
          +
        </AwesomeButton>
        <AwesomeButton
          backgroundColor="pink"
          backgroundDarker="#e6acd2"
          width={100}
          textSize={60}
          onPress={buttonMinus}
        >
          -
        </AwesomeButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#B8E2F2",
    alignItems: "center"
  },
  textBox: {
    width: 200,
    borderBottomColor: "#77C3EC",
    borderWidth: 1,
    backgroundColor: "white",
    margin: 4
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
    padding: 80
  }
});
