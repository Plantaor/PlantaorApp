import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome } from "@expo/vector-icons"; // Import icons from the appropriate library
import Panier from "./Panier";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const StartScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen} // Use a different component for the Home tab
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Entypo
                    name="home"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>HOME</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Panier"
          component={Panier} // Use the correct component for the Panier tab
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Entypo
                    name="wallet"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>WALLET</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#16247d",
                    width: Platform.OS === "ios" ? 50 : 60,
                    height: Platform.OS === "ios" ? 50 : 60,
                    top: Platform.OS === "ios" ? -10 : -20,
                    borderRadius: Platform.OS === "ios" ? 25 : 30,
                  }}
                >
                  <FontAwesome name="exchange" size={24} color="#fff" />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartScreen;
