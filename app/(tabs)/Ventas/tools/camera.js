import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const openCamera = async (): Promise<string | null> => {
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  if (!permissionResult.granted) {
    Alert.alert("Permiso requerido", "Se necesita permiso para usar la cámara.");
    return null;
  }

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    return result.assets[0].uri;
  }
  return null;
};

export const openGallery = async (): Promise<string | null> => {
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permissionResult.granted) {
    Alert.alert("Permiso requerido", "Se necesita permiso para acceder a la galería.");
    return null;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    return result.assets[0].uri;
  }
  return null;
};
