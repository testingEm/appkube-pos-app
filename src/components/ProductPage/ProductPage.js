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
import { useRoute, useNavigation } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";
import { AddProduct, removeItem } from "../../redux/slice/Product";


const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [piece, setPiece] = useState(1);
  const [quantity, setQuantity] = useState("1");
  const [selectedType, setSelectedType] = useState("pieces");
  const [product, setProduct] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route.params.value);




  useEffect(() => {
    setProduct(route.params.value);
  }, []);



  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.Product);








  //   useEffect(() => {
  //     const fetchProduct = async () => {
  //       try {
  //         // Ensure proper configuration and initialization of Amplify
  //         await Amplify.configure({
  //           API: {
  //             GraphQL: {
  //               endpoint:
  //                 "https://rcvvni5tqzb4lorqzgibgi4wc4.appsync-api.us-east-1.amazonaws.com/graphql",
  //               region: "us-east-1",
  //               defaultAuthMode: "apiKey",
  //               apiKey: "da2-mjccl5jhqvbdvg67pe4sklvwty",
  //             },
  //           },
  //         });

  //         const result = await client.graphql({
  //           query: `
  //   query GetProduct {

  //     getProduct(id: "${}") {
  //       id
  //       image
  //       name
  //       description
  //       price
  //       unit
  //       category
  //       createdAt
  //       updatedAt

  //     }
  //   }
  // `,
  //         });

  //         console.log(result.data.getProduct);
  //         setProduct(result.data.getProduct);
  //       } catch (error) {
  //         console.error("Error fetching product:", error);
  //         // Handle error here
  //       }
  //     };

  //     fetchProduct();
  //   }, []);

  // console.log(products);

  //   useEffect(() => {
  //     const fetchCategories = async () => {
  //       try {
  //         // Ensure proper configuration and initialization of Amplify
  //         await Amplify.configure({
  //           API: {
  //             GraphQL: {
  //               endpoint:
  //                 "https://rcvvni5tqzb4lorqzgibgi4wc4.appsync-api.us-east-1.amazonaws.com/graphql",
  //               region: "us-east-1",
  //               defaultAuthMode: "apiKey",
  //               apiKey: "da2-mjccl5jhqvbdvg67pe4sklvwty",
  //             },
  //           },
  //         });

  //         const result = await client.graphql({
  //           query: `
  //   query GetProduct {
  //     getProduct(id:"1266597030755" ) {
  //       id
  //       image
  //       name
  //       description
  //       price
  //       unit
  //       category
  //       createdAt
  //       updatedAt

  //     }
  //   }
  // `,
  //         });

  //         console.log(result.data.getProduct);
  //         setProducts(result.data.getProduct);
  //         console.log(products);
  //         // console.log(result.data.listProducts.items);
  //         // const categories = result.data.listProducts.items.map(
  //         //   (item) => item.category
  //         // );
  //         // console.log(categories);
  //         // const uniqueCategories = Array.from(new Set(categories));
  //         // console.log(uniqueCategories);

  //         // const products =
  //         //   result.data && result.data.listProducts
  //         //     ? result.data.listProducts.items
  //         //     : [];
  //         // dispatch(setAllProducts(products));

  //         // const uniqueCategories = [
  //         //   ...new Set(products.map((product) => product.category)),
  //         // ];
  //         // setCategories(uniqueCategories);
  //       } catch (error) {
  //         console.error("Error fetching categories:", error);
  //         setError("Error fetching categories");
  //       } finally {
  //         // setLoading(false);
  //         console.log("finally");
  //       }
  //     };

  //     fetchCategories();
  //   }, []);

  const typePrice = {
    // kgs: { price: 50 },
    kgs: { price: product.price },
    gms: { price: product.price / 1000 },
    // gms: { price: 0.3 },
    pieces: { price: product.price },
  };

  const quantityTypes =
    product.unit === "KG"
      ? [
          { label: "KG", value: "kgs" },
          { label: "Grams", value: "gms" },
        ]
      : [{ label: product.unit, value: product.unit }];

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
            uri: product.image,
          }}
          style={{ width: 70, height: 70, borderRadius: 10 }}
        />
        {/* <View style={{ marginLeft: 20 }}> */}
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          {product.name} 1 {product.unit} <br />
          Price : ₹ {product.price}
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
            // setPiece(piece + 1);
            // console.log(cart);
            // cart.push({
            //   name: product.name,
            //   quantityType: selectedType,
            //   quantity: quantity,
            //   price:
            //     Math.ceil(quantity * typePrice[selectedType].price * 1000) /
            //     1000,
            // });
            // console.log(cart);
            const data =  dispatch(AddProduct(product));
            // console.log(data.payload)
            // console.log(data.payload)



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
          // onPress={handleGoToCheckout}
        >
          <Text
            style={{ color: "#31572c", fontWeight: 700 }}
            onPress={() => {
              navigation.navigate("Checkout");
            }}
          >
            Go to cart
          </Text>
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
