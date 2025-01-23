import React, { useState } from "react";
import InputForm from "../../../components/InputForm";
import { View, StyleSheet } from "react-native";

const CreateVenta  = () => {
  const [razonSocial, setRazonSocial] = useState("");
  const [direccion, setDireccion] = useState("");

  return (
    <View style={styles.container}>
      
      <View></View> //aqui para una iamgen q se agregara

      <InputForm
        label="Razon Social"
       
        value={razonSocial}
        onChangeText={setRazonSocial}
        required={true}
      />
      <InputForm
        label="Nro. Documento"
        value={razonSocial}
        onChangeText={setRazonSocial}
        required={true}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});

export default CreateVenta ;
