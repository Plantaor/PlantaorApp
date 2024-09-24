import React, { useState, useEffect } from 'react';
import {TouchableOpacity, View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const ListProduct = () => {
  // Utilisation de useState pour stocker les produits
  const [products, setProducts] = useState([]);

  const navigation = useNavigation(); // Obtenez l'objet navigation
 
    const fetchProducts = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const response = await axios.get(`${API_URL}/products`, {
          headers: {
            Authorization: `Bearer ${token}`, // Ajoute le token à l'en-tête
          },
        });
        // Mettre à jour l'état avec les produits récupérés
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    useFocusEffect(
      useCallback(() => {
         fetchProducts();
      }, []));


  // Fonction pour rendre chaque élément de la liste
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetailsProduct', { product: item })}>
    <View style={styles.itemContainer}>
      <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.images[0] }}  // Affiche la première image du produit
          style={styles.image} 
        />
      </View>

      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}$</Text>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()} // Utilisation de l'_id comme clé
        numColumns={2}
      />
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: 157,
    height: 146,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    borderWidth: 0.1,
    borderColor: 'black',
  },
  imageContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginTop: 2,
  },
});
