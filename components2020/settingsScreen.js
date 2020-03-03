import React from "react";
import { Text, StatusBar, View } from "react-native";

export default function settingsScreen(props) {
  const { params } = props.navigation.state;

  return (
    <View>
      <StatusBar hidden={true} />
      <Text> This is the settingsScreen. Welcome {params.user} </Text>
    </View>
  );
}
