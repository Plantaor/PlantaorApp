import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen';
import LoginScreen from './screens/LoginScreen';
import StoreScreen from './screens/StoreScreen';
import Inscription from './screens/InscriptionScreen';
import StartScreen from './screens/startScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack =createStackNavigator();

export default function App() {
  return (
    <><NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name= "store" component={StoreScreen}/>
        <Stack.Screen name= "Inscription" component={Inscription}/>
        <Stack.Screen name= "start" component={StartScreen}/>
      </Stack.Navigator>
    </NavigationContainer></>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
