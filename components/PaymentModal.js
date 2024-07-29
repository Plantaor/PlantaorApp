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
import Icon from "react-native-vector-icons/MaterialIcons"; // Make sure to install this package
import { Picker } from "@react-native-picker/picker";

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
          <Text style={styles.buttonText1}>carte de crédit ou de débit</Text>
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
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [country, setCountry] = useState("France");

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
        <View style={[styles.creditCardInputContainer, styles.input]}>
          <TextInput
            style={styles.creditCardInput}
            placeholder="Numéro de carte"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
          />
          <Icon
            name="credit-card"
            size={24}
            color="#000"
            style={styles.creditCardInputIcon}
          />
        </View>

        <View style={[styles.creditCardRow, styles.input]}>
          <TextInput
            style={[
              styles.creditCardInput,
              styles.creditCardHalfInput,
              { borderRightWidth: 1, borderColor: "#DBDBDB" },
            ]}
            placeholder="Expiration"
            value={expiration}
            onChangeText={setExpiration}
          />
          <TextInput
            style={[styles.creditCardInput, styles.creditCardHalfInput]}
            placeholder="CVV"
            value={cvv}
            onChangeText={setCvv}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View
        style={[
          styles.creditCardSelectContainer,
          styles.input,
          {
            padding: 5,
            borderWidth: 1,
            borderColor: "#DBDBDB",
            marginVertical: 10,
          },
        ]}
      >
        <TextInput
          style={[styles.creditCardInput]}
          placeholder="Code postal"
          value={postalCode}
          onChangeText={setPostalCode}
          keyboardType="numeric"
        />
      </View>

      <View style={[styles.creditCardSelectContainer, styles.input,{position:"relative"}]}>
        <View style={[styles.creditCardPickerContainer,{
            borderWidth: 1,
            borderColor: "#DBDBDB",
            marginVertical: 10,
          },]}>
          <Picker
            selectedValue={country}
            onValueChange={(itemValue) => setCountry(itemValue)}
            style={styles.creditCardPicker}
          >
            <Picker.Item label="France" value="France" />
            <Picker.Item label="Belgique" value="Belgique" />
            <Picker.Item label="Suisse" value="Suisse" />
            <Picker.Item label="Canada" value="Canada" />
            {/* Add more countries as needed */}
          </Picker>
        </View>
        <Text style={styles.creditCardSelectLabel}>pays/region</Text>

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
          onPress={onSubmit}
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
      setShowSecondForm(false); // Reset to first form when opening modal
    }
  };

  const handleShowSecondForm = () => {
    setShowSecondForm(true);
  };

  const handleSelectCreditCard = () => {
    setShowSecondForm(true);

    console.log("Credit card selected");
    // Implement your logic here
  };

  const handleSelectPaypal = () => {
    console.log("PayPal selected");
    // Implement your logic here
  };
  const handleSubmitCreditCard = () => {
    console.log("Credit card submitted");
    // Implement credit card submission logic here
    toggleModal();
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
                    onSubmit={handleSubmitCreditCard}
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
  creditCardFormContainer: {
    flex: 1,
    padding: 16,
    //backgroundColor: "red",
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
  creditCardInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  creditCardInputIcon: {
    marginRight: 10,
  },
  creditCardInput: {
    flex: 1,
    height: 40,
    color: "#DBDBDB",
    padding: 10,
  },
  creditCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  creditCardHalfInput: {
    width: "48%",
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
  creditCardSelectLabel: {
    fontSize: 11,
    color: "#DBDBDB",
    position:"absolute",
    top:10,
    left:2

  },
  creditCardPickerContainer: {
    minWidth: "100%",
    overflow: "hidden",
    backgroundColor:"white"

  },
  creditCardPicker: {
    height: 50, // Ensure enough height
    backgroundColor: "white", // Changed from red for better visibility
    color: "black",
    ...Platform.select({
      android: {
        color: "black",
        backgroundColor: "transparent",
      },
    }),
  },
  pickerItem: {
    color: "black", // This is for iOS
  },
  input: {
    borderColor: "#DBDBDB",
    color: "#DBDBDB",
  },
  creditCardinfo: {
    borderWidth: 1,
    borderColor: "#DBDBDB",
  },
  button1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  buttonText1: {
    marginLeft: 16,
    fontSize: 16,
  },
  creditCardSelectContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default PaymentModal;
