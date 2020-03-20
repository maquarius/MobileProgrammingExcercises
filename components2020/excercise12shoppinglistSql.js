import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  Text,
  Button,
  Alert,
  StatusBar,
  FlatList,
  StyleSheet
} from "react-native";
import * as SQLite from "expo-sqlite";

export default function Excercise12ShoppingListSql() {
  const [product, setProduct] = useState("");
  const [ammount, setAmmount] = useState("");
  const [shopping, setShopping] = useState([]);
  const db = SQLite.openDatabase("shoppingdb.db");

  useEffect(() => {
    db.transaction(
      tx => {
        tx.executeSql(
          "create table if not exists shopping (id integer primary key not null, product text, ammount text);"
        );
      },
      null,
      updateList
    );
  }, []);

  const saveItem = () => {
    db.transaction(
      tx => {
        tx.executeSql("insert into course (product, ammount) values (?,?);", [
          product,
          ammount
        ]);
      },
      null,
      updateList
    );
  };

  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql("select * from shopping;", [], (_, { rows }) =>
        setShopping(rows._array)
      );
    });
  };

  const deleteItem = id => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from shopping where id = ?;`, [id]);
      },
      null,
      updateList
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Product"
        style={{
          marginTop: 30,
          fontSize: 18,
          width: 200,
          borderColor: "gray",
          borderWidth: 1
        }}
        onChangeText={product => setProduct(product)}
        value={product}
      />
      <TextInput
        placeholder="Ammount"
        style={{
          marginTop: 5,
          marginBottom: 5,
          fontSize: 18,
          width: 200,
          borderColor: "gray",
          borderWidth: 1
        }}
        onChangeText={ammount => setAmmount(ammount)}
        value={ammount}
      />
      <Button onPress={saveItem} title="Save" />
      <Text style={{ marginTop: 30, fontSize: 20 }}>Shopping List</Text>
      <FlatList
        style={{ marginLeft: "5%" }}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listcontainer}>
            <Text style={{ fontSize: 18 }}>
              {item.product}, {item.ammount}
            </Text>
            <Text
              style={{ fontSize: 18, color: "#0000ff" }}
              onPress={() => deleteItem(item.id)}
            >
              {" "}
              Bought
            </Text>
          </View>
        )}
        data={shopping}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  listcontainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center"
  }
});
