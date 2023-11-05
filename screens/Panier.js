import { CurrentRenderContext } from "@react-navigation/native";
import React from "react";
import{View, Text, StyleSheet,SafeAreaView} from "react-native";
const PanierScreen =()=>{
return(
    <SafeAreaView>
        <View  style={styles.container}>
     <Text>Panier</Text>
     </View>
    </SafeAreaView>
)
}

const styles=StyleSheet.create({
    container:{
      /*   flex: 1,
        padding: 20,
        margin:10, */
    }
})
export default PanierScreen;