import React from "react";

import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Catalog from "./Catalog";
// import { fetchProducts } from "../fetchProducts";

import {  useState,useEffect, } from "react";
// import { generateClient } from 'aws-amplify/api';
import { generateClient } from "aws-amplify/api";

import { Amplify } from "aws-amplify";


const GetAllProducts = () => {

  const client = generateClient();
  // const data =  fetchProducts().then((e)=>{console.log(e)})


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Ensure proper configuration and initialization of Amplify
        await Amplify.configure({
          API: {
            GraphQL: {
              endpoint: 'https://rcvvni5tqzb4lorqzgibgi4wc4.appsync-api.us-east-1.amazonaws.com/graphql',
              region: 'us-east-1',
              defaultAuthMode: 'apiKey',
              apiKey: 'da2-mjccl5jhqvbdvg67pe4sklvwty'
            }
          }
        });

        const result = await client.graphql({
          query: `
            query ListProducts {
              listProducts {
                items {
                  id
                  image
                  name
                  price
                  unit
                  category
                }
              }
            }
          `,
        });

        console.log(result)
        setData(result.data.listProducts.items)

      }
      catch(error){
          console.log(error)
      }
    }
  fetchCategories()

  },[Data])
  const [Data, setData] = useState([])


  console.log(Data)

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

  const handleProduct = (id) => {
    console.log("navigate to product");
    navigation.navigate("ProductPage",{id});
    console.log("navigate to product 2");
  };
  


  

  return (
    // <div>
      // <div className="flex flex-col">
      <ScrollView>
     { Data.map((veg)=>{

        return(
          
        <TouchableOpacity onPress={()=>{handleProduct(veg.id)}}>
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
                  uri: `${veg.image}`,
                }}
                style={{ width: 70, height: 70, borderRadius: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{veg.name}!</Text>
                <Text>Price: ${veg.price}</Text>
              </View>
            </View>
            <View style={{ alignItems: "center", gap: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>Qty: {veg.unit}</Text>
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
        </TouchableOpacity>)

      })
    }
    </ScrollView>
      
  );
};

export default GetAllProducts;