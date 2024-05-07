import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <Text>header</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  header:{
    backgroundColor: '##ffff',
    paddingTop: 30,
    borderBlockColor:33
  }
})

export default HeaderComponent