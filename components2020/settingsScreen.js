import React from "react";
import { Text, StatusBar, View } from "react-native";

export default function settingsScreen() {
  return (
    <View>
      <StatusBar hidden={true} />
      <Text> This is the settingsScreen </Text>
    </View>
  );
}
