import React, { useState, useEffect } from "react";
import { TextInput, View, Button, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Excercise8Map() {
  const [location, setLocation] = useState({
    latitude: 60.200692,
    longitude: 24.934302
  });
  const [adress, setAdress] = useState("Helsinki");

  // url for testing:
  // http://www.mapquestapi.com/geocoding/v1/address?key=Blq2I4UGMSQ33wdbDcsyXRHtHSLj0TMJ&location=Helsinki

  const findLocation = () => {
    const url =
      "http://www.mapquestapi.com/geocoding/v1/address?key=" +
      myKey +
      "&location=" +
      adress;
    const myKey = "Blq2I4UGMSQ33wdbDcsyXRHtHSLj0TMJ";

    fetch(url)
      .then(data => {
        let latitudeData = data.results[0].locations[0].latLng.lat;
        let longitudeData = data.results[0].locations[0].latLng.lng;
        setLocation({ latitude: latitudeData }, { longitude: longitudeData });
      })
      .catch(error => Alert.alert(error.message));
  };
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude
          }}
          title={adress}
        />
      </MapView>
      <TextInput
        value={adress}
        onChangeText={input => setAdress(input)}
      ></TextInput>
      <Button title="Find location" onPress={() => findLocation()}></Button>
    </View>
  );
}
