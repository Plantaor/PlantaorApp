import { StyleSheet, Text, SafeAreaView, View, Image,ScrollView } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";

const StockScreen = () => {
   return (
      <SafeAreaView style={styles.container}>

         <HeaderComponent style={styles.header} />
         <View style={styles.stock}>
            <View style={styles.boxproducts}>
               <Text style={styles.stocknumber}>129</Text>
               <Text style={styles.stocktext}>Produit en Stock</Text>
            </View>
            <View style={styles.boxvendu}>
               <Text style={styles.stocknumber}>12</Text>
               <Text style={styles.stocktext}>Produits vendus</Text>
            </View>
         </View>
         <ScrollView>

         <View style={styles.productsList}>
            <Image style={styles.productimage} source={require("../assets/images/transit.jpg")} />
            <View style={styles.productInfo}>
               <Text style={styles.produname}>TRANSIT</Text>
            </View>
            <View style={styles.quantityContainer}>
               <Text style={styles.produqty}>12</Text>
            </View>
         </View>
         <View style={styles.productsList}>
            <Image style={styles.productimage} source={require("../assets/images/digestt.png")} />
            <View style={styles.productInfo}>
               <Text style={styles.produname}>DIGEST</Text>
            </View>
            <View style={styles.quantityContainer}>
               <Text style={styles.produqty}>22</Text>
            </View>
         </View>
         <View style={styles.productsList}>
            <Image style={styles.productimage} source={require("../assets/images/immuni-t.jpg")} />
            <View style={styles.productInfo}>
               <Text style={styles.produname}>IMMUNO-T</Text>
            </View>
            <View style={styles.quantityContainer}>
               <Text style={styles.produqty}>04</Text>
            </View>
         </View>
         <View style={styles.productsList}>
            <Image style={styles.productimage} source={require("../assets/images/neuro-calm.jpg")} />
            <View style={styles.productInfo}>
               <Text style={styles.produname}>Neuro-calm</Text>
            </View>
            <View style={styles.quantityContainer}>
               <Text style={styles.produqty}>09</Text>
            </View>
         </View>
         <View style={styles.productsList}>
            <Image style={styles.productimage} source={require("../assets/images/neuro-calm.jpg")} />
            <View style={styles.productInfo}>
               <Text style={styles.produname}>Neuro-calm</Text>
            </View>
            <View style={styles.quantityContainer}>
               <Text style={styles.produqty}>09</Text>
            </View>
         </View>
         </ScrollView>

      </SafeAreaView>
   );
};

export default StockScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 5,
      margin: 10,
      backgroundColor: "white",
   },
   header: {
      width: "100%",
      height: "40%", // Adjust height as needed
   },
   stock: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
   },
   boxproducts: {
      width: 159,
      height: 109,
      backgroundColor: "#34A853",
      justifyContent: "center",
      borderRadius: 10,
      alignItems: "center",
   },
   stocknumber: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
   },
   stocktext: {
      fontSize: 16,
      color: "white",
   },
   boxvendu: {
      width: 159,
      height: 109,
      backgroundColor: "#FBBC05",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
   },
   productsList: {
      width: 353,
      height: 101,
      borderWidth: 1,
      borderColor: "#000", // You can change the border color as needed
      backgroundColor: "white",
      flexDirection: "row",
      borderRadius: 10,
      alignItems: "center",
      marginTop: 20,
      padding: 10,
      justifyContent: "space-between"
   },
   productimage: {
      width: 50,
      height: 75,
      marginRight: 10,
   },
   productInfo: {
      flex: 1,
      
   },
   produname: {
      fontSize: 18,
   },
   quantityContainer: {
      backgroundColor: "#D9D9D9",
      width:44,
      height:44,
      borderRadius: 22,
      padding: 10,
      color:"black"
   },
   produqty: {
      fontSize: 18,
      color:"black"
   },
});
