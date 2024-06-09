import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppButton from "../components/AppButton";

const product = {
  productId: 3,
  name: "Immuno-T",
  price: 24.99,
  image: require("../assets/images/immuni-t.jpg"),
  quantity: 1,
  description:
    "Les troubles intestinaux sont causés par un mauvais fonctionnement de votre système digestif. La plupart d’entre eux se manifestent dans votre estomac (perte d’appétit, nausées, brûlures, hoquets, ballonnements) .",
  details: "product Details",
};
const DetailsProduct = () => {
  const [productDetails, setProductDetails] = useState(product);
  const [showDescription, setShowDescription] = useState(true);

  const onPressIncreaseQuantity = () => {
    setProductDetails({
      ...productDetails,
      quantity: productDetails.quantity + 1,
    });
  };

  const onPressDecreaseQuantity = () => {
    if (productDetails.quantity > 0) {
      setProductDetails({
        ...productDetails,
        quantity: productDetails.quantity - 1,
      });
    }
    return;
  };

  const onPressAdd = () => {
    console.log("pressed");
  };
  const onPressGoToCHeckout = () => {
    console.log("pressed to mi");
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
                  fontWeight: "bold",
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
        <View style={styles.productDescription}>
          <View style={styles.productDescriptionBtns}>
            <View style={styles.btnsContainer}>
              <AppButton
                onPress={() => setShowDescription(true)}
                title={"Description"}
                style={{
                  button: {
                    backgroundColor: "white",
                    width: "100%",
                    paddingVertical: 5,
                    paddingHorizontal: 5,
                  },
                  text: {
                    color: "black",
                  },
                }}
              />
              <View style={styles.dot} />
            </View>
            <View style={styles.btnsContainer}>
              <AppButton
                onPress={() => setShowDescription(false)}
                title={"Details"}
                style={{
                  button: {
                    backgroundColor: "white",
                    width: "100%",
                    paddingVertical: 5,
                    paddingHorizontal: 5,
                  },
                  text: {
                    color: "black",
                  },
                }}
              />
              <View style={styles.dot} />
            </View>
          </View>
          <View style={styles.productDescriptionText}>
            {showDescription ? (
              <Text>{product.description}</Text>
            ) : (
              <Text>{product.details}</Text>
            )}
          </View>
        </View>
        <View style={styles.actionsBtnContainer}>
          <AppButton
            title="+"
            onPress={onPressGoToCHeckout}
            style={{
              button: {
                width: 50,
                height: 50,
                paddingVertical: 0,
                paddingHorizontal: 0,
                backgroundColor: "white",
                borderRadius: 24,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 1,
                shadowRadius: 1,
                elevation: 1, // Add this line for Androidu
              },
              text: {
                color: "black",
                fontSize: 30,
              },
            }}
          />
          <AppButton
            title="Passer la commande"
            onPress={onPressGoToCHeckout}
            style={{
              button: {
                width: "70%",
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
      </View>
    </View>
  );
};

export default DetailsProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
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
  },
  quantityContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    backgroundColor: "white",
    borderRadius: 25,
    overflow: "hidden",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1, // Add this line for Android
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productDescription: {},
  productDescriptionBtns: {
    width: "100%",
    flexDirection: "row",
    marginLeft: 5,
    gap: 5,
  },
  productDescriptionText: {
    margin: 5,
  },
  btnsContainer: {
    alignItems: "center",
    flexDirection: "column",
    width: "33%",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "green",
    marginTop: 8,
  },
  actionsBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
