import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import ProductList from '../components/ProductList';
import ListProduct from './ListProduct';

const StoreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent style={styles.header}/>

      <Image
        source={require("../assets/imagetore.png")}
        resizeMode="contain"
        style={{width: "100%", height: "50%"}}/>

      <View style={styles.listContainer}>
        <ListProduct/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 20,
  },
  header:{
    width:'100%',
    height:'40%',
    color:'black'
  }
})

export default StoreScreen;
