import React from "react";
import { Stack } from "expo-router";

export default function VentasLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index" // Ruta principal
        options={{
          title: "Ventas",
          headerShown: false, // Oculta el header para esta pantalla
        }} // Título que aparecerá en la navegación
      />
    </Stack>
  );
}
