import React from "react";
import{View, Text, StyleSheet} from "react-native";

const PanierScreen =()=>{
return(
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'red'}} >
        <Text>Panier</Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} />
    </View>
)
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    }
})
export default PanierScreen;