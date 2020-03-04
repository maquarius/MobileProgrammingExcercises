import React, { useState, useEffect } from "react";
import { TextInput, View, Button, Alert, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Excercise10restaurantMap() {
  const [location, setLocation] = useState({
    latitude: 60.200692,
    longitude: 24.934302
  });
  const [adress, setAdress] = useState("Pasila, Helsinki");
  const [restaurants, setRestaurants] = useState([]);

  // url for testing:
  // http://www.mapquestapi.com/geocoding/v1/address?key=Blq2I4UGMSQ33wdbDcsyXRHtHSLj0TMJ&location=Helsinki

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
          latitude: latitudeData,
          longitude: longitudeData
        });
      })
      .then(findRestaurants())
      .catch(error => Alert.alert(error.message));
  };

  const findRestaurants = () => {
    //TEsting url
    // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=60.197873,24.932265&radius=500&types=restaurant&key=AIzaSyBrVYxLW3IiZHeWgjbL1GBqajup50IS6G8
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=500&types=restaurant&key=${key}`;
    const key = "AIzaSyBrVYxLW3IiZHeWgjbL1GBqajup50IS6G8";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setRestaurants(data.results);
        Alert.alert(data.results[0]);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <TextInput
        value={adress}
        onChangeText={input => setAdress(input)}
      ></TextInput>
      <Button title="Find location" onPress={() => findLocation()}></Button>
      {/* Needs region instead of initial region!! Region handles changable locations */}
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221
        }}
      >
        {restaurants.map(item => (
          <Marker
            coordinate={{
              latitude: item.geometry.location.lat,
              longitude: item.geometry.location.lng
            }}
            title={item.name}
            decription={item.vicinity}
          />
        ))}
      </MapView>
    </View>
  );
}
