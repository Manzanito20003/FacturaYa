import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        {/* Configuración de las rutas del Drawer */}
        <Drawer.Screen name="Ventas" options={{ title: 'Ventas' }} />
        <Drawer.Screen name="Comprobantes" options={{ title: 'Comprobantes' }} />
        <Drawer.Screen name="Productos" options={{ title: 'Productos' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
