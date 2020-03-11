import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { TextInput, View, Button, Alert, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Excercise11PermissionMap() {
  const [location, setLocation] = useState({
    coords: { latitude: null, longitude: null }
  });
  const [adress, setAdress] = useState("Helsinki");

  useEffect(() => {
    getLocation();
  }, []);

  // url for testing:
  // http://www.mapquestapi.com/geocoding/v1/address?key=Blq2I4UGMSQ33wdbDcsyXRHtHSLj0TMJ&location=Helsinki

  const getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      Alert.alert("No permission to acces your current location");
    } else {
      let initlocation = await Location.getCurrentPositionAsync({});
      setLocation(initlocation);
    }
  };

  const findLocation = () => {
    const myKey = "Blq2I4UGMSQ33wdbDcsyXRHtHSLj0TMJ";
    const url =
      "http://www.mapquestapi.com/geocoding/v1/address?key=" +
      myKey +
      "&location=" +
      adress;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        let latitudeData = data.results[0].locations[0].latLng.lat;
        let longitudeData = data.results[0].locations[0].latLng.lng;

        setLocation({
          coords: {
            latitude: latitudeData,
            longitude: longitudeData
          }
        });
      })
      .catch(error => Alert.alert(error.message));
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <TextInput
        value={adress}
        onChangeText={input => setAdress(input)}
      ></TextInput>
      <Button title="Find location" onPress={() => findLocation()}></Button>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          }}
          title={adress}
        />
      </MapView>
    </View>
  );
}
