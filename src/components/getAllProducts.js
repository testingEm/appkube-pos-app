import React from "react";

import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Catalog from "./Catalog";

const GetAllProducts = () => {
  const [quantity, setQuantity] = useState(0);
  const PriceperItem = 5;
  const HandleIncrement = () => {
    //  const previous = quantity
    setQuantity((previous) => previous + 1);
    console.log(quantity);
  };
  const navigation = useNavigation();

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      console.log(quantity);
    }
  };

  const getTotalPrice = () => {
    return (quantity * PriceperItem).toFixed(2);
  };

  const handleProduct = () => {
    console.log("navigate to product");
    navigation.navigate("ProductPage");
    console.log("navigate to product 2");
  };
  

  return (
    <div>
      <div className="flex flex-col">
        <TouchableOpacity onPress={handleProduct}>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              justifyContent: "space-between",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "black",
              margin: 2,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
                }}
                style={{ width: 70, height: 70, borderRadius: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Apple!</Text>
                <Text>Price: $5</Text>
              </View>
            </View>
            <View style={{ alignItems: "center", gap: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>Qty: {quantity}</Text>
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      backgroundColor: "lightgray",
                      borderRadius: 5,
                    }}
                    onPress={HandleIncrement}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      +
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      backgroundColor: "lightgray",
                      borderRadius: 5,
                      marginLeft: 5,
                    }}
                    onPress={handleDecrement}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={{ fontWeight: "700" }}>
                Total: ${getTotalPrice()}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* /// */}
      </div>
    </div>
  );
};

export default GetAllProducts;
