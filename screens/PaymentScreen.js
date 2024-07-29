import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import PaymentModal from "../components/PaymentModal";

const PaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={require("../assets/icons/flecheretour.jpg")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.topSection}>
        <Text style={styles.title}>Modalité de paiement</Text>
        <Text style={styles.description}>
          Bienvenue sur la page de gestion des méthodes
        </Text>
        <Text style={styles.description}>
          de paiement. Ici, vous pouvez facilement
        </Text>
        <Text style={styles.description}>
          ajouter une nouvelle méthode de paiement
        </Text>
        <Text style={styles.description}>
          à votre compte, pour rendre vos transactions
        </Text>
        <Text style={styles.description}>
          encore plus pratiques et sécurisées.
        </Text>
      </View>
        <PaymentModal />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    position: "absolute",
    top: 40,
    left: 16,
  },
  backButton: {
    padding: 8,
    backgroundColor: "#F0F0F0",
    borderRadius: 25,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  topSection: {
    marginTop: 80, // Ajustez cette valeur pour positionner les textes en haut
    alignItems: "center", // Centre les éléments enfants horizontalement
    width: "100%", // Assure que le texte prend toute la largeur disponible
    paddingHorizontal: 16, // Ajoute du padding pour l'alignement à gauche
    textAlign: "left", // Alignement à gauche
  },
  title: {
    fontSize: 24, // Taille de la police
    color: "#4CAF50",
    marginBottom: 20,
    textAlign: "center", // Alignement à gauche
  },
  description: {
    fontSize: 14, // Taille de la police
    color: "rgba(140, 140, 140, 0.5)", // Couleur gris clair avec opacité
    textAlign: "left", // Alignement à gauche
    lineHeight: 22, // Hauteur de ligne pour un meilleur espacement
    marginBottom: 5, // Ajoute de la marge pour espacer les lignes
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10, // Rendre les coins du bouton arrondis
    alignItems: "center",
    marginTop: 50, // Espace entre la description et le bouton
    alignSelf: "center", // Centrer le bouton horizontalement
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    width: 250,
    height: 25,
    textAlign: "center",
  },
});
