import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartScreen from '../screens/startScreen';
import profile from '../screens/Profile';
import panier from '../screens/Panier';

const Tab = createBottomTabNavigator();

const Tabnavigator =() =>{
return(
<Tabnavigator>
    <Tab.Screen name="start" component={StartScreen} />
    <Tab.Screen name="profile" component={profile} />
    <Tab.Screen name="panier" component={panier} />
    <Tab.Screen name="start" component={StartScreen} />

</Tabnavigator>
);
};
export default Tab;