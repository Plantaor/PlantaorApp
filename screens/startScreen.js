import React from "react";
import { StyleSheet, View, Image,Text,Pressable } from "react-native";

const StartScreen =({navigation})=>{
    return(

        <NavigationContainer>
       <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>HOME</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Portfolio" 
          component={Portfolio} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Entypo name="wallet" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>WALLET</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Transaction" 
          component={Transaction} 
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View
                 style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#16247d",
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 30
                 }}
                >
                  <FontAwesome name="exchange" size={24} color="#fff" />
                </View>
              )
            }
           }}
          />
          <Tab.Screen
           name="Prices" 
           component={Prices}
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <MaterialIcons name="stacked-line-chart" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>PRICES</Text>
            </View>
              )
            }
          }}
           />
          <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Ionicons name="settings" size={24}  color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>SETTINGS</Text>
            </View>
              )
            }
          }}
          />
       </Tab.Navigator>
     </NavigationContainer>
        
        );
        };
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              },
          });
export default StartScreen;