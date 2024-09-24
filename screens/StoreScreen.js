import React, { useEffect } from 'react';
import { View, Image, StyleSheet, SafeAreaView, Alert } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import ListProduct from './ListProduct';

const StoreScreen = () => {

  

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent style={styles.header} />

      <Image
        source={require("../assets/imagetore.png")}
        resizeMode="contain"
        style={styles.bannerImage}
      />

      <View style={styles.listContainer}>
        <ListProduct />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  bannerImage: {
    width: '100%',
    height: 190, // Adjust height as needed to fit the banner image
  },
  listContainer: {
    flex: 1,
    padding: 10,
  },
});

export default StoreScreen;
