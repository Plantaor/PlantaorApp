import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'

const Loginandsecurity = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.securityText}>Login and security </Text>
    </SafeAreaView>
  )
}

export default Loginandsecurity

const styles = StyleSheet.create({
    securityText:{
        fontSize:25,
        color:"green",
        textAlign:'center',
        margin:30
    }
})