import React, { useEffect,useState,useCallback } from "react";
import { useNavigation,useFocusEffect } from "@react-navigation/native";

import axios from "axios";

import AsyncStorage from '@react-native-async-storage/async-storage';

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
import { API_URL } from '@env';



const PanierScreen = () => {
   const [panierProductsList, setPanierProductsList] = useState([]);
   const navigation = useNavigation();
      const fetchProducts = async () => {
         try {
            console.log("retourne les produits");
            const token = await AsyncStorage.getItem('userToken');
            const response = await axios.get(`${API_URL}/cart`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            setPanierProductsList(response.data.items);
            console.log("les produit de ce panier est");
         } catch (error) {
            console.error('Error fetching products de panier:', error);
         }
      };
     

 // Re-fetch products when the screen is focused
 useFocusEffect(
   useCallback(() => {
      fetchProducts();
   }, [])
);


   // Fonction pour supprimer un produit
   const removeProduct = async (productId) => {
      
      try {
         const token = await AsyncStorage.getItem('userToken');
         const response = await axios.delete(`${API_URL}/cart/${productId}`, 
            {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         
         setPanierProductsList((prevList) =>
            prevList.filter((item) => item.product._id !== productId)
         );
   
         fetchProducts();
      
      } catch (error) {
         console.error('Error de supprission:', error);
      }


   };


   const updatePanier = async (productId, quantity) => {
      try {
         const token = await AsyncStorage.getItem('userToken');
   
         const response = await axios.put(
            `${API_URL}/cart`,
            { productId, quantity },
            {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            }
         );
   
         console.log("Panier mis à jour:", response.data); // Affiche la réponse pour vérifier si cela fonctionne
         return response.data; // Vous pouvez retourner les données mises à jour ou les traiter ici
   
      } catch (error) {
         console.error("Erreur lors de la mise à jour du panier:", error);
      }
   };
   

   // Fonction pour augmenter la quantité
   const handleIncreaseQuantity = (productId,quantity) => {
      const updatedList = panierProductsList.map((item) =>
         item.product._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setPanierProductsList(updatedList);

      updatePanier(productId,quantity);

   };

   // Fonction pour diminuer la quantité
   const handleDecreaseQuantity = (productId, quantity) => {
      if (quantity > 1) {
         const updatedList = panierProductsList.map((item) =>
            item.product._id === productId ? { ...item, quantity: item.quantity - 1 } : item
         );
         setPanierProductsList(updatedList);

         
      updatePanier(productId,quantity-1);
      }
   };

   // Calcul du prix total
      const PriceTotale = () => {
      if (!Array.isArray(panierProductsList)) {
         return 0; // Retourner 0 si ce n'est pas un tableau
      }
   
      return panierProductsList.reduce((total, item) => {
         return total + (item.product.price * item.quantity);
      }, 0);
   };
   
 

   // Calcul du prix total avec la livraison
   const PriceTotaleFinale = (LivraisonPrice) => {
      return PriceTotale() + LivraisonPrice;
   };

   const handleGoToCheckout = () => {
      navigation.navigate('payment');
   };
 


   return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.panierText}>Panier</Text>
         {panierProductsList.length > 0 ? (
            <>
               <FlatList
                  data={panierProductsList}
                  keyExtractor={(item) => item.product._id.toString()}
                  renderItem={({ item }) => (
                     <View style={styles.productContainer}>
                        <View style={styles.imageContainer}>
                           <Image source={{ uri: item.product.image }} style={styles.productImage} />
                        </View>
                        <View style={styles.productDetails}>
                           <View style={styles.productHeader}>
                              <Text style={styles.productName}>{item.product.name}</Text>
                              <TouchableOpacity onPress={() => removeProduct(item.product._id)}>
                                 <Text style={styles.removeButton}>X</Text>
                              </TouchableOpacity>
                           </View>
                           <View style={styles.productFooter}>
                              <Text style={styles.productPrice}>{item.product.price}€</Text>
                              <View style={styles.quantityControls}>
                                 <TouchableOpacity
                                    onPress={() => handleDecreaseQuantity(item.product._id, item.quantity)}
                                    style={styles.quantityButton}
                                 >
                                    <Text style={styles.quantityButtonText}>-</Text>
                                 </TouchableOpacity>
                                 <Text style={styles.quantityText}>{item.quantity}</Text>
                                 <TouchableOpacity
                                    onPress={() => handleIncreaseQuantity(item.product._id, item.quantity)}
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

               <View style={styles.pricesContainer}>
                  <View style={styles.price}>
                     <Text style={styles.label}>Total</Text>
                     <Text style={styles.value}>{PriceTotale().toFixed(2)}€</Text>
                  </View>
                  <View style={styles.price}>
                     <Text style={styles.label}>Livraison</Text>
                     <Text style={styles.value}>29,99€</Text>
                  </View>
                  <View style={styles.price}>
                     <Text style={styles.label}>Total</Text>
                     <Text style={styles.value}>{PriceTotaleFinale(29.99).toFixed(2)}€</Text>
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
