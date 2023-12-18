import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import Preload from './src/screens/Preload';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    < >
      {fontsLoaded ? <Routes /> : <Preload />}
      <StatusBar style="auto" />
    </>
  );
}
