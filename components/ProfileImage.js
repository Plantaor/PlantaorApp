import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
const ProfileButton = ({ imageUrl = "" }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Profile");
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {/* <Image source={{ uri: imageUrl }} style={styles.image} /> */}
      <Image
        source={require("../assets/images/femme-medecin.png")}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    // padding: 5,
    borderRadius: 25,
    minWidth: "30%",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
export default ProfileButton;
