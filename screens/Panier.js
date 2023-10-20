import { CurrentRenderContext } from "@react-navigation/native";
import React from "react";
import{View, Text, StyleSheet,SafeAreaView} from "react-native";

const PanierScreen =()=>{
return(
    <SafeAreaView  style={styles.container}>
     <Text>Panier</Text>
    </SafeAreaView>
)
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        margin:10,
        fontWeight:300,
    }
})
export default PanierScreen;