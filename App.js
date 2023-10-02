import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import HomeScreen from './screens/homeScreen';
import LoginScreen from './screens/LoginScreen';
import StoreScreen from './screens/StoreScreen';
import Inscription from './screens/InscriptionScreen';
import StartScreen from './screens/startScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PanierScreen from './screens/Panier';
import StockScreen from './screens/StockScreen';
import ProfileScreen from './screens/Profile';


const Stack =createStackNavigator();
const Tab =createBottomTabNavigator();

 function StoreTabNavigator(){
  return(
    <Tab.Navigator screenOptions ={{headerShown:false}}>
      <Tab.Screen name="store1" component={StoreScreen}options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons/Call.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}/>
    <Tab.Screen name="panier" component={PanierScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons/panier.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }} />
    <Tab.Screen name="stock" component={StockScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons/Stock.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}/>
    <Tab.Screen name="profile" component={ProfileScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons/Profile.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}/>
  </Tab.Navigator>
  );
 }
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name= "store" component={StoreTabNavigator}/>
        <Stack.Screen name= "Inscription" component={Inscription}/>
        <Stack.Screen name= "start" component={StartScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  ); 
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
