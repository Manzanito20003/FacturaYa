import React from "react";
import { Stack } from "expo-router";

export default function ProductoLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index" // Ruta principal
        options={{
          title: "Producto",
          headerShown: false, // Oculta el header para esta pantalla
        }} // Título que aparecerá en la navegación
      />
    </Stack>
  );
}
