import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <View style={styles.textConteneur}>
      <Text style={style} {...otherProps}>
        {children}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textConteneur: {
    width: "80%",
  },
});
export default AppText;
