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
  const [food, setFood] = useState("");
  const [history, setHistory] = useState([]);

  const addFood = () => {
    setFood(food);
    setHistory([...history, { key: food }]);
    setFood("");
  };

  const clearHistory = () => {
    setFood("");
    setHistory([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textinputContainer}>
        <TextInput
          style={styles.textBox}
          onChangeText={input => setFood(input)}
          value={food}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AwesomeButton
          backgroundColor="pink"
          backgroundDarker="#e6acd2"
          textSize={40}
          onPress={addFood}
        >
          ADD
        </AwesomeButton>
        <AwesomeButton
          backgroundColor="pink"
          backgroundDarker="#e6acd2"
          textSize={40}
          onPress={clearHistory}
        >
          CLEAR
        </AwesomeButton>
      </View>
      <View style={styles.historyContainer}>
        <Text style={{ fontSize: 30 }}>History: </Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: 300
          }}
        />
        <FlatList
          data={history}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 30 }}>{item.key}</Text>
          )}
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
    alignItems: "center"
  },

  textBox: {
    flex: 1,
    width: 300,
    fontSize: 30,
    borderBottomColor: "#77C3EC",
    borderWidth: 1,
    backgroundColor: "white",
    margin: 4
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around"
  },
  result: {
    flex: 1
  },
  resultText: {
    fontSize: 30,
    flex: 1
  },
  button: {
    padding: 80,
    margin: 10
  }
});
