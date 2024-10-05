import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import axios from 'axios';

const PointsPage = ({  navigation , route }) => {
  const { user } = route.params;
  const [pointsSolde, setPointsSolde] = useState(user.loyaltyPoints);

  // Conversion des points en euros (1 point = 1 euro)
  const conversionRate = 1; // 1 point = 1 euro
  const minimumWithdrawal = 50; // Montant minimum pour pouvoir transférer

  // Récompenses statiques
  const staticRewards = [
    { id: 1, name: 'Carte cadeau Amazon', pointsRequired: 50, imageUrl: 'https://example.com/amazon.jpg' },
    { id: 2, name: 'Bon d’achat Carrefour', pointsRequired: 100, imageUrl: 'https://example.com/carrefour.jpg' },
    { id: 3, name: 'Abonnement Netflix', pointsRequired: 150, imageUrl: 'https://example.com/netflix.jpg' },
  ];

  const redeemReward = async (reward) => {
    try {
      if (pointsSolde >= reward.pointsRequired) {
        
      } else {
        Alert.alert('Solde de points insuffisant.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'échange de la récompense:', error);
    }
  };

  // Fonction pour échanger des points en euros si le solde est supérieur ou égal à 50 euros
  const withdrawPointsAsMoney = async () => {
    const amountInEuros = pointsSolde * conversionRate;
    if (amountInEuros >= minimumWithdrawal) {
      try {
        //await axios.post('/api/points/withdraw', { amount: amountInEuros });
       // Alert.alert(`Vous avez retiré ${amountInEuros} euros vers votre compte !`);
       // setPointsSolde(0); // Réinitialiser les points après le retrait
      } catch (error) {
        console.error('Erreur lors du retrait des points:', error);
        Alert.alert('Erreur lors du transfert des fonds. Veuillez réessayer.');
      }
    } else {
      Alert.alert(`Vous devez avoir au moins ${minimumWithdrawal} euros pour effectuer un retrait.`);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={require('../assets/icons/flecheretour.jpg')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      <Text style={styles.title}>Votre solde de points</Text>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>Vous avez</Text>
        <Text style={styles.pointsNumber}>{pointsSolde}</Text>
        <Text style={styles.pointsText}>points</Text>
      </View>

      {/* Bouton pour échanger des points contre de l'argent si le montant est supérieur à 50 euros */}
      {pointsSolde * conversionRate >= minimumWithdrawal ? (
        <TouchableOpacity style={styles.withdrawButton} onPress={withdrawPointsAsMoney}>
          <Text style={styles.withdrawButtonText}>Échanger {pointsSolde * conversionRate} €</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.infoText}>
          Vous devez accumuler au moins {minimumWithdrawal} € (soit {minimumWithdrawal / conversionRate} points) pour
          pouvoir effectuer un retrait.
        </Text>
      )}

      <Text style={styles.subtitle}>Récompenses disponibles</Text>
      <FlatList
        data={staticRewards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.rewardCard}>
            <Image source={{ uri: item.imageUrl }} style={styles.rewardImage} />
            <View style={styles.rewardInfo}>
              <Text style={styles.rewardName}>{item.name}</Text>
              <Text style={styles.pointsRequired}>
                {item.pointsRequired} points requis ({item.pointsRequired * conversionRate} €)
              </Text>
              <TouchableOpacity
                style={[
                  styles.redeemButton,
                  { backgroundColor: pointsSolde >= item.pointsRequired ? '#4CAF50' : '#aaa' }
                ]}
                onPress={() => redeemReward(item)}
                disabled={pointsSolde < item.pointsRequired}
              >
                <Text style={styles.redeemButtonText}>Échanger</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3F4F6',
  },
  backButton: {
    marginTop:20,
    width: 45,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  pointsText: {
    fontSize: 18,
    color: '#666',
  },
  pointsNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginHorizontal: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#444',
    textAlign: 'center',
  },
  rewardCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 4,
  },
  rewardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  rewardInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  rewardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  pointsRequired: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  redeemButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  redeemButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  withdrawButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  withdrawButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default PointsPage;
