import React, { Component } from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent'; 
import ProductList from '../components/ProductList';
import { ScrollView } from 'react-native-gesture-handler';

const StoreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent style={styles.header}/>
      
        <Image
          source={require("../assets/imagetore.png")}
          resizeMode="contain"
          style={{width: "100%", height: "50%"}}/>
        
      
      {/* <ProductList/> */}
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
  /*   flex: 1,
    justifyContent: 'center',
    alignItems: 'center', */
  },
  image: {
  }
  ,navBar: {
  
  },
  header:{
    width:'100%',
    height:'40%',
    color:'black'
  
  }
})
export default StoreScreen;