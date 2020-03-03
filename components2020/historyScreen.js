import React from "react";
import { View, Flatlist } from "react-native";

export default function HistoryScreen(props) {
  navigationOptions = { title: "History" };
  const { params } = props.navigation.state;

  return (
    <View>
      <Flatlist
        data={params.data}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}
HistoryScreen.navigationOptions = ({ navigate }) => ({
  title: "History"
});
