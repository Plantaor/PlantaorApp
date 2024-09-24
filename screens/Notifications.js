import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios'; // Si vous utilisez Axios pour les requêtes HTTP
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();  

  // Fonction pour récupérer les notifications depuis le backend
  const fetchNotifications = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get(`${API_URL}/notifications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.message) {
        console.log(response.data.message); // "Aucune notification trouvée"
        setNotifications([]); // Affichez une interface vide ou un message personnalisé
      } else {
        setNotifications(response.data);
      }

      setLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des notifications:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  // Fonction pour marquer la notification comme lue et naviguer
  const handleNotificationPress = async (id, type) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      await axios.put(
        `${API_URL}/notifications/read/${id}`,
        {}, // Ajoutez un corps vide ici
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Mettre à jour l'état local pour refléter ce changement
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification._id === id ? { ...notification, read: true } : notification
        )
      );
      // Si la notification concerne une nouvelle commande, naviguer vers CommandListScreen
      if (type === 'newOrder') {
        navigation.navigate('CommandList');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la notification:', error);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={require('../assets/icons/retour.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>

      {notifications.length === 0 ? (
        <Text style={styles.noNotificationsText}>Vous n'avez aucune notification</Text>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              onPress={() => handleNotificationPress(item._id, item.type)} // Naviguer en fonction du type de notification
              style={[
                styles.notificationCard,
                { backgroundColor: item.read ? '#f0f0f0' : '#e0f7fa' } // Couleur différente si non lu
              ]}
            >
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationMessage}>{item.message}</Text>
              <Text style={styles.notificationDate}>{new Date(item.createdAt).toLocaleDateString()}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    width: 45,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    color: "green",
    textAlign: 'center',
    flex: 1,
    marginTop: 100,
  },
  noNotificationsText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
  notificationCard: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  notificationDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 8,
  },
});

export default NotificationsScreen;
