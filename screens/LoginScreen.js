import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { API_URL } from '@env';
import * as Notifications from 'expo-notifications';

// Fonction pour demander la permission et obtenir le token de notification
const registerForPushNotificationsAsync = async () => {
  let token;

  // Demander la permission pour les notifications
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }

  try {
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Push Token:", token);
    return token;
  } catch (error) {
    console.error('Error fetching Expo push token:', error);
    return null;
  }
};


// Fonction pour sauvegarder le token de notification dans le backend
const savePushTokenToBackend = async (deviceToken, authToken) => {
  try {
    const response = await axios.post(
      `${API_URL}/users/device-token`, // Assurez-vous que l'URL correspond à votre backend
      {
        token: authToken,     // Le token d'authentification JWT
        deviceToken: deviceToken,  // Le token de notification
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,  // Le token d'authentification dans les headers
        },
      }
    );

    if (response.status === 200) {
      console.log('Device token saved successfully');
    } else {
      console.error('Failed to save device token:', response.data);
    }
  } catch (error) {
    if (error.response) {
      console.error('Error saving device token:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error in request setup:', error.message);
    }
  }
};

const LoginScreen = ({ navigation }) => {
  console.log(API_URL);
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
      const response = await axios.post(`${API_URL}/users/login`, {
        email: identifier,
        password,
        code,
      });

      console.log("API Response:", response.data);

      const { token, email, firstName, lastName, role } = response.data;

      console.log(token);
      if (token && email && firstName && lastName && role) {
        await AsyncStorage.setItem('userToken', token);
        await AsyncStorage.setItem('user', JSON.stringify({
          email,
          firstName,
          lastName,
          role
        }));
        // Obtenir le token de notification
        const pushToken = await registerForPushNotificationsAsync();
        if (pushToken) {
          // Enregistrer le token dans le backend
          await savePushTokenToBackend(pushToken, token);
        }
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
