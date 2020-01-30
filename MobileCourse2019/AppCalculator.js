import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [awnser, setAwnser] = useState(0);

  return (
    <View style={styles.container}>
      <View>
        <Text>Result: {awnser}</Text>
      </View>
      <View>
        <TextInput
          keyboardType="numeric"
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={number1 => setNumber1(number1)}
          value={number1}
        />
        <TextInput
          keyboardType="numeric"
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={number2 => setNumber2(number2)}
          value={number2}
        />
      </View>

      <View style={{ flexDirection: "row", margin: 10 }}>
        <Button onPress={() => setAwnser(number1 + number2)} title="+" />
        <Button onPress={() => setAwnser(number1 - number2)} title="-" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
