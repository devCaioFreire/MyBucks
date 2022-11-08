import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/index';
import AuthProvider from './src/contexts/auth';
import '@react-native-async-storage/async-storage'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='transparent' barStyle={'light-content'} translucent={true} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}