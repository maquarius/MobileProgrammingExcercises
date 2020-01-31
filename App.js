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
  const [number, setNumber] = useState(0);
  const [guess, setGuess] = useState(0);
  const [result, setResult] = useState("Guess a number between 1-100");
  const [tries, setTries] = useState(0);

  const buttonGuess = () => {
    if (number === guess) {
      setResult("You guessed the number in" + { tries } + "guesses");
      alert(result);
    } else if (guess > 100 || guess < 1) {
      setResult(
        "Your guess is not a valid guess. Please guess a number between 1-100"
      );
    } else if (number < guess) {
      setResult("Your guess of " + { guess } + " is too high");
      setTries(tries + 1);
    } else if (number > guess) {
      setResult("Your guess of " + { guess } + " is too low");
      setTries(tries + 1);
    }
  };

  React.useEffect(() => {
    setNumber(51);
    alert(number);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <TextInput
          style={styles.textBox}
          onChangeText={input => setGuess(parseInt(input))}
          value={guess}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <AwesomeButton
          backgroundColor="pink"
          backgroundDarker="#e6acd2"
          textSize={40}
          onPress={buttonGuess}
        >
          MAKE GUESS
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
