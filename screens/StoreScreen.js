import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import ListProduct from './ListProduct';

const StoreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent style={styles.header} />

      <Image
        source={require("../assets/imagetore.png")}
        resizeMode="contain"
<<<<<<< HEAD
        style={{ width: "100%", height: "50%" }} />
=======
        style={styles.bannerImage}
      />
>>>>>>> 5bfec74f2b732f6d4bdf6b21966872189d6e6d35

      <View style={styles.listContainer}>
        <ListProduct />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '100%',
    height: '40%', // Adjust height as needed
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
