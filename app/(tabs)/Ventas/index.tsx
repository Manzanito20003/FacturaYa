import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './index.styles'; // Importar estilos específicos
import { useRouter } from 'expo-router';

const Ventas: React.FC = () => {
  const router = useRouter();

  const handleCamera = () => {
    Alert.alert('Acción', 'Abrir cámara (implementación futura)');
    // Aquí puedes implementar la funcionalidad de la cámara con `expo-camera`.
  };

  const handleOption = (option: string) => {
    Alert.alert('Opción seleccionada', `Seleccionaste: ${option}`);
    // Puedes navegar a una pantalla específica o ejecutar funciones según la opción.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VENTAS</Text>
      <Image
        source={require('../../../assets/images/react-logo.png')} // Reemplaza con tu imagen
        style={styles.image}
      />
      <TouchableOpacity style={styles.mainButton} onPress={handleCamera}>
        <Text style={styles.mainButtonText}>CAMARA</Text>
      </TouchableOpacity>
      <Text style={styles.description}>
        Toma una foto a tu boleta y sube para generar una venta.
      </Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOption('Boleta')}
        >
          <Text style={styles.optionButtonText}>Boleta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOption('Factura')}
        >
          <Text style={styles.optionButtonText}>Factura</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOption('Otros')}
        >
          <Text style={styles.optionButtonText}>Otros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Ventas;
