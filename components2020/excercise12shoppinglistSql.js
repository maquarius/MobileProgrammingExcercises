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
      console.log(`Something went wrong with the creation of the database`),
      updateList()
    );
  }, []);

  const saveItem = () => {
    db.transaction(
      tx => {
        tx.executeSql("insert into shopping (product, ammount) values (?,?);", [
          product,
          ammount
        ]);
      },
      console.log(
        `Something went wrond during the saving of ${product} and ${ammount}`
      ),
      updateList()
    );
  };

  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql("select * from shopping;", [], (_, { rows }) =>
        setShopping(rows._array)
      );
      setAmmount("");
      setProduct("");
      console.log("update done");
    });
  };

  const deleteItem = id => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from shopping where id = ?;`, [id]);
      },
      console.log(`something went wrong when deleting item with id ` + id),
      updateList()
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
        onChangeText={productInput => setProduct(productInput)}
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
        onChangeText={ammountInput => setAmmount(ammountInput)}
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
