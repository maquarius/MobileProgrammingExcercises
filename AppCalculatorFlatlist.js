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
  const [awnser, setAwnser] = useState(0);
  const [text, setText] = useState("");
  const [data, setData] = useState([{ key: "History" }]);

  buttonPressed = plusmin => {
    if (plusmin == "+") {
      setAwnser(number1 + number2);
      sum = parseInt(number1) + parseInt(number2);
      setData([...data, { key: `${number1} + ${number2} = ${sum}` }]);
    } else {
      setAwnser(number1 - number2);
      sum = number1 - number2;
      setData([...data, { key: `${number1} - ${number2} = ${sum}` }]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Result: {awnser}</Text>
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
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Button
            style={buttonStyle.container}
            onPress={() => buttonPressed("+")}
            title="+"
          />
          <Button
            style={buttonStyle.container}
            onPress={() => buttonPressed("-")}
            title="-"
          />
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text> {item.key}</Text>}
        />
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

const buttonStyle = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10
  }
});
