import React from "react";
import{View, Text, StyleSheet,SafeAreaView} from "react-native";
const PanierScreen =()=>{
return(
    <SafeAreaView>
        <View  style={styles.container}>
     <Text style={styles.panierText}>Panier</Text>
     </View>
     <View>
        
     </View>
    </SafeAreaView>
)
}

const styles=StyleSheet.create({
    container:{
      /*   flex: 1,
        padding: 20,
        margin:10, */
    },
    panierText:{
        fontSize:35,
       color:"green",
       textAlign:'center',
       alignItems:'center'
    }
})
export default PanierScreen;