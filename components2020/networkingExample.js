import React from "react";
import { View, TextInput, FlatList, Button } from "react-native";

function networkingExample(props) {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);

  const getJobs = () => {
    let url =
      "http://jobs.github.com/positions.json?description=" +
      description +
      "&location=" +
      location;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setJobs(data);
      })
      .catch(error => {
        Alert.alert("Error", error);
      });
  };

  return (
    <View>
      <TextInput
        value={description}
        placeholder="Description"
        onChangeText={description => setDescription(description)}
      />
      <TextInput
        value={location}
        placeholder="Location"
        onChangeText={location => setDescription(location)}
      />
      <Button title="get Jobs!" onPress={getJobs} />
      <FlatList
        data={jobs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>
            {item.title}, {item.company}
          </Text>
        )}
      />
    </View>
  );
}

export default networkingExample;
