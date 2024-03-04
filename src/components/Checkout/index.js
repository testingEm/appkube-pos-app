import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, Pressable, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { clearCart } from "../../redux/slice/Product";

// import  { Product } from  "../../redux/store";

// import { startNewOrder } from '../../redux/actions';
// import { DataStore } from "@aws-amplify/datastore";
// import styles from './styles';

// import { AntDesign } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import { View, Text, Pressable } from 'react-native';
const Checkout = () => {

  const navigation = useNavigation()

  const handleGoToCheckout = () => {
    navigation.goBack()
  }
  // const dispatch=useDispatch() 

  const checkout = useSelector((state) => state.Product.Data)
  console.log(checkout)
  // console.log(checkout.Data)
  // console.log(checkout.Data[0].name)
  const subtotal = checkout
    .filter(item => item && typeof item.price === 'number')
    .reduce((acc, curr) => acc + curr.price, 0);
  console.log(subtotal)
  const ItemAdd = checkout.length
  console.log(ItemAdd)
  // const dispatch=useDispatch()

  // const handleDelete = () => {
  //   clearCart(); 
  // };
  // console.log(handleDelete())

  return (
    <div
      style={{


        padding: 10,
        height: "100%",
        flex: 1,
        justifyContent: "center",
        position: "relative",
      }}
    >
      <AntDesign name="close" size={30} color="blue" onPress={handleGoToCheckout} />
      <View
        style={{
          borderBottomColor: "lightgray",
          borderBottomWidth: 1,
          marginVertical: 10, // Adjust as needed
          color: "white",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          marginTop: 40,
        }}
      >
        <Text style={{ fontSize: "20px", fontWeight: "700" }}>
          Cart
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "50%",
            padding: 6,
            backgroundColor: "pink",
          }}
        >
          <AntDesign name="delete" size={18} color="red" />
        </View>
      </View>
      <div style={{ justifyContent: 'space-between', width: '100%' }}>
        <View style={{ marginTop: 60 }}>
          {checkout.map((e) => (

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                alignItems: "center",
              }}
            >
              <View style={{}}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }} >
                  <View>
                    <Image
                      source={{
                        uri: e.image,
                      }}
                      style={{ width: 70, height: 70, borderRadius: 10 }}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 16 }}>{e.name}</Text>
                    <Text style={{ fontSize: 16 }}>Tax-exempt</Text>
                  </View>
                </View>
              </View>
              <View style={{ fontSize: 16 }}>
                {/* <FontAwesome name="rupee" size={24} color="black" /> */}

                <Text>  ₹ {e.price} </Text>
              </View>
            </View>
          ))}
          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginVertical: 10, // Adjust as needed

            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontSize: 16 }}>Subtotal</Text>
            </View>
            <View style={{ fontSize: 16 }}>
              {/* <FontAwesome name="rupee" size={24} color="black" /> */}
              <Text> {subtotal}</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginVertical: 10, // Adjust as needed

              alignItems: "center",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <View>
              <Text style={{ fontSize: 16, marginTop: 10 }}>Taxes</Text>
            </View>
            <View style={{ fontSize: 16 }}>
              <Text>  ₹ 0.00</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 130, position: 'absolute', bottom: 10, width: '95%', gap: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >

            <View>
              <Text style={{ fontSize: 16 }}>Total</Text>
              <Text style={{ fontSize: 16 }}>{ItemAdd} Item</Text>
            </View>
            <View>
              {/* <FontAwesome name="rupee" size={24}  /> */}
              <Text style={{ marginLeft: 5, fontSize: 16 }}>
                ₹ {subtotal}
              </Text>
            </View>
          </View>
          <Pressable
            style={{ padding: 10, backgroundColor: "blue", borderRadius: 5 }}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
              Checkout
             
            </Text>
          </Pressable>
        </View>
      </div>
    </div>
  );
};

export default Checkout;