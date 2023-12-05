import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AppNavigator from "./AppNavigator";
import { FitnessContext } from "./Context";


const App = () => {
  return (
    <FitnessContext>
      <AppNavigator />
    </FitnessContext>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
  },
});

export default App;
