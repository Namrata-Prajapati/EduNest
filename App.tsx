import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to EduNest!</Text>
      <Text style={styles.subtitle}>Your learning journey starts here.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F7FF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#243B80',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 12,
    color: '#555555',
    textAlign: 'center',
  },
});
