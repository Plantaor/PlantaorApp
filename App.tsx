import React from 'react';
import { StyleSheet, Image } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import StoreScreen from './screens/StoreScreen';
import Inscription from './screens/InscriptionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PanierScreen from './screens/Panier';
import StockScreen from './screens/StockScreen';
import ProfileScreen from './screens/ScreenProfile/Profile';
import Scan from './screens/Scan';
import PersonanInformation from './screens/ScreenProfile/PersonanInformation';
import Loginandsecurity from './screens/ScreenProfile/Loginandsecurity';
import PaymentScreen from './screens/ScreenProfile/PaymentScreen';
import HisrotiCommande from './screens/HisrotiCommande';
import TermsOflegal from './screens/TermsOflegal';
import StartScreen from './screens/startScreen';
import HomeScreen from './screens/homeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

interface TabNavigatorProps {}

const TabNavigator: React.FC<TabNavigatorProps> = () => {
  return (
    <Tab.Navigator screenOptions ={{headerShown:false}}>
    <Tab.Screen name="Store" component={StoreScreen}options={{
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('./assets/icons/Call.png')}
            style={{ width: size, height: size, tintColor: color }}
          />
        ),
      }}/>
  <Tab.Screen name="Panier" component={PanierScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('./assets/icons/panier.png')}
            style={{ width: size, height: size, tintColor: color }}
          />
        ),
      }} />
      <Tab.Screen name='Scan' component={Scan} options={{
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('./assets/icons/scan.png')}
            style={{ width: size, height: size, tintColor: color }}
          />
        ),
      }} />
  <Tab.Screen name="Stock" component={StockScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('./assets/icons/Stock.png')}
            style={{ width: size, height: size, tintColor:color }}
          />
        ),
      }}/>
  <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('./assets/icons/Profile.png')}
            style={{ width: size, height: size, tintColor: color }}
          />
        ),
      }}/>
</Tab.Navigator>
  );
};

interface AppProps {}

const App: React.FC<AppProps> = () => {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
