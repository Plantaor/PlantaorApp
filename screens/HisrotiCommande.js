import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HistoriqueCommande = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../assets/icons/flecheretour.jpg')}
              style={styles.backIcon}
            />
          </View>
          <Text style={styles.subHeader}>Historiques commande</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleRow}>
        <Text style={styles.headerTitle}>Historiques commande</Text>
        <View style={styles.lastMonthContainer}>
          <Text style={styles.lastMonth}>last month</Text>
          <TouchableOpacity style={styles.dropdownButton}>
            <Ionicons name="chevron-down" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.filters}>
        <TouchableOpacity style={[styles.filterButton, styles.filterButtonActive]}>
          <Text style={[styles.filterText, styles.filterTextActive]}>All(22)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>En cours(15)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Confirmé(03)</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.card, styles.cardConfirmed]}>
        <ImageBackground source={require('../assets/inscription.png')} style={styles.cardImage} imageStyle={styles.cardImageStyle}>
          <View style={styles.overlay} />
          <Text style={styles.cardTitle}>Confirmé</Text>
          <View style={styles.cardContent}>
            <View style={styles.cardNumberContainer}>
              <Text style={styles.cardNumber}>04</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={[styles.card, styles.cardInProgress]}>
        <ImageBackground source={require('../assets/inscription.png')} style={styles.cardImage} imageStyle={styles.cardImageStyle}>
          <View style={styles.overlay} />
          <Text style={styles.cardTitle}>En cours</Text>
          <View style={styles.cardContent}>
            <View style={styles.cardNumberContainer}>
              <Text style={styles.cardNumber}>15</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={[styles.card, styles.cardCancelled]}>
        <ImageBackground source={require('../assets/inscription.png')} style={styles.cardImage} imageStyle={styles.cardImageStyle}>
          <View style={styles.overlay} />
          <Text style={styles.cardTitle}>Annulées</Text>
          <View style={styles.cardContent}>
            <View style={styles.cardNumberContainer}>
              <Text style={styles.cardNumber}>03</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
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
  },
  lastMonthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastMonth: {
    fontSize: 14,
    color: 'gray',
    marginRight: 5,
  },
  dropdownButton: {
    padding: 5,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
  },
  filterButtonActive: {
    borderColor: 'green',
  },
  filterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  filterTextActive: {
    color: 'green',
    textAlign: 'center',
    width: 90,
    height: 15,
  },
  card: {
    marginBottom: 50,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    width: 343,
    height: 104,

  },
  cardConfirmed: {
    borderColor: 'green',
    borderWidth: 2,
    marginTop: 20,
  },
  cardInProgress: {
    borderColor: 'green',
    borderWidth: 2,
  },
  cardCancelled: {
    borderColor: 'green',
    borderWidth: 2,
  },
  cardImage: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
  },
  cardImageStyle: {
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  cardTitle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -70 }, { translateY: -50 }],
    fontSize: 16,
    color: 'black',
  },
  cardNumberContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'black',
    opacity: 50,
  },
  cardNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
});
