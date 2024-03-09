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
// import { Entypo } from "@expo/vector-icons";
// import { useRoute, useNavigation } from "@react-navigation/native";

// import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from "../../redux/slice/customerSlice";
// import DropDownPicker from "react-native-dropdown-picker";

const ProductPage = () => {

//   const [quantity, setQuantity] = useState("1");
//   const [selectedType, setSelectedType] = useState("pieces");
//   const [product, setProduct] = useState([]);
//   const route = useRoute();
//   const navigation = useNavigation();
//   console.log(route.params.value);

//   useEffect(() => {
//     setProduct(route.params.value);
//   }, []);

//   const dispatch = useDispatch();
//   const reduxData = useSelector((state) => state.CustomerSlice.cart);

//   const typePrice = {
//     kgs: { price: product.price },
//     gms: { price: product.price / 1000 },
//     pieces: { price: product.price },
//   };

//   const quantityTypes =
//     product.unit === "KG"
//       ? [
//           { label: "KG", value: "kgs" },
//           { label: "Grams", value: "gms" },
//         ]
//       : [{ label: product.unit, value: product.unit }];

//       const handleChangeQuantity = (text) => {
//         console.log("Quantity:", text);
//         setQuantity(text);
//       };
      
//       const handleSelectType = (type) => {
//         console.log("Selected Type:", type);
//         setSelectedType(type);
//       };

  return (
    <View
      style={{
        flexDirection: "column",
        marginVertical: 10,
        padding: 15,
        position: "relative",
        height: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        {/* <Image
          source={{
            uri: product.image,
          }}
          style={{ width: 70, height: 70, borderRadius: 10 }}
        /> */}
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          {/* {product.name} 1 {product.unit} {"\n"}
          Price : ₹ {product.price} */}Apple 1 = $5
        </Text>
      </View>
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
              paddingTop: 15,
              paddingBottom: 6,
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>
              Price
            </Text>
            <Text style={{ color: "black", fontSize: 16, fontWeight: 600 }}>
              {/* {quantity != "" && ( */}
                <Text>
                  {/* {quantity} x {selectedType} : Rs.
                  {Math.ceil(quantity * typePrice[selectedType].price * 1000) /
                    1000} */} 2 * 5 = 10
                </Text>
            {/* //   )} */}
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
              paddingBottom: 10,
            }}
          >
            <Text style={{ color: "black", fontWeight: 500 }}>
              Enter Custom Quantity
            </Text>
            <View style={styles.container}>
              <TextInput
                // value={quantity}
                // onChangeText={handleChangeQuantity}
                placeholder="Enter Quantity"
                keyboardType="numeric"
                style={styles.textInput}
              />
              {/* <DropDownPicker
          items={quantityTypes.map((type) => ({
            label: type.label,
            value: type.value,
          }))}
          defaultValue={selectedType}
          containerStyle={{ height: 40, width: 100, marginTop: 10 }}
          style={{
            backgroundColor: "#fafafa",
            borderBottomColor: "#fff",
            borderTopColor: "#fff",
          }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={(item) => handleSelectType(item.value)}
        /> */}
            </View>
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
        //   onPress={() => {
        //     const data =  dispatch(addToCart(product));
        //   }}
        >
          {/* <Entypo name="plus" size={24} color="white" /> */}
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
          <Text
            style={{ color: "#31572c", fontWeight: 700 }}
            // onPress={() => {
            //   navigation.navigate("Checkout");
            // }}
          >
            Go to cart
          </Text>
          <Text style={{ color: "grey" }}>
            {/* {reduxData.length}  */}2*
            items</Text>
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
