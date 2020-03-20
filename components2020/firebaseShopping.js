import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  FlatList,
  StatusBar
} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import * as firebase from "firebase";

export default function FirebaseShoppingDB() {
  const firebaseConfig = {
    apiKey: "AIzaSyDepgLg30prWDdm555lKVaj9JzSF39Plas",
    authDomain: "shoppinglist-70dfa.firebaseapp.com",
    databaseURL: "https://shoppinglist-70dfa.firebaseio.com",
    projectId: "shoppinglist-70dfa",
    storageBucket: "shoppinglist-70dfa.appspot.com",
    messagingSenderId: "268774742058",
    appId: "1:268774742058:web:b0fbc93dc29516cc844b53",
    measurementId: "G-8TYHTGN589"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const [product, setProduct] = useState("");
  const [ammount, setAmmount] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("items/")
      .on("value", snapshot => {
        const data = snapshot.val();
        const prods = Object.values(data);
        setItems(prods);
      });
  }, []);

  const saveItem = () => {
    firebase
      .database()
      .ref("items/")
      .push({ product: product, quantity: ammount });
  };

  const clearHistory = () => {};

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.textinputContainer}>
        <TextInput
          style={styles.textBox}
          onChangeText={input => setProduct(input)}
          value={product}
        />
        <TextInput
          style={styles.textBox}
          onChangeText={input => setAmmount(input)}
          value={ammount}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AwesomeButton
          backgroundColor="pink"
          backgroundDarker="#e6acd2"
          textSize={40}
          onPress={() => saveItem()}
        >
          ADD
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
          data={items}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 30 }}>{item.product}</Text>
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
