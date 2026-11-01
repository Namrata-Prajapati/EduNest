import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { LoginScreen } from './mobile/src/screens/LoginScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FF',
  },
});
