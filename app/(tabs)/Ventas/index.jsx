import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./styles/index.styles"; // Importar estilos específicos
import { useRouter } from "expo-router";

import { openCamera, openGallery } from "./tools/camera";

const Ventas = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenCamera = async () => {
    const imageUri = await openCamera();
    if (imageUri) {
      setSelectedImage(imageUri);
    }
  };

  const handleOpenGallery = async () => {
    const imageUri = await openGallery();
    if (imageUri) {
      setSelectedImage(imageUri);
    }
  };

  // Router - Navegación
  const router = useRouter();

  const handleOption = (option) => {
    try {
      router.push(`/Ventas/${option.toLowerCase()}`);
    } catch (error) {
      console.error("Error al navegar a la ruta:", error);
    }
  };

  return (
    <View style={[styles.container, styles.watchView]}>
      <View style={[styles.watchView, styles.containerCamera]}>
        <Image
          source={require("../../../assets/images/react-logo.png")} // Reemplaza con tu imagen
          style={styles.image}
        />
        <TouchableOpacity style={styles.mainButton} onPress={handleOpenCamera}>
          <Text style={styles.mainButtonText}>Abrir Cámara</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainButton} onPress={handleOpenGallery}>
          <Text style={styles.mainButtonText}>Abrir Galería</Text>
        </TouchableOpacity>
        <Text style={styles.description}>
          Toma una foto a tu boleta y súbela para generar una venta.
        </Text>
      </View>
      <View style={[styles.optionsContainer, styles.watchView]}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOption("createventa")}
        >
          <Text style={styles.optionButtonText}>Boleta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOption("Factura")}
        >
          <Text style={styles.optionButtonText}>Factura</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOption("Otros")}
        >
          <Text style={styles.optionButtonText}>Otros</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Tutorial</Text>
    </View>
  );
};

export default Ventas;
