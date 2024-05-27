import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AppButton = ({ title, onPress, style = { button: {}, text: {} } }) => {
  const { button, text } = StyleSheet.flatten(style);

  return (
    <TouchableOpacity style={[styles.button, button]} onPress={onPress}>
      <Text style={[styles.text, text]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#266B39",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "60%",
  },
  text: {
    textTransform: "uppercase",
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});
