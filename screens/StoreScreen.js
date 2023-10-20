import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

const StoreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageBlock}>
        <Image
          source={require("../assets/imagetore.png")}
          style={styles.image}
          resizeMode='contain'
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageBlock: {
    backgroundColor: 'aliceblue',
/*     aspectRatio: 1, 
 */    height:200,
    width:399, margin:1
  },
  image: {
    flex: 1,
    width: '100%',
    height: 70,
  },
  navBar: {
    backgroundColor: "#26348B",
    height: 60,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
  },
});

export default StoreScreen;