import React from "react";
import { StyleSheet, TextInput } from "react-native";
const AppTextInput = ({ icon, ...otherProps }) => {
  return <TextInput style={styles.textInput} {...otherProps} />;
};

export default AppTextInput;

const styles = StyleSheet.create({
  textInput: {
    width: "80%",
    height: "6%",
    borderWidth: 1.5,
    marginBottom: 15,
    marginTop: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
