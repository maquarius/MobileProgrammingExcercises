import React from "react";
import { View, Flatlist } from "react-native";
export default function historyScreen() {
  const { params } = props.navigation.state;

  return (
    <View>
      <Flatlist
        data={params.history}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}

