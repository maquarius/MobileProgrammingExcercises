import React, { useState, useEffect } from "react";
import {
  TextInput,
  Text,
  Button,
  Picker,
  View,
  StyleSheet,
  Alert
} from "react-native";

export default function excercise8CurrencyConverter() {
  const [ammount, setAmmount] = useState("");
  const [results, setResults] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [chosenCurrency, setChosenCurrency] = useState("");
  const [convertedMoney, setConvertedMoney] = useState(0);

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = () => {
    let url =
      "http://data.fixer.io/api/latest?access_key=3b89617544eab4d949bff93ec38d4b94&format=1";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setResults(data.rates);
        setCurrencies(Object.keys(data.rates));
      })
      .catch(error => {
        Alert.alert("Error", error.message);
      });
  };

  //First loops through key in results object. If key matches chosen currency then returns the matching exchange rate
  const convertMoney = () => {
    for (const valuta in results) {
      if (chosenCurrency == valuta) {
        setConvertedMoney(
          parseFloat(parseInt(ammount) * results[valuta]).toFixed(2)
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        {ammount} {chosenCurrency} is {convertedMoney} in Euros
      </Text>

      <View style={styles.bottom}>
        <TextInput
          style={{ flex: 1 }}
          value={ammount}
          placeholder="Ammount to convert"
          keyboardType="numeric"
          onChangeText={ammount => setAmmount(ammount)}
        />
        <Picker
          style={{ flex: 1 }}
          selectedValue={chosenCurrency}
          onValueChange={itemValue => setChosenCurrency(itemValue)}
        >
          {currencies.map((item, key) => (
            <Picker.Item label={item} value={item} key={key}></Picker.Item>
          ))}
        </Picker>
      </View>

      <Button title="Convert" onPress={() => convertMoney()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    fontSize: 30
  },
  resultText: {
    fontSize: 30
  },
  textInputContainer: {
    flex: 1
  },
  textBox: {
    width: 200,
    borderBottomColor: "#77C3EC",
    borderWidth: 1,
    backgroundColor: "white",
    margin: 4
  },
  buttonContainer: {
    flexDirection: "row"
  },
  result: {
    flex: 2,
    justifyContent: "center"
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
