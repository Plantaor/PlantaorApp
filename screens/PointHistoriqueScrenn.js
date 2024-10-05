import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const PointsHistory = () => {
  const [pointsHistory, setPointsHistory] = useState([]);

  useEffect(() => {
    // Appel API pour récupérer l'historique des transactions de points
    fetchPointsHistory();
  }, []);

  const fetchPointsHistory = async () => {
    // Simulation d'une requête API
    const history = await fetch('/api/points/history');
    setPointsHistory(history);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historique de vos points</Text>
      <FlatList
        data={pointsHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.date}>{new Date(item.date).toLocaleDateString()}</Text>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.points}>{item.points} points</Text>
            <Text>{item.description}</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyItem: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 16,
  },
  points: {
    fontSize: 16,
    color: '#00aaff',
  },
});

export default PointsHistory;
