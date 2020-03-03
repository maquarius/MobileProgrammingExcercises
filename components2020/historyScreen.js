import React from "react";
import { View, Flatlist } from "react-native";
<<<<<<< HEAD
export default function historyScreen() {
=======

export default function HistoryScreen(props) {
  navigationOptions = { title: "History" };
>>>>>>> 97aad9b4ef4f6b575fc764f0e9fff004a165d7fb
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
<<<<<<< HEAD

=======
HistoryScreen.navigationOptions = ({ navigate }) => ({
  title: "History"
});
>>>>>>> 97aad9b4ef4f6b575fc764f0e9fff004a165d7fb
