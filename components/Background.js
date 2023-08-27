import React from "react";
import { View, StyleSheet, ImageBackground,Text  } from "react-native";

const Background = ({  }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/MainPage.png")}
        style={styles.imageBackground}
      />
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    
  },
});

export default Background;
