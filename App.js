import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Todo from "./components/Todo";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Todo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
