import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  FlatList
} from "react-native";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";

export default function App() {
  const [grocery, setGrocery] = useState("");
  const [data, setData] = useState([{ key: "" }]);

  buttonPressed = clear => {
    if (clear == "ADD") {
      setData([...data, { key: `${grocery}` }]);
      setGrocery("");
    } else {
      setData([{ key: `` }]);
      setGrocery("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={grocery => setGrocery(grocery)}
          value={grocery}
        />

        <View style={{ flexDirection: "row", margin: 10 }}>
          <Button
            style={buttonStyle.container}
            onPress={() => buttonPressed("ADD")}
            title="ADD"
          />
          <Button
            style={buttonStyle.container}
            onPress={() => buttonPressed("CLEAR")}
            title="ClEAR"
          />
        </View>
        <Text>Shopping List</Text>
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
