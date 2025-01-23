import React from "react";
import { Stack } from "expo-router";

export default function VentasLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index" // Ruta principal
        options={{
          title: "ventas",
          headerShown: false, // Oculta el header para esta pantalla
        }} // Título que aparecerá en la navegación
      />
      <Stack.Screen
        name="createventa" // Ruta principal
        options={{
          title: "Crear Venta",
          headerShown: false, // Oculta el header para esta pantalla
        }} // Título que aparecerá en la navegación
      />
    </Stack>
  );
}
