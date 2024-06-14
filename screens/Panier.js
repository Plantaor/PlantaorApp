import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
   View,
   Text,
   StyleSheet,
   SafeAreaView,
   FlatList,
   Button,
   Image,
   TouchableOpacity,
} from "react-native";
import AppButton from "../components/AppButton";

const products = [
   {
      productId: 1,
      name: "Sex boost",
      price: 24.99,
      image: require("../assets/images/sex-boost.png"),
      quantity: 1,
   },
   {
      productId: 2,
      name: "Neuro-calm",
      price: 24.99,
      image: require("../assets/images/neurocalm.png"),
      quantity: 1,
   },
   {
      productId: 3,
      name: "Immuno-T",
      price: 24.99,
      image: require("../assets/images/immuno-t.png"),
      quantity: 1,
   },
   {
      productId: 4,
      name: "Transit",
      price: 24.99,
      image: require("../assets/images/transit.jpg"),

      quantity: 1,
   },
];

const PanierScreen = () => {
   const [panierProductsList, setPanierProductsList] = useState(products);

   const redirectToProduct = (productId) => {
      console.log(productId);
   };

  const removeProduct = (productId) => {
      setPanierProductsList((prevFavoriteList) =>
         prevFavoriteList.filter((product) => product.productId !== productId)
      );
   };

   const handleIncreaseQuantity = (productId) => {
      const updatedFavoriteList = panierProductsList.map((p) =>
         p.productId === productId ? { ...p, quantity: p.quantity + 1 } : p
      );
      setPanierProductsList(updatedFavoriteList);
   };

   const handleDecreaseQuantity = (productId, quantity) => {
      if (quantity > 1) {
         const updatedFavoriteList = panierProductsList.map((p) =>
            p.productId === productId ? { ...p, quantity: p.quantity - 1 } : p
         );
         setPanierProductsList(updatedFavoriteList);
      }
   };

   const handleGoToCheckout = () => {
      console.log("redirect to Checkout");
   };

   return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.panierText}>Panier</Text>
         {panierProductsList.length > 0 ? (
            <>
               <FlatList
                  data={panierProductsList}
                  keyExtractor={(item) => item.productId.toString()}
                  renderItem={({ item }) => (
                     <View style={styles.productContainer}>
                        <View style={styles.imageContainer}>
                           <Image source={item.image} style={styles.productImage} />
                        </View>
                        <View style={styles.productDetails}>
                           <View style={styles.productHeader}>
                              <Text style={styles.productName}>{item.name}</Text>
                              <TouchableOpacity onPress={() => removeProduct(item.productId)}>
                                 <Text style={styles.removeButton}>X</Text>
                              </TouchableOpacity>
                           </View>
                           <View style={styles.productFooter}>
                              <Text style={styles.productPrice}>{item.price}€</Text>
                              <View style={styles.quantityControls}>
                                 <TouchableOpacity
                                    onPress={() =>
                                       handleDecreaseQuantity(item.productId, item.quantity)
                                    }
                                    style={styles.quantityButton}
                                 >
                                    <Text style={styles.quantityButtonText}>-</Text>
                                 </TouchableOpacity>
                                 <Text style={styles.quantityText}>{item.quantity}</Text>
                                 <TouchableOpacity
                                    onPress={() => handleIncreaseQuantity(item.productId)}
                                    style={styles.quantityButton}
                                 >
                                    <Text style={styles.quantityButtonText}>+</Text>
                                 </TouchableOpacity>
                              </View>
                           </View>
                        </View>
                     </View>
                  )}
               />

               <View style={styles.promoContainer}></View>
               <View style={styles.pricesContainer}>
                  <View style={styles.price}>
                     <Text style={styles.label}>Total</Text>
                     <Text style={styles.value}>124,95€</Text>
                  </View>
                  <View style={styles.price}>
                     <Text style={styles.label}>Livraison</Text>
                     <Text style={styles.value}>29,99€</Text>
                  </View>
                  <View style={styles.price}>
                     <Text style={styles.label}>Total</Text>
                     <Text style={styles.value}>154,94€</Text>
                  </View>
                  <AppButton
                     title="PASSER À LA CAISSE"
                     onPress={handleGoToCheckout}
                     style={{
                        button: {
                           width: "90%",
                           backgroundColor: "#64A962",
                           borderRadius: 13,
                           paddingVertical: 10,
                           alignItems: "center",
                           justifyContent: "center",
                        },
                        text: {
                           color: "white",
                           fontSize: 20,
                        },
                     }}
                  />
               </View>
            </>
         ) : (
            <Text style={styles.emptyPanierText}>Votre panier est vide</Text>
         )}
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "white",
   },
   pricesContainer: {
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
   },
   promoContainer: {
      borderColor: "#D9D9D9",
      borderWidth: 1,
      borderRadius: 10,
      padding: 30,
      marginVertical: 10,
      width: "90%",
      alignSelf: "center",
   },
   price: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      paddingVertical: 5,
   },
   label: {
      fontSize: 20,
   },
   value: {
      fontSize: 20,
      textAlign: "right",
   },
   panierText: {
      fontSize: 35,
      color: "green",
      textAlign: "center",
      marginTop: 50,
   },
   emptyPanierText: {
      fontSize: 20,
      color: "grey",
      textAlign: "center",
      marginTop: 50,
   },
   productContainer: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      marginVertical: 5,
      backgroundColor: "white",
      borderBottomWidth: 1,
      borderColor: "#ccc",
   },
   imageContainer: {
      width: 127,
      height: 114,
      backgroundColor: "#ECECEC",
      borderRadius: 19,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10,
   },
   productImage: {
      width: 104,
      height: 106,
      borderRadius: 19,
   },
   productDetails: {
      flex: 1,
      justifyContent: "center",
   },
   productHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
   },
   productName: {
      fontSize: 20,
      flex: 1,
   },
   productFooter: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
   },
   productPrice: {
      fontSize: 20,
      color: "black",
      marginTop: 50,
   },
   quantityControls: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 50,
   },
   quantityButton: {
      backgroundColor: "#FFFFFF",
      borderColor: "#64A962",
      borderWidth: 1,
      borderRadius: 5,
      width: 36,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
   },
   quantityButtonText: {
      fontSize: 20,
      color: "#64A962",
      fontWeight: "bold",
   },
   quantityText: {
      marginHorizontal: 20,
      fontSize: 16,
      color: "black",
   },
   removeButton: {
      fontSize: 20,
      color: "grey",
      marginRight: 10,
   },
});

export default PanierScreen;
