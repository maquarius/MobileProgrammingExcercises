import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  Stylesheet
} from "react-native";

export default function calculatorScreen() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);
  const [history, setHistory] = useState([]);

  const buttonPlus = () => {
    setTotal(number1 + number2);
    setHistory([
      ...history,
      { key: number1 + " + " + number2 + " = " + total }
    ]);
  };

  const buttonMinus = () => {
    setTotal(number1 - number2);
    setHistory([
      ...history,
      { key: number1 + " - " + number2 + " = " + total }
    ]);
  };

  React.useEffect(() => {}, [history]);

  const { navigate } = props.navigation;
  return (
    <View>
      <View>{total}</View>
      <TextInput
        onChangeText={input => setNumber1(parseInt(input))}
        value={number1}
        keyboardType="numeric"
      />
      <TextInput
        onChangeText={input => setNumber2(parseInt(input))}
        value={number2}
        keyboardType="numeric"
      />
      <Button
        onPress={() => navigate("history", { history: history })}
        title="History"
      />
    </View>
  );
}

export default calculatorScreen;
