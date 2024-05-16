import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Oauth = () => {
  return (
    <>
      <View style={styles.Oconnexion}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button1}>
            <Image source={require("../../assets/icons/Google.png")} />
            <Text style={styles.apple}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Image source={require("../../assets/icons/Facebook.png")} />
            <Text style={styles.apple}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button1}>
            <Image source={require("../../assets/icons/Twitter.png")} />
            <Text style={styles.apple}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Image source={require("../../assets/icons/Apple.png")} />
            <Text style={styles.apple}>Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  Oconnexion: {
    flexDirection: "column",
    alignItems: "flex-start",
    top: 70,
  },
  apple: {
    right: -20,
  },
  button1: {
    flexDirection: "row",
    width: "40%",
    /*    backgroundColor: '#DDDDDD',
     */ borderRadius: 1,
    padding: 15,
    alignItems: "center",
    //  borderWidth: 1,
    /* justifyContent:'space-between', */
    marginRight: 10,
    borderRadius: 8,
    borderStyle: "solid",
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowOffset: { width: 0, height: 1 },
  },
 
});
export default Oauth;
