import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const HeaderComponent = () => {
  return (
    <View style={StyleSheet.header}>
      <Text>header</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  header:{
    backgroundColor: '#f5f5f5',
    paddingTop: 30,
  }
})

export default HeaderComponent