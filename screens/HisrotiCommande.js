import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from '@env';
import RNPickerSelect from 'react-native-picker-select';
import moment from 'moment'; // Utilisation de moment.js pour manipuler les dates

const HistoriqueCommande = ({ navigation, route }) => {
  const [enCoursCommand, setEnCoursCount] = useState([]);
  const [confirmeCommand, setConfirmeCount] = useState([]);
  const [annuleeCommand, setAnnuleeCount] = useState([]);
  const [Allcommands, setCommands] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedTime, setSelectedTime] = useState('this_month'); // Filtre de temps

  const fetchCommands = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get(`${API_URL}/orders/myorders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCommands(response.data);
      console.log("les commendes sont retouner");
      const enCours = response.data.filter(cmd => cmd.isPaid && !cmd.isDelivered);
      const confirmees = response.data.filter(cmd => cmd.isPaid && cmd.isDelivered);
      const annulees = response.data.filter(cmd => !cmd.isPaid);
      
      setEnCoursCount(enCours);
      setConfirmeCount(confirmees);
      setAnnuleeCount(annulees);
    } catch (error) {
      console.log('Erreur lors de la récupération des commandes:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchCommands();
    }, [])
  );



  const filteredCommands = () => {
    let filteredByType = [];

    // Filtrer par type de commande (En Cours, Confirmé, Annulées)
    switch (selectedFilter) {
      case 'EnCours':
        filteredByType = enCoursCommand;
        break;
      case 'Confirmé':
        filteredByType = confirmeCommand;
        break;
      case 'Annulées':
        filteredByType = annuleeCommand;
        break;
      default:
        filteredByType = Allcommands;
    }

    // Ensuite, filtrer par temps (ce mois-ci, le mois dernier, etc.)
    return filteredByType;
  };

  const renderCommand = ({ item }) => {
    let cardStyle = styles.card;
    if (item.isPaid && !item.isDelivered) {
      cardStyle = { ...styles.card, ...styles.cardInProgress };
    } else if (item.isPaid && item.isDelivered) {
      cardStyle = { ...styles.card, ...styles.cardConfirmed };
    } else if (!item.isPaid) {
      cardStyle = { ...styles.card, ...styles.cardCancelled };
    }

    return (
      <View style={cardStyle}>
        <View style={styles.cardContent}>
          <View style={styles.cardNumberContainer}>
            <Text style={styles.cardNumber}>P-{item._id.substring(0, 8)}</Text>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.cardTitle}>Type: {item.isPaid && item.isDelivered ? "Confirmé" : "En Cours"}</Text>
            <Text>Transport: {item.shippingAddress.city}</Text>
            <Text>Nombre des produits: {item.orderItems.length}</Text>
            <Text>Statut: {item.isDelivered ? "Livrée" : "Non Livrée"}</Text>
            <Text>Paiement: {item.isPaid ? "Payée" : "Non Payée"}</Text>
            <Text>Méthode de Paiement: {item.paymentMethod}</Text>
            <Text>Prix Total: ${item.totalPrice}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/icons/flecheretour.jpg')} style={styles.backIcon} />
          </View>
          <Text style={styles.subHeader}>Historiques commande</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleRow}>
        <Text style={styles.headerTitle}>Historiques commande</Text>
        <View style={styles.lastMonthContainer}>
        </View>
      </View>

      <View style={styles.filters}>
        {/* Boutons de filtre */}
      </View>

      <ScrollView>
      {filteredCommands().length === 0 ? (
  <View style={styles.noCommandsContainer}>
    <Text style={styles.noCommandsText}>Aucune commande à afficher</Text>
  </View>
) : (
  <FlatList
    data={filteredCommands()}
    renderItem={renderCommand}
    keyExtractor={item => item._id}
  />
)}
      </ScrollView>
    </View>
  );
}

export default HistoriqueCommande;


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 70,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'green',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    margin:10,
  },
  lastMonthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterButton: {
    padding: 6,
    borderRadius: 6,
    backgroundColor: '#fff',
    borderWidth: 0.1,
    borderColor: 'black',
    margin: 2,
  },
  filterButtonActive: {
    borderColor: 'green',
  },
  filterText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  filterTextActive: {
    color: 'green',
    textAlign: 'center',
    width: 90,
    height: 20,
  },
  card: {
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 13,
    backgroundColor: '#fff',
  },
  cardConfirmed: {
    borderColor: 'green',
  },
  cardInProgress: {
    borderColor: 'orange',
  },
  cardCancelled: {
    borderColor: 'red',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardNumberContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});