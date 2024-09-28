import React, { useState } from "react";
import {
  View,
  Button,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Assurez-vous d'avoir installé ce package
import { Picker } from "@react-native-picker/picker";
import { CardField, useStripe } from '@stripe/stripe-react-native'; // Assurez-vous d'avoir installé Stripe
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const PaymentMethodForm = ({ onClose, onSelectCreditCard, onSelectPaypal }) => {
  return (
    <View style={styles.formContainer}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={onClose}>
          <Icon name="close" size={24} color="#000" />
        </TouchableWithoutFeedback>
        <Text style={styles.title}>Ajouter méthode de paiement</Text>
      </View>

      <TouchableWithoutFeedback onPress={onSelectCreditCard}>
        <View style={styles.button1}>
          <Icon name="credit-card" size={24} color="#000" />
          <Text style={styles.buttonText1}>Carte de crédit ou de débit</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={onSelectPaypal}>
        <View style={styles.button1}>
          <Icon name="paypal" size={24} color="#0070BA" />
          <Text style={styles.buttonText1}>Paypal</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const CreditCardForm = ({ onClose, onSubmit }) => {
  const { createPaymentMethod } = useStripe();
  const [cardElement, setCardElement] = useState(null);
  
  const handlePayment = async () => {
    // Créer une méthode de paiement Stripe
    const { paymentMethod, error } = await createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Erreur lors de la création de la méthode de paiement:', error);
      Alert.alert('Erreur', error.message);
      return;
    }

    // Envoyer l'ID de la méthode de paiement au backend
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.post('/api/payment-methods', {
        paymentMethodId: paymentMethod.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        Alert.alert("Succès", "Méthode de paiement enregistrée avec succès !");
        onClose();
      }
    } catch (err) {
      console.error('Erreur lors de l\'enregistrement de la méthode de paiement:', err);
      Alert.alert("Erreur", "Impossible d'enregistrer la méthode de paiement.");
    }
  };

  return (
    <View style={styles.creditCardFormContainer}>
      <View style={styles.creditCardFormHeader}>
        <TouchableOpacity onPress={onClose}>
          <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.creditCardFormTitle}>
          Ajouter méthode de paiement
        </Text>
      </View>
      <View style={styles.creditCardinfo}>
        <CardField
          postalCodeEnabled={true}
          placeholder={{ number: '4242 4242 4242 4242' }}
          cardStyle={{
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            setCardElement(cardDetails);
          }}
        />
      </View>

      <View style={styles.creditCardButtonContainer}>
        <TouchableOpacity
          style={styles.creditCardCancelButton}
          onPress={onClose}
        >
          <Text style={styles.creditCardButtonText}>Annuler</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.creditCardSubmitButton}
          onPress={handlePayment}
        >
          <Text style={styles.creditCardButtonText}>Enregistrer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PaymentModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [showSecondForm, setShowSecondForm] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    if (!isModalVisible) {
      setShowSecondForm(false); // Réinitialiser le formulaire lors de l'ouverture du modal
    }
  };

  const handleSelectCreditCard = () => {
    console.log("Sélection de la carte de crédit");
    setShowSecondForm(true);
  };

  const handleSelectPaypal = () => {
    console.log("PayPal sélectionné");
    // Implémentez votre logique ici pour PayPal
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View style={[styles.creditCardSubmitButton, { width: "auto" }]}>
          <Text style={styles.buttonText1}>
            Ajouter une méthode de paiement
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                {!showSecondForm ? (
                  <PaymentMethodForm
                    onClose={toggleModal}
                    onSelectCreditCard={handleSelectCreditCard}
                    onSelectPaypal={handleSelectPaypal}
                  />
                ) : (
                  <CreditCardForm
                    onClose={toggleModal}
                  />
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
    marginTop: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    minHeight: "70%",
  },
  formContainer: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 24,
  },
  button1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 8,
  },
  buttonText1: {
    marginLeft: 10,
    fontSize: 16,
  },
  creditCardFormContainer: {
    flex: 1,
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  creditCardFormHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  creditCardFormTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 24,
  },
  creditCardinfo: {
    marginBottom: 20,
  },
  creditCardButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  creditCardCancelButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  creditCardSubmitButton: {
    backgroundColor: "#64A962",
    padding: 10,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  creditCardButtonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default PaymentModal;

