import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import * as Yup from "yup";
import axios from "axios";
import {
  AppForm,
  AppFormField,
  Oauth,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import { API_URL } from '@env';

const Inscription = ({ navigation }) => {
  const handleRegister = async ({ email, password, firstName, lastName, role }) => {
    try {
      const response = await axios.post(`${API_URL}/users`, {
        email,
        password,
        firstName,
        lastName,
        role,
      });

      if (response.status === 201) {
        Alert.alert(
          "Success",
          "User registered successfully. Please verify your email."
        );
        navigation.navigate("login");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        error.response?.data?.message || "Something went wrong!"
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={require("../assets/inscription.png")} />
      </View>
      <AppForm
        initialValues={{
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          role: "lambda",
        }}
        onSubmit={handleRegister}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="firstName"
          placeholder="Prénom"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <AppFormField
          name="lastName"
          placeholder="Nom"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <AppFormField
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          placeholder="Mot de passe"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <AppFormPicker
          name="role"
          placeholder="Rôle"
          items={[
            { label: "Admin", value: "admin" },
            { label: "Pharmacist", value: "pharmacist" },
            { label: "Lambda", value: "lambda" },
          ]}
        />
        <SubmitButton title="S'inscrire" />
      </AppForm>
      <View style={styles.connexion}>
        <View style={styles.LineViewlayout} />
        <Text style={styles.textConnexion}>Ou se connecter avec</Text>
        <View style={styles.LineViewlayout} />
      </View>
      <Oauth />
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text style={styles.nouveauCompte}>j'ai déjà un compte ?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
  },
  banner: {
    top: -20,
  },
  connexion: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    top: 20,
  },
  LineViewlayout: {
    height: 1,
    width: 110,
    borderStyle: "solid",
    top: -10,
    backgroundColor: "black",
  },
  textConnexion: {
    fontSize: 18,
  },
  nouveauCompte: {
    fontSize: 15,
    color: "green",
    top: 40,
    right: 85,
  },
});

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email requis")
    .email("Email invalide")
    .label("Email"),
  password: Yup.string()
    .required("Mot de passe requis")
    .min(6, "Mot de passe: minimum 6 caractères")
    .label("Mot de passe"),
  firstName: Yup.string()
    .required("Prénom requis")
    .min(2, "Prénom: minimum 2 caractères")
    .max(50, "Prénom: maximum 50 caractères")
    .label("Prénom"),
  lastName: Yup.string()
    .required("Nom requis")
    .min(2, "Nom: minimum 2 caractères")
    .max(50, "Nom: maximum 50 caractères")
    .label("Nom"),
  role: Yup.string()
    .required("Rôle requis")
    .oneOf(["admin", "pharmacist", "lambda"], "Rôle invalide")
    .label("Rôle"),
});

export default Inscription;
