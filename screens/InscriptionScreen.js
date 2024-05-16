import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  Oauth,
  SubmitButton,
} from "../components/forms";
const Inscription = ({ navigation }) => {
  const handleRegister = ({ email, password, firstName, lastName }) => {
    // Implement your login logic here
    // For demonstration purposes, we'll just log the username and password
    console.log(
      "email: " +
        email +
        "" +
        "\n password: " +
        password +
        "\n firstName: " +
        firstName +
        "\n lastName: " +
        lastName
    );
    navigation.navigate("store");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <Image source={require("../assets/inscription.png")} />
      </View>
      <AppForm
        initialValues={{ email: "", password: "", firstName: "", lastName: "" }}
        onSubmit={handleRegister}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="firstName"
          placeholder="Prénom"
          autoCapitalize="words"
          autoCorrect={false}
          clearButtonMode="always" // ios clear btn
        />
        <AppFormField
          name="lastName"
          placeholder="Nom"
          autoCapitalize="words"
          autoCorrect={false}
          clearButtonMode="always" // ios clear btn
        />
        <AppFormField
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always" // ios clear btn
          textContentType="emailAddress" //ios autofill
        />
        <AppFormField
          name="password"
          placeholder="Mot de passe"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password" //ios autofill
        />
        <SubmitButton title="Se connecter" />
      </AppForm>
      <View style={styles.connexion}>
        <View style={styles.LineViewlayout} />
        <Text style={styles.textConnexion}>Ou se connecter avec</Text>
        <View style={styles.LineViewlayout} />
      </View>
      <Oauth />
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text style={styles.nouveauCompte}>j'ai deja un compte ?</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
    alignItems: "space-between",
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
  email: Yup.string().required("Email requis").email("Email invalide").label("Email"),
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
});
export default Inscription;
