import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AppButton from "./AppButton";

export default function Card({
  productId,
  name,
  price,
  image,
  quantity,
  onPressCard,
  onPressIncreaseQuantity,
  onPressDecreaseQuantity,
  onPressDeleteFromList,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPressCard}>
      <View style={styles.card}>
        <View style={styles.bodyContainer}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}€</Text>
          </View>
          <View style={styles.actionsContainer}>
            <View
              style={[
                styles.quantityContainer,
                { margin: 0, justifyContent: "space-between" },
              ]}
            >
              <AppButton
                title=""
                style={{
                  button: {
                    width: 50,
                    backgroundColor: "white",
                  },
                  text: {
                    color: "black",
                  },
                }}
              />
              <AppButton
                title="X"
                onPress={onPressDeleteFromList}
                style={{
                  button: {
                    width: 50,
                    backgroundColor: "white",
                  },
                  text: {
                    color: "black",
                  },
                }}
              />
            </View>

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
                    borderWidth: 3,
                    borderColor: "#ECECEC",
                  },
                  text: {
                    color: "black",
                  },
                }}
              />

              <Text style={styles.quantity}>{quantity}</Text>
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
                    borderWidth: 3,
                    borderColor: "#64A962",
                  },
                  text: {
                    color: "black",
                    color: "#64A962",
                  },
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    margin: 5,
    backgroundColor: "white",
  },
  bodyContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",

    flexDirection: "row",
  },
  detailsContainer: {
    width: "30%",
    height: "80%",
    justifyContent: "space-between",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#ECECEC",
    width: "30%",
    height: "80%",
    borderRadius: 14,
    backgroundColor: "#ECECEC",
  },

  actionsContainer: {
    width: "30%",
    height: "80%",
    justifyContent: "flex-end",
    position: "relative",
  },
  quantityContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
  image: {
    flex: 1,
    width: "80%",
    height: "80%",
  },
  title: {
    marginBottom: 7,
  },
  name: { fontSize: 20 },
  price: {
    fontSize: 20,
    letterSpacing: 1.2,
    color: "black",
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 20,
    letterSpacing: 1.2,
    color: "black",
    fontWeight: "bold",
  },
});
