import React, { useState, useEffect } from "react";
import { TextInput, View, Button, Alert, StatusBar } from "react-native";
import * as SQLite from "expo-sqlite";

export const SqlExample = () => {
  const [credit, setCredit] = useState("");
  const [titel, setTitle] = useState("");
  const [courses, setCourse] = useState([]);
  const db = SQLite.openDatabase("coursedb.db");

  useEffect(() => {
    db.transaction(
      tx => {
        tx.executeSql(
          "create table if not exists course (id integer primary key not null, credits int, title text);"
        );
      },
      null,
      updateList
    );
  }, []);

  constsaveItem = () => {
    db.transaction(
      tx => {
        tx.executeSql("insert into course (credits,title) values (?,?);", [
          parseInt(credit),
          title
        ]);
      },
      null,
      updateList
    );
  };

  constupdateList = () => {
    db.transaction(tx => {
      tx.executeSql("select * from course;", [], (_, { rows }) =>
        setCourses(rows._array)
      );
    });
  };

  constdeleteItem = id => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from course where id = ?;`, [id]);
      },
      null,
      updateList
    );
  };

  <FlatList
    style={{ marginLeft: "5%" }}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item }) => (
      <View style={styles.listcontainer}>
        <Text>
          {item.title},{item.credits}{" "}
        </Text>
        <Text style={{ color: "#0000ff" }} onPress={() => deleteItem(item.id)}>
          done
        </Text>
      </View>
    )}
    data={courses}
  />;

  return (
    <View>
      <TextInput
        placeholder="Title"
        onChangeText={title => setTitle(title)}
        value={title}
      />{" "}
      <TextInput
        placeholder="Credits"
        keyboardType="numeric"
        onChangeText={credit => setCredit(credit)}
        value={credit}
      />{" "}
      <Button onPress={saveItem} title="Save" />
    </View>
  );
};
