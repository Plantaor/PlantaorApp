import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import React from "react";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
// import List from "./List";
import ProfileButton from "./ProfileImage";

const HeaderComponent = () => {
  const [searchPhrase, setSearchPhrase] = useState("");

  // Function to call the API with the new text entry
  const queryAPI = async (newSearchPhrase) => {
    console.log("queryAPI Input: " + newSearchPhrase);

    // try {
    // Make the API call with the new text entry
    // const response = await fetch(
    //   `https://your-api-url.com/search?query=${newText}`
    // );
    // const data = await response.json();
    // Handle the API response data
    // console.log(data);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  };

  // Text input change handler
  const handleTextChange = (newSearchPhrase) => {
    console.log("handleTextChange Input: " + newSearchPhrase);

    setSearchPhrase(newSearchPhrase);

    // Call the queryAPI function with the new text entry
    queryAPI(newSearchPhrase);
  };

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.headerContainer}>
        <SearchBar
          searchPhrase={searchPhrase}
          handleTextChange={handleTextChange}
        />
        <ProfileButton />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    borderBlockColor: 33,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
});
export default HeaderComponent;
