import React, { Component } from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent'; 
import ProductList from '../components/ProductList';
import { ScrollView } from 'react-native-gesture-handler';

const StoreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent style={styles.header}/>
      <View style={styles.imageBlock}>
        <Image
          source={require("../assets/imagetore.png")}
          style={styles.image}
          resizeMode='contain'
        />
      </View>
      {/* <ProductList/> */}
      <ScrollView></ScrollView>
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
    width: '100%'
    
  }
  ,navBar: {
    backgroundColor:  'column',
    width:'100%'
  },
  header:{
    flex:1,
    widht:'100%',
    height:37,
    backgroundColor:'black'
  }
})
export default StoreScreen;