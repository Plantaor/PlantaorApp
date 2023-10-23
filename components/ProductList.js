import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const ProductList = () => {
    const products=[
        {id:1,name:"Product 1",price:20},
        {id:2,name:"Product 2",price:30},
        {id:3,name:"Product 3",price:40}
        //we can add more product hehr
    ]
  return (
    <View>
      <Text>{products}</Text>
      <FlatList
      data={products}
      keyExtractor={(item)=>item.id.toString()}
      renderItem={({item})}
      />
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({})