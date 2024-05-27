import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const AppEmptyPlaceHolder = ({ title }) => {
  console.log(title);
  return (
    <View style={styles.container}>
      <Text >{title}</Text>
    </View>
  );
};

export default AppEmptyPlaceHolder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  p: {
    fontSize: 25,
    letterSpacing: 2,
    fontWeight: "bold",
    color:"black"

  },
});
 
