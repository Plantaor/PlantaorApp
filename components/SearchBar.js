import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

const SearchBar = ({ searchPhrase, handleTextChange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={handleTextChange}
          keyboardType="web-search"
          returnKeyType="search"
        />
        {/* search Icon */}
        <Image
          source={require("../assets/icons/search_outline.png")}
          style={{ width: 20, height: 20, tintColor: "black" }}
        />
      </View>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginRight: 0, 
    paddingRight: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    maxWidth: "85%",
  },
  searchBar: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#F0F0F0",
    borderRadius: 15,
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
