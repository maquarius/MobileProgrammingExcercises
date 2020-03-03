import React, { Component } from "react";
import { Text, View, Button, StatusBar } from "react-native";

export default function HomeScreen(props) {
  navigationOptions = { title: "Home" };

  const { navigate } = props.navigation;

  return (
    <View>
      <StatusBar hidden={true} />
      <Text> This is the homescreen </Text>
      <Button
        onPress={() => navigate("Settings", { user: "Mike" })}
        title="Settings"
      />
    </View>
  );
}

HomeScreen.navigationOptions = ({ navigate }) => ({ title: "Home" });
