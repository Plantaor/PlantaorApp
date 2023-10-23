import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

const StockScreen = () => {
  return (
    <SafeAreaView  style={styles.container}>
    <Text>Stock</Text>
   </SafeAreaView>
  )
}

export default StockScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 20,
        margin:10,

  }
})