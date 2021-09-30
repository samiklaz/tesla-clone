import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Index from './components/CarItems/Index';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Index />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
  }
});
