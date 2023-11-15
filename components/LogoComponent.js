import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const LogoComponent = ({onPress}) => {
  return (
    <Image
    source={require('./asseets')}
    style={{width:50, height:50}}
    onPress={onPress}
    />
  )
}

export default LogoComponent

const styles = StyleSheet.create({})