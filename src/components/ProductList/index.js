
import React from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Button,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// import { useState, useEffect } from "react";
// import { generateClient } from "aws-amplify/api";


// import { useSelector, useDispatch } from "react-redux";
// import { addToCart, removeFromCart } from "../redux/slice/customerSlice";

const ProductsList = () => {

//   const dispatch = useDispatch();

//   const client = generateClient();
//   const route = useRoute();
//   console.log(route.params.category);
//   console.log(route.params.catProducts);
//   const Pdata = route.params.catProducts;

//   console.log(Pdata);


  const navigation = useNavigation();

//   const reduxData = useSelector((state) => state.CustomerSlice);
//   console.log(reduxData.cart);

//   let mappredux = reduxData.cart.map((e) => e.id);
//   console.log({ ...mappredux });

//   const HandleIncrement = (veg) => {
//     const data = dispatch(addToCart(veg));
//     console.log(data.payload);

//     console.log(reduxData);
//   };

//   const handleDecrement = (veg) => {
//     dispatch(removeFromCart(veg.id));
//     console.log(veg.id);
//   };

//   const handleProduct = (prod) => {
//     console.log("navigate to product");
//     navigation.navigate("ProductPage", { value: prod });
//     console.log("navigate to product 2");
//   };

//   const handleCart = () => {
//     console.log("navigate to cart");
//     navigation.navigate("Checkout");
//     console.log("navigate to Checkout ");
//   };
//   /////   for calculating price /////
//   const calculateTotalPrice = (reduxData) => {
//     return reduxData.reduce((totalPrice, orderItem) => {
//       console.log('This is total price : '+totalPrice)
//       const itemTotalPrice = orderItem.price * orderItem.quantity; // Calculate total per item
//       return totalPrice + itemTotalPrice; // Accumulate total price
//     }, 0); // Initial value for accumulator (0)
//   };

//   const [totalPrice, setTotalPrice] = useState(null);
//   useEffect(() => {
//     if (reduxData.cart) {
//       // Check if reduxData exists before calculating
//       const newTotalPrice = calculateTotalPrice(reduxData.cart);
//       setTotalPrice(newTotalPrice);
//       console.log(newTotalPrice);
//     }
//   }, [reduxData.cart]);

  return (
    <ScrollView>
      <Pressable
        // onPress={handleCart}
        // onPress={() => navigation.navigate('Checkout')}
        onPress={() => navigation.navigate('Checkout')}
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <View
            style={{
              fontWeight: "700",
              display: "flex",
              flexDirection: "column",
              width: "50%",

            }}
          >
            <Text
              style={{
                display: "flex",
                flexDirection: "row",
                height: 30,
                fontWeight:700
,
                alignSelf: "flex-start",
                justifyContent: "flex-start",
                alignItems: "flex-start",

                width: "100%",
              }}
            >
              {/* {
                totalPrice === null // Check for null to handle empty initial state
                  ? "Calculating total price..." // Display loading message or placeholder
                  : `Total Price: ${totalPrice.toFixed(2)}
                  `
                // Display calculated total price
              } */}
            </Text>
            
            <Text style={{ width: "100%", fontWeight:700 }}>
              {/* orders: {reduxData.cart?.length} */}
            </Text>
          </View>
          <Text
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: 100,
              height: 50,
              backgroundColor: "lightgray",
              fontWeight:700
            }}
          >
            Checkout
          </Text>
        </View>
      </Pressable>

      {/* {Pdata.map((veg) => { */}
        {/* return ( */}
          <Pressable
            onPress={() => {
              navigation.navigate("ProductPage")
            }}
            // key={veg.id}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "lightgray",
                margin: 2,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* <Image
                //   source={{
                //     uri: `${veg.image}`,
                //   }}
                  style={{ width: 70, height: 70, borderRadius: 10 }}
                /> */}
                <View style={{ marginLeft: 20 }}>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{ fontSize: 16, fontWeight: "bold", width: 120 }}
                  >
                    {/* {veg.name}! */}vegatables
                  </Text>
                  <Text>
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    {/* Price: ${veg.price} */}$30
                    </Text>
                </View>
              </View>
              <View style={{ alignItems: "center", gap: 10 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Text>
                        {/* Qty: {veg.unit} */}1kg
                        </Text>

                    <Text>
                      {/* Qty:{" "}
                      {reduxData.cart[
                        reduxData.cart.findIndex((item) => item.id == veg.id)
                      ] &&
                        reduxData.cart[
                          reduxData.cart.findIndex((item) => item.id == veg.id)
                        ].quantity} */}$150
                    </Text>
                    <Text>
                      {/* Price:
                      {reduxData.cart[
                        reduxData.cart.findIndex((item) => item.id == veg.id)
                      ] &&
                        reduxData.cart[
                          reduxData.cart.findIndex((item) => item.id == veg.id)
                        ].totalPrice} */}$40
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: 10 }}>
                    <TouchableOpacity
                      style={{
                        padding: 10,
                        backgroundColor: "lightgray",
                        borderRadius: 5,
                      }}
                    //   onPress={() => {
                    //     HandleIncrement(veg);
                    //   }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 16,
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
                    //   onPress={() => {
                    //     handleDecrement(veg);
                    //   }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 16,
                          fontWeight: "700",
                        }}
                      >
                        -
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <Text style={{ fontWeight: "700" }}>
                </Text>
              </View>
            </View>
          </Pressable>
        {/* ); */}
    {/* //   })} */}
    </ScrollView>
  );
};

export default ProductsList;

