import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";
import axios from "axios";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const LoginScreen = ({ navigation }) => {
  const [showCodeField, setShowCodeField] = useState(false);
  const [showBasicFields, setShowBasicFields] = useState(true);

  const handleUserProPress = () => {
    setShowCodeField(true);
    setShowBasicFields(false);
  };

  const handleUserPress = () => {
    setShowCodeField(false);
    setShowBasicFields(true);
  };

  const handleLogin = async (values) => {
    const { identifier, password, code } = values;

    try {
      const response = await axios.post("http://10.0.2.2:5001/api/users/login", {
        email: identifier,
        password,
        code,
      });

      console.log("API Response:", response.data);

      const { token, email, firstName, lastName, role } = response.data;

      if (token && email && firstName && lastName && role) {
        await AsyncStorage.setItem('userToken', token);
        await AsyncStorage.setItem('user', JSON.stringify({
          email,
          firstName,
          lastName,
          role
        }));
        Alert.alert("Success", "Logged in successfully!");
        navigation.navigate("store");
      } else {
        throw new Error("Invalid response data");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert(
        "Error",
        error.response?.data?.message || "Something went wrong!"
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.customer}>
        <TouchableOpacity
          style={[
            styles.user,
            showBasicFields ? styles.active : styles.disabled,
          ]}
          onPress={handleUserPress}
          disabled={showBasicFields}
        >
          <Text style={styles.usert}>user</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.userPro,
            showCodeField ? styles.active : styles.disabled,
          ]}
          onPress={handleUserProPress}
          disabled={showCodeField}
        >
          <Text style={styles.usertpro}>userPro</Text>
        </TouchableOpacity>
      </View>
      <AppForm
        initialValues={{ identifier: "", password: "", code: "" }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="identifier"
          placeholder="Email ou username"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
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
        {showCodeField && (
          <AppFormField
            name="code"
            placeholder="Code"
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
          />
        )}
        <TouchableOpacity>
          <Text style={styles.Mpdoublie}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        <SubmitButton title="Se connecter" />
      </AppForm>
      <View style={styles.connexion}>
        <View style={styles.LineViewlayout} />
        <Text style={styles.textConnexion}>Ou se connecter avec</Text>
        <View style={styles.LineViewlayout} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Inscription")}>
        <Text style={styles.nouveauCompte}>je n'ai pas encore de compte ?</Text>
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
  textContainer: {
    fontWeight: "bold",
    fontSize: 18,
  },
  connexion: {
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-between",
    top: 40,
  },
  customer: {
    flexDirection: "row",
    top: 25,
  },
  user: {
    width: "40%",
    height: 170,
    top: -100,
    marginRight: 20,
    borderWidth: 1,
  },
  userPro: {
    width: "40%",
    height: 170,
    top: -100,
    marginRight: 1,
    borderWidth: 1,
  },
  usert: {
    fontSize: 19,
    textAlignVertical: "top",
    top: 170,
    position: "absolute",
    left: 55,
  },
  button: {
    backgroundColor: "#266B39",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "60%",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  textConnexion: {
    fontSize: 18,
  },
  active: {
    // Styles pour l'état actif
  },
  disabled: {
    // Styles pour l'état désactivé (grisâtre)
    backgroundColor: "gray",
  },
  nouveauCompte: {
    fontSize: 15,
    color: "green",
    top: 70,
  },
  Mpdoublie: {
    fontSize: 15,
    color: "blue",
    top: 10,
  },
});

const validationSchema = Yup.object().shape({
  identifier: Yup.string()
    .required("Email ou nom d'utilisateur requis")
    .test("isEmailOrUsername", "Email/nom d'utilisateur invalide", (value) => {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
      return emailRegex.test(value) || usernameRegex.test(value);
    })
    .label("Identifier"),
  password: Yup.string()
    .required("Mot de passe requis")
    .min(6, "Mot de passe: minimum 6 caractères")
    .label("Mot de passe"),
  code: Yup.string()
    .matches(/^[A-Z0-9]{8}$/, "Code: 8 caractères, majuscules et chiffres.")
    .label("Code abonnement"),
});

export default LoginScreen;
