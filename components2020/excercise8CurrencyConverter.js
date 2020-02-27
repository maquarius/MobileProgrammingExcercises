import React from "react";
import {
  TextInput,
  FlatList,
  Image,
  Text,
  Picker,
  View
} from "react-native-gesture-handler";

function excercise8CurrencyConverter() {
  const [ammount, setAmmount] = useState(0);
  const [results, setResults] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [chosenCurrency, setChosenCurrency] = useState("");
  const [convertedMoney, setConvertedMoney] = useState(0);

  useEffect;
  const fetchRates = () => {
    let url =
      "http://data.fixer.io/api/latest?access_key=3b89617544eab4d949bff93ec38d4b94&format=1";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setResults(data);
        setCurrencies(data.rates.keys());
      })
      .catch(error => {
        Alert.alert("Error", error);
      });
  };

  const convertMoney = () => {
    for (let i = 0; currencies.length > i; i++) {
      if (chosenCurrency === results.rates.keys(i)) {
          setConvertedMoney(ammount * results.rates.{chosencurrency});
          
      }
    }
  };

  return (
    <View>
      <Text>
        {convertedMoney}
        {chosenCurrency}
      </Text>
      <TextInput
        value={ammount}
        placeholder="Ammount to convert"
        onChangeText={ammount => setAmmount(ammount)}
      />
      <Picker
        selectedValue={chosenCurrency}
        onValueChange={(itemValue, itemIndex) => setChosenCurrency(itemValue)}
      >
        {currencies.map(item => (
          <Picker.item label={item} value={item}></Picker.item>
        ))}
      </Picker>
      <Button title="Convert" onPress={convertMoney} />
    </View>
  );
}

export default excercise8CurrencyConverter;
