import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Image, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { API_URL } from '@env';

const CommandListScreen = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const navigation = useNavigation();

  const fetchOrders = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get(`${API_URL}/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrders(response.data);
      setFilteredOrders(response.data); // Default: all orders
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes:', error);
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchOrders();
    }, [])
  );

  const filterByDate = () => {
    if (startDate && endDate) {
      const filtered = orders.filter(order => {
        const orderDate = new Date(order.createdAt);
        return orderDate >= startDate && orderDate <= endDate;
      });
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orders); // If no dates are selected, show all orders
    }
  };

  const resetFilters = () => {
    setStartDate(null);
    setEndDate(null);
    setFilteredOrders(orders);
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
      <TouchableOpacity onPress={() => navigation.navigate('OrderDetail', { orderId: item._id })}>
        <View style={cardStyle}>
          <View style={styles.cardContent}>
            <View style={styles.cardNumberContainer}>
              <Text style={styles.cardNumber}>Commande: {item._id.substring(0, 8)}</Text>
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.cardTitle}>Statut: {item.isDelivered ? "Livré" : "En cours"}</Text>
              <Text>Date: {new Date(item.createdAt).toLocaleDateString()}</Text>
              <Text>Prix Total: {item.totalPrice} €</Text>
              <Text>Paiement: {item.isPaid ? "Payée" : "Non Payée"}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/icons/flecheretour.jpg')} style={styles.backIcon} />
          </View>
          <Text style={styles.subHeader}>Liste des commandes</Text>
        </TouchableOpacity>
      </View>

      {/* Date Pickers */}
      <View style={styles.datePickerContainer}>
        <View style={styles.datePicker}>
          <Button title="Sélectionner Date Début" onPress={() => setShowStartDatePicker(true)} />
          {startDate && <Text style={styles.selectedDateText}>{startDate.toLocaleDateString()}</Text>}
        </View>

        <View style={styles.datePicker}>
          <Button title="Sélectionner Date Fin" onPress={() => setShowEndDatePicker(true)} />
          {endDate && <Text style={styles.selectedDateText}>{endDate.toLocaleDateString()}</Text>}
        </View>
      </View>

      {showStartDatePicker && (
        <DateTimePicker
          value={startDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowStartDatePicker(false);
            if (selectedDate) setStartDate(selectedDate);
          }}
        />
      )}
      
      {showEndDatePicker && (
        <DateTimePicker
          value={endDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowEndDatePicker(false);
            if (selectedDate) setEndDate(selectedDate);
          }}
        />
      )}

      {/* Filter and Reset Buttons */}
      <View style={styles.filterButtonsContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={filterByDate}>
          <Text style={styles.filterButtonText}>Filtrer par date</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
          <Text style={styles.resetButtonText}>X</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredOrders}
        renderItem={renderCommand}
        keyExtractor={(item) => item._id.toString()}
        ListEmptyComponent={() => (
          <View style={styles.noCommandsContainer}>
            <Text style={styles.noCommandsText}>Aucune commande trouvée</Text>
          </View>
        )}
      />
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
  noCommandsContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  noCommandsText: {
    fontSize: 16,
    color: '#888',
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
  datePickerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedDateText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
    borderColor:'black',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  filterButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginLeft:10,
  },
  resetButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CommandListScreen;
