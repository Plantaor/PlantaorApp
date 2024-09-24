import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
  Platform,
  Image,  // Importez l'image depuis react-native
  TouchableOpacity
} from "react-native";
import React from "react";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import ProfileButton from "./ProfileImage";
import bellIcon from '../assets/icons/notification.png';  // Assurez-vous que le chemin est correct
import { useNavigation } from '@react-navigation/native';


const HeaderComponent = () => {  // Ajoutez `navigation` en paramètre
  const [searchPhrase, setSearchPhrase] = useState("");
  const navigation = useNavigation();  
  const queryAPI = async (newSearchPhrase) => {
    console.log("queryAPI Input: " + newSearchPhrase);
  };


  const handleTextChange = (newSearchPhrase) => {
    setSearchPhrase(newSearchPhrase);
    queryAPI(newSearchPhrase);
  };

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.headerContainer}>
        <SearchBar
          searchPhrase={searchPhrase}
          handleTextChange={handleTextChange}
        />
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Image source={bellIcon} style={styles.notificationIcon} />
        </TouchableOpacity>
          <ProfileButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginRight:20,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    width: 24,  // Définissez la taille de l'icône
    height: 24, // Définissez la taille de l'icône
    marginRight: 10, // Espace entre l'icône de notification et l'image de profil
  },
});

export default HeaderComponent;
