import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import Card from "../components/Card";
import AppEmptyPlaceHolder from "../components/AppEmptyPlaceholder";
const products = [
  {
    productId: 1,
    name: "Sex boost",
    price: 24.99,
    image: require("../assets/images/sex-boost.png"),
    quantity: 1,
  },
  {
    productId: 2,
    name: "Neuro-calm",
    price: 24.99,
    image: require("../assets/images/neuro-calm.jpg"),
    quantity: 1,
  },
  {
    productId: 3,
    name: "Immuno-T",
    price: 24.99,
    image: require("../assets/images/immuni-t.jpg"),
    quantity: 1,
  },
  {
    productId: 4,
    name: "Transit",
    price: 24.99,
    image: require("../assets/images/Transit.jpg"),
    quantity: 1,
  },
];
const PanierScreen = () => {
  const [panierProductsList, setPanierProductsList] = useState(products);
  const redirectToProduct = (productId) => {
    // TODO redirect products detailed page
    console.log(productId);
    // return <Redirect href="/" />;
  };
  const removeProduct = (productId) => {
    setPanierProductsList((prevFavoriteList) =>
      prevFavoriteList.filter((product) => product.productId !== productId)
    );
  };
  const handleIncreaseQuantity = (productId) => {
    const updatedFavoriteList = panierProductsList.map((p) =>
      p.productId === productId ? { ...p, quantity: p.quantity + 1 } : p
    );
    setPanierProductsList(updatedFavoriteList);
  };

  const handleDecreaseQuantity = (productId, quantity) => {
    if (quantity > 0) {
      const updatedFavoriteList = panierProductsList.map((p) =>
        p.productId === productId ? { ...p, quantity: p.quantity - 1 } : p
      );
      setPanierProductsList(updatedFavoriteList);
    }
    return;
  };

  return (
    <SafeAreaView style={styles.container}>
      {panierProductsList.length > 0 ? (
        <>
          <Text style={styles.panierText}>Panier</Text>

          <FlatList
            data={panierProductsList}
            keyExtractor={(panierProductsList) =>
              panierProductsList.productId.toString()
            }
            renderItem={({ item }) => (
              <Card
                productId={item.productId}
                name={item.name}
                price={item.price + "€"}
                image={item.image}
                quantity={item.quantity}
                onPressCard={() => redirectToProduct(item.productId)}
                onPressIncreaseQuantity={() =>
                  handleIncreaseQuantity(item.productId)
                }
                onPressDecreaseQuantity={() =>
                  handleDecreaseQuantity(item.productId, item.quantity)
                }
                onPressDeleteFromList={() => removeProduct(item.productId)}
              />
            )}
          />
        </>
      ) : (
        <Text style={styles.panierText}>votre panier est vide</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
    backgroundColor: "white",
  },
  panierText: {
    fontSize: 35,
    color: "green",
    textAlign: "center",
    alignItems: "center",
  },
});
export default PanierScreen;
