import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, ScrollView, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';
import { useCallback } from 'react';


const ManageProduct = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null); // Pour gérer l'affichage des boutons

  const fetchProducts = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get(`${API_URL}/products/AllPro`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des produits:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
       fetchProducts();
    }, [])
 );

  // Fonction pour afficher ou masquer les boutons d'un produit
  const handleProductPress = (productId) => {
    if (selectedProductId === productId) {
      setSelectedProductId(null); // Si le produit est déjà sélectionné, on le désélectionne
    } else {
      setSelectedProductId(productId); // Sinon, on sélectionne le produit
    }
  };

  const handleEditPress = (product) => {
    navigation.navigate('EditProduct', { product }); // Naviguer vers la page d'édition avec les détails du produit
  };
  

  const handleDeletePress = async (productId) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.delete(`${API_URL}/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        alert('Produit supprimé avec succès');
        // Mettre à jour la liste des produits
        setProducts(products.filter(product => product._id !== productId));
        setSelectedProductId(null); // Désélectionner le produit supprimé
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du produit:', error);
    }
  };



  return (
    <View style={styles.container}>
      {/* Bouton d'ajout de produit en haut */}
      <View style={styles.addButtonContainer}>
        <Button title="Ajouter Produit" onPress={() => navigation.navigate('AddProduct')} />
      </View>

      <Text style={styles.subHeader}>Gestion des produits</Text>

      <ScrollView>
        {products.map((product) => (
          <TouchableOpacity 
            key={product._id} 
            onPress={() => handleProductPress(product._id)} 
            style={styles.productContainer}
          >
            {/* Affichage de l'image à gauche */}
            
            <Image
          source={{ uri: product.images[0] }}  // Affiche la première image du produit
          style={styles.productImage}
        />
            <View style={styles.productInfo}>
              <Text style={styles.productText}>{product.name} </Text>
              <Text>Le prix de Lambda: {product.lambdaUserPrice} $</Text>
              <Text>Le prix de pharmacienne: {product.pharmacistPrice} $</Text>
              <Text style={styles.productText}>Quantity:{product.qty} </Text>
              <Text style={styles.productText}>Size:{product.size} </Text>

              {/* Affichage des boutons de modification/suppression si le produit est sélectionné */}
              {selectedProductId === product._id && (
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.modifyButton} onPress={() => handleEditPress(product)}>
                    <Text style={styles.buttonText}>Modifier</Text>
                  </TouchableOpacity>


                  <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeletePress(product._id)}>
                    <Text style={styles.buttonText}>Supprimer</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 70,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
  },
  addButtonContainer: {
    marginBottom: 20,
  },
  productContainer: {
    flexDirection: 'row', // Afficher l'image et les détails du produit en ligne
    padding: 15,
    backgroundColor: '#f8f8f8',
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center', // Centrer verticalement
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 8, // Ajouter des bords arrondis
  },
  productInfo: {
    flex: 1, // Pour que les infos prennent l'espace restant à côté de l'image
  },
  productText: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row', // Afficher les boutons côte à côte
    justifyContent: 'space-between',
  },
  modifyButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ManageProduct;
