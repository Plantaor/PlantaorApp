import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import profile from '../screens/Profile';
import panier from '../screens/Panier';
import StoreScreen from '../screens/StoreScreen';

const Tab = createBottomTabNavigator();

const Tabnavigator =() =>{
return(
<Tabnavigator>
    <Tab.Screen initialRouteName="store" name="store" component={StoreScreen} />
    <Tab.Screen name="profile" component={profile} />
    <Tab.Screen name="panier" component={panier} />
</Tabnavigator>
);
};
export default Tabnavigator;