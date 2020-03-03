import React, { useState } from "react";
import {
  TextInput,
  FlatList,
  Image,
  Text,
  Button,
  View
} from "react-native-gesture-handler";

const Excercise7RecipeFinder = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const fetchResults = () => {
    let url = "http://www.recipepuppy.com/api/?i=" + keyword;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setResults(data);
      })
      .catch(error => {
        Alert.alert("Error", error);
      });
  };
  return (
    <View>
      <FlatList
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
      <Button title="get recipes!" onPress={fetchResults()} />
    </View>
  );
};

export default Excercise7RecipeFinder;
