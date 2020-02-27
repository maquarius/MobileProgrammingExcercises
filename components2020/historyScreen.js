import React from "react";
import { View, Flatlist } from "react-native";
function historyScreen() {
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

export default historyScreen;
