import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const InputForm = ({ label, required = false, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label} {required && <Text style={styles.asterisk}>*</Text>}
      </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  asterisk: {
    color: "red",
  },
  input: {
    height: 40,
    borderBottomWidth: 1, // Solo línea inferior
    borderBottomColor: "#000", // Color de la línea inferior
    fontSize: 16,
    paddingHorizontal: 0,
    color: "#333", // Color del texto ingresado
    backgroundColor: "transparent", // Elimina cualquier color de fondo
    borderWidth: 0, // Elimina los bordes del recuadro
  },
});

export default InputForm;
