import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';

const OrderDetailScreen = ({ route }) => {
  const { orderId } = route.params;
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchOrderDetails = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get(`${API_URL}/orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrder(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des détails de la commande:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Détails de la commande</Text>

      <View style={styles.orderInfo}>
        <Text style={styles.label}>ID de la commande:</Text>
        <Text>{order._id}</Text>

        <Text style={styles.label}>Date de la commande:</Text>
        <Text>{new Date(order.createdAt).toLocaleDateString()}</Text>

        <Text style={styles.label}>Statut:</Text>
        <Text>{order.isDelivered ? 'Livré' : 'Non livré'}</Text>

        <Text style={styles.label}>Méthode de paiement:</Text>
        <Text>{order.paymentMethod}</Text>
      </View>

      <View style={styles.shippingAddress}>
        <Text style={styles.subtitle}>Adresse de livraison:</Text>
        <Text>{order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}</Text>
      </View>

      <View style={styles.productsSection}>
        <Text style={styles.subtitle}>Articles commandés:</Text>
        {order.orderItems.map((item) => (
          <View key={item._id} style={styles.productItem}>
            <Image source={{ uri: `${item.image[0]}` }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text>Quantité: {item.qty}</Text>
              <Text>Prix: {item.price} €</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.totalPriceSection}>
        <Text style={styles.label}>Sous-total:</Text>
        <Text>{order.itemsPrice} €</Text>

        <Text style={styles.label}>Frais de livraison:</Text>
        <Text>{order.shippingPrice} €</Text>

        <Text style={styles.label}>Taxes:</Text>
        <Text>{order.taxPrice} €</Text>

        <Text style={styles.totalPrice}>Prix total: {order.totalPrice} €</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop:30,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'green',
  },
  orderInfo: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 2,
  },
  label: {
    fontWeight: 'bold',
    color: 'blue',
  },
  shippingAddress: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 2,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green',
  },
  productsSection: {
    marginBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 1,
    marginBottom: 10,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  totalPriceSection: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 2,
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    marginTop: 10,
  },
});

export default OrderDetailScreen;
