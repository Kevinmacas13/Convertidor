import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function App() {
  const [dolares, setDolares] = useState(0);
  const pesosColombianos = () => {
    return dolares * 3658.52;
  };
  const euros = () => {
    return dolares * 0.85;
  };
  return (
    <View style={styles.container}>
      <Text>Convertidor</Text>
      <StatusBar style="auto" />
      <Text> Ingrese un valor en dolares</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Ingrese un valor en  dolares"
        value={dolares}
        onChangeText={(txt) => {
          setDolares(parseFloat(txt));
        }}
      ></TextInput>
      <Button
        title="Convertir a Pesos Colombianos"
        onPress={() => {
          Alert.alert("Pesos Colombianos: " + pesosColombianos());
        }}
      ></Button>
      <Button
        title="Convertir a Euros"
        onPress={() => {
          Alert.alert("Euros: " + euros());
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 5,
  },
});
