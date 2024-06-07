import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppButton from "../components/AppButton";

const product = {
  productId: 3,
  name: "Immuno-T",
  price: 24.99,
  image: require("../assets/images/immuni-t.jpg"),
  quantity: 1,
};
const DetailsProduct = () => {
  const [productDetails, setProductDetails] = useState(product);

  const onPressIncreaseQuantity = () => {
    setProductDetails({ ...productDetails, quantity: quantity + 1 });
  };

  const onPressDecreaseQuantity = () => {
    if (quantity > 0) {
      setProductDetails({ ...productDetails, quantity: quantity - 1 });
    }
    return;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.panierText}>Product</Text>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>{product.name}</Text>
        <View style={styles.detailsPrice}>
          <Text style={styles.detailsText}>{product.price}€</Text>
          <View style={styles.quantityContainer}>
            <AppButton
              title="-"
              onPress={onPressDecreaseQuantity}
              style={{
                button: {
                  width: 50,
                  height: 40,
                  paddingVertical: 0,
                  paddingHorizontal: 0,
                  backgroundColor: "white",
                },
                text: {
                  color: "black",
                  fontSize: 25,
                  fontWeight:"bold"
                },
              }}
            />

            <Text style={styles.quantity}>{productDetails.quantity}</Text>
            <AppButton
              title="+"
              onPress={onPressIncreaseQuantity}
              style={{
                button: {
                  width: 50,
                  height: 40,
                  paddingVertical: 0,
                  paddingHorizontal: 0,
                  backgroundColor: "white",
                },
                text: {
                  color: "black",
                  fontSize: 20,
                },
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "orangered",
  },
  panierText: {
    fontSize: 35,
    color: "green",
    textAlign: "center",
  },
  imageContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#ECECEC", // Set background color for circle
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    borderRadius: 100, // Set border radius for circle container (optional)
    overflow: "hidden", // Clip overflowing image content
  },
  image: {
    borderRadius: 100, // Set border radius for image
    height: "80%",
  },
  detailsContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "blue",
  },
  detailsText: {
    fontSize: 20,
    color: "green",
    textAlign: "center",
  },
  detailsPrice: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 16,

    backgroundColor: "purple",
  },
  quantityContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    backgroundColor: "white",
    borderRadius: 25,
    overflow: "hidden",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
