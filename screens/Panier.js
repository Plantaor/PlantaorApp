import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Button,
} from "react-native";
import Card from "../components/Card";
import AppButton from "../components/AppButton";
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
  const navigation = useNavigation();

  const redirectToProduct = (productId) => {
    // TODO redirect products detailed page
    console.log(productId);
    navigation.navigate("productDetail", { productId });
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

  const handleGoToCheckout = () => {
    console.log("redirect to Checkout");
  };

  return (
    <SafeAreaView style={styles.container}>
      {panierProductsList.length > 0 ? (
        <>
          <View style={styles.listContainer}>
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
                  price={item.price}
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
          </View>
          <View style={styles.pricesContainer}>
            <View style={styles.price}>
              <Text style={styles.label}>Total</Text>
              <Text style={styles.value}>124,95€</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.label}>Livraison</Text>
              <Text style={styles.value}>29,99€</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.label}>Total</Text>
              <Text style={styles.value}>154,94€</Text>
            </View>
            <AppButton
              title="passer à la caisse"
              onPress={handleGoToCheckout}
              style={{
                button: {
                  width: "90%",
                  backgroundColor: "#64A962",
                },
                text: {
                  color: "black",
                  fontSize: 20,
                  fontWeight: "bold",
                },
              }}
            />
          </View>
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
    justifyContent: "space-between",
    maxWidth: "100%",
    backgroundColor: "white",
  },
  listContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "70%",
    maxHeight: "70%",
    backgroundColor: "white",
  },
  pricesContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  label: {
    width: "50%",
    fontSize: 20,
  },
  value: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
  panierText: {
    fontSize: 35,
    color: "green",
    textAlign: "center",
    alignItems: "center",
  },
});
export default PanierScreen;
