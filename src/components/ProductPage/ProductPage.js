import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Picker,
  StyleSheet,
  Pressable,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [piece, setPiece] = useState(1);
  const [quantity, setQuantity] = useState("1");
  const [selectedType, setSelectedType] = useState("pieces");

  const typePrice = {
    kgs: { price: 50 },
    gms: { price: 0.3 },
    pieces: { price: 16 },
  };

  const quantityTypes = [
    { label: "Pieces", value: "pieces" },
    { label: "Grams", value: "gms" },
    { label: "Kgs", value: "kgs" },
    // ... Add more types as needed
  ];

  const handleChangeQuantity = (text) => setQuantity(text);
  const handleSelectType = (type) => setSelectedType(type);

  return (
    <View
      style={{
        flexDirection: "column",
        gap: "10px",
        padding: "15px",
        position: "relative",
        height: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
          }}
          style={{ width: 70, height: 70, borderRadius: 10 }}
        />
        {/* <View style={{ marginLeft: 20 }}> */}
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Apple 1pcs <br />
          Price : ₹ 16.00
        </Text>
        {/* </View> */}
      </View>
      {/* <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "grey",
            marginBottom: 7,
          }}
        >
          Inventory
        </Text>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            borderColor: "#dddddd",
            width: "100%",
            height: "20vh",
            borderWidth: 2,
            borderRadius: 10,
            padding: 15,
          }}
        >
          <Text style={{ color: "black", fontWeight: 600 }}>
            Stocked at (InventoryName)
          </Text>
          <Text style={{ color: "black" }}>Quantity : 4 Cartons</Text>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#dddddd",
            }}
          />
          <Text>Last updated 21 seconds ago</Text>
        </View>
      </View> */}
      <View style={{ marginTop: 15 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "grey",
            marginBottom: 7,
          }}
        >
          More details
        </Text>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            borderColor: "#dddddd",
            width: "100%",
            height: "20vh",
            borderWidth: 2,
            borderRadius: 10,
            padding: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              //   backgroundColor: "#dddddd",
              paddingTop: 15,
              paddingBottom: 6,
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>
              Price
            </Text>
            <Text style={{ color: "black", fontSize: 16, fontWeight: 600 }}>
              {quantity != "" && (
                <Text>
                  {quantity} x {selectedType} : Rs.
                  {Math.ceil(quantity * typePrice[selectedType].price * 1000) /
                    1000}
                </Text>
              )}
            </Text>
          </View>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#dddddd",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              //   backgroundColor: "#dddddd",
              paddingBottom: 10,
            }}
          >
            <Text style={{ color: "black", fontWeight: 500 }}>
              Enter Custom Quantity
            </Text>
            <View style={styles.container}>
              <TextInput
                value={quantity}
                onChangeText={handleChangeQuantity}
                placeholder="Enter Quantity"
                keyboardType="numeric"
                style={styles.textInput}
              />
              <Picker
                selectedValue={selectedType}
                onValueChange={handleSelectType}
                style={styles.picker}
              >
                {quantityTypes.map((type) => (
                  <Picker.Item
                    label={type.label}
                    value={type.value}
                    key={type.value}
                  />
                ))}
              </Picker>
            </View>
            {/* {quantity != "" && (
              <Text>
                {quantity} x {selectedType} :{" "}
                {quantity * typePrice[selectedType].price} Rs.
              </Text>
            )} */}
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          bottom: 10,
          paddingRight: 10,
          width: "95%",
          // justifySelf: "end",
          justifySelf: "flex-end",
          marginTop: 15,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#31572c",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
          onPress={() => {
            setPiece(piece + 1);
            console.log(cart);
            cart.push({
              name: "Apple",
              quantityType: selectedType,
              quantity: quantity,
              price:
                Math.ceil(quantity * typePrice[selectedType].price * 1000) /
                1000,
            });
            console.log(cart);
          }}
        >
          <Entypo name="plus" size={24} color="white" />
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#d8f3dc",
            width: "82%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#31572c", fontWeight: 700 }}>Go to cart</Text>
          <Text style={{ color: "grey" }}>{piece} items</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  picker: {
    width: 100,
    height: 40,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default ProductPage;
