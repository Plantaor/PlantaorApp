import { StyleSheet, Text, SafeAreaView, View, Image, ScrollView, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native";

const StockScreen = () => {
   const stockThreshold = 50; // Seuil minimal de stock
   const [Allcommands, setCommands] = useState([]);
   const [products, setProducts] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState(null); // Stocke la catégorie sélectionnée
   const [updatedQty, setUpdatedQty] = useState({}); // Pour stocker les nouvelles quantités saisies

   // Fonction pour récupérer les détails du produit
   const fetchProductDetails = async (productId) => {
       try {
           const token = await AsyncStorage.getItem('userToken');
           const response = await axios.get(`${API_URL}/products/${productId}`, {
               headers: {
                   Authorization: `Bearer ${token}`, // Ajoute le token à l'en-tête
               },
           });

           return response.data; // Retourne les détails du produit
       } catch (error) {
           console.error(`Erreur lors de la récupération des détails du produit avec ID: ${productId}`, error);
           return null;
       }
   };

   // Nouvelle fonction fetchProduct pour récupérer les produits en stock pour le pharmacien connecté
   const fetchProduct = async () => {
       try {
           const token = await AsyncStorage.getItem('userToken');
           const response = await axios.get(`${API_URL}/stock`, {
               headers: {
                   Authorization: `Bearer ${token}`,
               },
           });

           const stockItems = response.data.items;
           const validProducts = [];

           for (const item of stockItems) {
               if (item.product && item.product._id) {
                   // Récupérer les détails du produit avec une seconde requête
                   const productDetails = await fetchProductDetails(item.product._id);
                   if (productDetails) {
                       validProducts.push({
                           name: productDetails.name,
                           qty: item.quantity,
                           _id:productDetails._id,
                           category: productDetails.category ? productDetails.category.name : 'Unknown',
                       });
                   }
               }
           }

           setProducts(validProducts); // Stocker les produits détaillés dans le state
       } catch (error) {
           console.error("Erreur lors de la récupération des produits en stock du pharmacien", error);
       }
   };

   // Fonction pour vérifier le stock et générer une alerte pour les produits avec un stock faible
   const checkLowStock = () => {
       products.forEach((product) => {
           if (product.qty < stockThreshold) {
               Alert.alert(
                   "Alerte Stock Faible",
                   `Le produit ${product.name} a un stock faible (${product.qty} unités restantes).`,
                   [{ text: "OK" }]
               );
           }
       });
   };

   // Utilisation de useFocusEffect pour exécuter la vérification à chaque focus de l'écran
   useFocusEffect(
      React.useCallback(() => {
        const fetchData = async () => {
          try {
            await fetchProduct(); // Attendre que les produits soient récupérés
            checkLowStock(); // Puis vérifier le stock après la récupération des produits
          } catch (error) {
            console.error("Erreur lors de la récupération des produits :", error);
          }
        };
  
        fetchData(); // Exécuter la fonction async
  
        return () => {
          // Optionnel : logique de nettoyage lorsque l'écran perd le focus
        };
      }, []) // Aucune dépendance supplémentaire, exécutez uniquement lorsque l'écran revient en focus
    );

    
   // Calculer le nombre total de produits en stock
   const totalProducts = () => {
       return products.reduce((total, product) => total + product.qty, 0);
   };

   const totalQuantityByCategory = (categoryName) => {
       if (!categoryName) return 0;

       return products
           .filter((product) => product.category.toLowerCase() === categoryName.toLowerCase())
           .reduce((total, product) => total + product.qty, 0);
   };

   const handleQtyChange = (text, productName) => {
       setUpdatedQty({
           ...updatedQty,
           [productName]: text, // Associe le produit à sa nouvelle quantité
       });
   };

   const updateStock = async (productName) => {
       try {
           const token = await AsyncStorage.getItem('userToken');
           const productToUpdate = products.find(p => p.category === productName);
           const newQuantity = updatedQty[productName];
            console.log(productToUpdate);
           if (!newQuantity || isNaN(newQuantity)) {
               Alert.alert('Erreur', 'Veuillez saisir une quantité valide.');
               return;
           }

           const response = await axios.put(`${API_URL}/stock`, { // Assurez-vous que c'est le bon endpoint
            productId: productToUpdate._id, // ID du produit à mettre à jour
            quantity: Number(newQuantity), // Nouvelle quantité
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        

           console.log(`Stock mis à jour pour ${productName}`);
           // Mettre à jour l'état des produits pour refléter le changement localement
           setProducts(products.map(product =>
               product.name === productName ? { ...product, qty: newQuantity } : product
           ));
           setUpdatedQty({ ...updatedQty, [productName]: '' }); // Réinitialiser l'input après mise à jour
           setSelectedCategory(null); // Désélectionner la catégorie après mise à jour
       } catch (error) {
           console.error(`Erreur lors de la mise à jour du stock pour ${productName}`, error);
           Alert.alert('Erreur', 'Impossible de mettre à jour le stock.');
       }
   };

   const selectCategory = (categoryName) => {
       setSelectedCategory(categoryName); // Définit la catégorie sélectionnée
   };

   const productsData = [
       {
           name: "TRANSIT",
           image: require("../assets/images/transit.jpg"),
       },
       {
           name: "DIGEST",
           image: require("../assets/images/digestt.png"),
       },
       {
           name: "IMMUNI-T",
           image: require("../assets/images/immuni-t.jpg"),
       },
       {
           name: "NEURO-CALM",
           image: require("../assets/images/neuro-calm.jpg"),
       },
       {
           name: "SEX-BOOST",
           image: require("../assets/images/sex-boost.png"),
       },
   ];

   return (
       <SafeAreaView style={styles.container}>
           <HeaderComponent style={styles.header} />
           <View style={styles.stock}>
               <View style={styles.boxproducts}>
                   <Text style={styles.stocknumber}>{totalProducts()}</Text>
                   <Text style={styles.stocktext}>Produits en Stock</Text>
               </View>
               <View style={styles.boxvendu}>
                   <Text style={styles.stocknumber}>{0}</Text>
                   <Text style={styles.stocktext}>Produits vendus</Text>
               </View>
           </View>
           <ScrollView>
               {/* Tableau des produits avec leurs détails */}
               {productsData.map((product) => (
                   <View 
                       style={styles.productsList} 
                       key={product.name} 
                       onTouchEnd={() => selectCategory(product.name)} // Utiliser onTouchEnd pour la sélection
                   >
                       <Image style={styles.productimage} source={product.image} />
                       <View style={styles.productInfo}>
                           <Text style={styles.produname}>{product.name}</Text>

                           {/* Afficher l'input et le bouton uniquement pour la catégorie sélectionnée */}
                           {selectedCategory === product.name && totalQuantityByCategory(product.name)!==0 && ( 
                               <>
                                   <TextInput
                                       style={styles.inputQty}
                                       placeholder="Nouvelle quantité"
                                       keyboardType="numeric"
                                       value={updatedQty[product.name] || ''} // Pour la catégorie correspondante
                                       onChangeText={(text) => handleQtyChange(text, product.name)} // Changer la quantité
                                   />
                                   <Button 
                                       title="Mettre à jour" 
                                       onPress={() => updateStock(product.name)} // Mettre à jour le stock
                                   />
                               </>
                           )}
                       </View>
                       <View style={styles.quantityContainer}>
                           <Text style={styles.produqty}>{totalQuantityByCategory(product.name)}</Text>
                       </View>
                   </View>
               ))}
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
        width: 44,
        height: 44,
        borderRadius: 22,
        padding: 10,
        color: "black"
    },
    produqty: {
      fontSize: 18,
      color: "black"
  },
  inputQty: {
      borderWidth: 1,
      borderColor: "#000",
      padding: 5,
      borderRadius: 5,
      marginTop: 5,
  },
});
