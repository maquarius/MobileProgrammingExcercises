import React from "react";
import { View, FlatList, Text } from "react-native";

export default function HistoryScreen(props) {
  const navigationOptions = { title: "History" };
  const { params } = props.navigation.state;

  return (
    <View>
      <FlatList
        data={params.history}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}
