import React, { Component, useState } from "react";
import { StyleSheet, Alert, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [text, setText] = useState("Guess a number between 1-100");
  const [numberGuess, setNumberGuess] = useState(0);
  const [guess, setGuess] = useState(0);
  const [numberRandom, setNumberandom] = React.useState(
    Math.floor(Math.random() * 100) + 1
  );

  const buttonPressed = () => {
    if (guess > numberRandom) {
      setText(`Your guess ${guess} is too high`);
      setNumberGuess(numberGuess + 1);
    } else if (guess < numberRandom) {
      setText(`Your guess ${guess} is too low`);
      setNumberGuess(numberGuess + 1);
    } else {
      Alert.alert(`You guessed the number in ${numberGuess} guesses`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
        style={{ height: 40, width: 60, borderColor: "gray", borderWidth: 1 }}
        keyboardType="numeric"
        onChangeText={guess => setGuess(guess)}
        value={guess}
      />
      <View style={{ flexDirection: "row" }}>
        <Button title="Make a guess" onPress={() => buttonPressed()} />
        <Button title="Second button!" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
