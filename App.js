import React from 'react';
import * as Notifications from 'expo-notifications';
import { StyleSheet, Image } from 'react-native';
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
import Scan from './screens/Scan';
import PersonanInformation from './screens/PersonanInformation';
import Loginandsecurity from './screens/Loginandsecurity';
import PaymentScreen from './screens/PaymentScreen';
import HisrotiCommande from './screens/HisrotiCommande';
import TermsOflegal from './screens/TermsOflegal';
import DetailsProduct from './screens/DetailsProduct';
import AddProduct from './screens/AddProduct';
import ManageProduct from './screens/ManageProduct';
import EditProduct from './screens/EditProduct';
import NotificationsScreen from './screens/Notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useState } from 'react';
import CommandListScreen from './screens/CommandList';
import OrderDetailScreen from './screens/OrderDetailScreen'; // Un écran pour les détails de commande

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {

  const [role, setRole] = useState('');

  useEffect(() => {
    // Récupérer le rôle utilisateur depuis AsyncStorage
    const getUserRole = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        setRole(parsedUser.role); // Stocker le rôle de l'utilisateur
      }
    };

    getUserRole();
  }, []);



  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Store" 
        component={StoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons/Call.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="Panier" 
        component={PanierScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons/panier.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="Scan" 
        component={Scan} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons/scan.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }} 
      />
     {/* Afficher l'onglet "Stock" seulement pour les admins et les pharmacists */}
     {(role === 'admin' || role === 'pharmacist') && (
        <Tab.Screen 
          name="Stock" 
          component={StockScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./assets/icons/Stock.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }} 
        />
      )}

        {role === 'admin' && ( // Afficher l'onglet "Manage Product" uniquement pour les administrateurs
        <Tab.Screen 
          name="Manage" 
          component={ManageProduct} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./assets/icons/gestion.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }} 
        />
      )}
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons/Profile.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }} 
      />

       
    </Tab.Navigator>
  );
}

export default function App() {


  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notification received:', notification);
    });

    return () => subscription.remove();
  }, []);

useEffect(() => {
  // Demander les permissions de notification
  const getNotificationPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      const { status: newStatus } = await Notifications.requestPermissionsAsync();
      if (newStatus !== 'granted') {
        console.log('Permission de notification refusée');
      }
    }
  };

  getNotificationPermissions();
}, []);
  return (
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="store" component={TabNavigator} />
          <Stack.Screen name="Inscription" component={Inscription} />
          <Stack.Screen name="start" component={StartScreen} />
          <Stack.Screen name="personalInf" component={PersonanInformation} />
          <Stack.Screen name="LoginSecurity" component={Loginandsecurity} />
          <Stack.Screen name="payment" component={PaymentScreen} />
          <Stack.Screen name="HistoriCommande" component={HisrotiCommande} />
          <Stack.Screen name="TermOflegal" component={TermsOflegal} />
          <Stack.Screen name="DetailsProduct" component={DetailsProduct} />
          <Stack.Screen name="AddProduct" component={AddProduct} />
          <Stack.Screen name="ManageProduct" component={ManageProduct} />
          <Stack.Screen name="EditProduct" component={EditProduct} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="CommandList" component={CommandListScreen} />
          <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
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
