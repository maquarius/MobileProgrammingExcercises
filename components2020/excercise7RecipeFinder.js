import React, { useState } from "react";
import { TextInput, FlatList, Image, Text, Button, View } from "react-native";

export default function Excercise7RecipeFinder() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const fetchResults = () => {
    let url = "http://www.recipepuppy.com/api/?i=" + keyword;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
      })
      .catch(error => {
        Alert.alert("Error", error);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifiContent: "space-between"
      }}
    >
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={results}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: item.thumbnail }}
            ></Image>
          </View>
        )}
      />
      <TextInput
        value={keyword}
        placeholder="Keyword"
        onChangeText={keyword => setKeyword(keyword)}
      />
      <Button title="get recipes!" onPress={() => fetchResults()} />
    </View>
  );
}
