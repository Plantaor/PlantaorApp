import { StyleSheet, Text, SafeAreaView, View, Image,ScrollView,Alert } from "react-native";
import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import axios from "axios";
import {API_URL} from "@env"
import { useEffect } from "react";


const StockScreen = () => {

   const stockThreshold = 100; // Seuil minimal de stock
   const [Allcommands, setCommands] = useState([]);
   const [products,setProducts]=useState([]);

   const fetchProduct=async () =>{

      try{
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get(`${API_URL}/products`, {
        headers: {
          Authorization: `Bearer ${token}`, // Ajoute le token à l'en-tête
        },
      });
      // Mettre à jour l'état avec les produits récupérés
      setProducts(response.data);
      }catch(error){
         console.error("erreur lors de récupération des produits",error);
      }

   };


      // Fonction pour vérifier le stock et générer une alerte
      const checkLowStock = () => {
         products.forEach((product) => {
         if (product.qty < stockThreshold) {
            // Alerte pour les produits avec stock faible
            Alert.alert(
               "Alerte Stock Faible",
               `Le produit ${product.name} a un stock faible (${product.qty} unités restantes).`,
               [{ text: "OK" }]
            );
         }
         });
      };

 // Vérification des stocks à chaque focus
 useEffect(() => {
   const fetchData = async () => {
     try {
       await fetchProduct(); // Attendre que les produits soient récupérés
       checkLowStock(); // Puis vérifier le stock après la récupération des produits
     } catch (error) {
       console.error("Erreur lors de la récupération des produits :", error);
     }
   };
 
   fetchData(); // Exécuter la fonction async
 }, []); // Déclenchement sur changement de products
 

     const fetchCommands= async () => {
      try {
          console.log("chargement des données des commandes");
          const token = await AsyncStorage.getItem('userToken'); 
          // Requête à l'API pour obtenir l'utilisateur basé sur le token
          const response = await axios.get(`${ API_URL }/orders/myorders`,{
              headers: {
                  Authorization: `Bearer ${token}`,
               },
          } );
          setCommands(response.data); // Stocker les informations utilisateur dans le state
          console.log("les commendes récupérer récupérer");
          console.log(response.data);
      

      } catch (error) {
          console.log('Erreur lors de la récupération des commandes:', error);
      }
  };

              // Appel de l'API lorsque le composant est monté
          useFocusEffect(
              useCallback(() => {
                fetchCommands();
              }, [])
          );


     const totalProducts = () => {
      return products.reduce((total, product) => {
        return total + product.qty;
      }, 0);
    };
    

    const totalSell = () => {
      let totalQuantity = 0;
      const paidCommands = Allcommands.filter(command => command.isPaid);
    
      paidCommands.forEach(command => {
        command.orderItems.forEach(item => {
          totalQuantity += Number(item.quantity) || 0; // Convertit en nombre
        });
      });
    
      return totalQuantity; // Retourne un nombre total
    };
    
            // Fonction pour calculer la quantité totale des produits par catégorie
      const totalQuantityByCategory = (categoryName) => {
         return products
         .filter((product) => product.category.name === categoryName)
         .reduce((total, product) => total + product.qty, 0);
      };

   return (
      <SafeAreaView style={styles.container}>

         <HeaderComponent style={styles.header} />
         <View style={styles.stock}>
            <View style={styles.boxproducts}>
               <Text style={styles.stocknumber}>{totalProducts()}</Text>
               <Text style={styles.stocktext}>Produit en Stock</Text>
            </View>
            <View style={styles.boxvendu}>
               <Text style={styles.stocknumber}>{totalSell()}</Text>
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
               <Text style={styles.produqty}>{totalQuantityByCategory('TRANSIT')}</Text>
            </View>
         </View>
         <View style={styles.productsList}>
            <Image style={styles.productimage} source={require("../assets/images/digestt.png")} />
            <View style={styles.productInfo}>
               <Text style={styles.produname}>DIGEST</Text>
            </View>
            <View style={styles.quantityContainer}>
               <Text style={styles.produqty}>{totalQuantityByCategory('DIGEST')}</Text>
            </View>
         </View>
         <View style={styles.productsList}>
            <Image style={styles.productimage} source={require("../assets/images/immuni-t.jpg")} />
            <View style={styles.productInfo}>
               <Text style={styles.produname}>IMMUNI-T</Text>
            </View>
            <View style={styles.quantityContainer}>
               <Text style={styles.produqty}>{totalQuantityByCategory('IMMUNI-T')}</Text>
            </View>
         </View>
         <View style={styles.productsList}>
            <Image style={styles.productimage} source={require("../assets/images/neuro-calm.jpg")} />
            <View style={styles.productInfo}>
               <Text style={styles.produname}>NEURO-CALM</Text>
            </View>
            <View style={styles.quantityContainer}>
               <Text style={styles.produqty}>{totalQuantityByCategory('NEURO-CALM')}</Text>
            </View>
         </View>
         <View style={styles.productsList}>
            <Image style={styles.productimage} source={require("../assets/images/sex-boost.png")} />
            <View style={styles.productInfo}>
               <Text style={styles.produname}>SEX-BOOST</Text>
            </View>
            <View style={styles.quantityContainer}>
               <Text style={styles.produqty}>{totalQuantityByCategory('SEX-BOOST')}</Text>
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
