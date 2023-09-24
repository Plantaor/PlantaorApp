import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './homeScreen';
import Inscription from './InscriptionScreen';




const StoreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>this is the store</Text>
    </SafeAreaView>/* <NavigationContainer independent={"true"}>
        <Tab.Navigator>
          <Tab.Screen name="Store" component={StoreScreen} />
          <Tab.Screen name="Inscription" component={Inscription} />
          <Tab.Screen name="Start" component={StoreScreen} />
        </Tab.Navigator>
      </NavigationContainer></> */
   
  )
}

export default StoreScreen

const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        },
})