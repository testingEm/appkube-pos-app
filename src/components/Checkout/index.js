import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, Pressable, Image} from "react-native";
import { useSelector, useDispatch } from 'react-native';
// import { startNewOrder } from '../../redux/actions';
// import { DataStore } from "@aws-amplify/datastore";
// import styles from './styles';

// import { AntDesign } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import { View, Text, Pressable } from 'react-native';
const Checkout = () => {
    
    
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
      <AntDesign name="close" size={30} color="blue" />
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
        <Text style={{  fontSize: "20px", fontWeight: "700" }}>
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
      <div style={{justifyContent:'space-between',width:'100%'}}>
        <View style={{ marginTop: 60 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <View style={{}}>
            <View style={{flexDirection: "row",alignItems:"center" , gap:20}} >
                <View>
                <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
                }}
                style={{ width: 70, height: 70, borderRadius: 10 }}
              />
                </View>
                <View>
              <Text style={{  fontSize: 16 }}>Pumpkin(1kg)</Text>
              <Text style={{  fontSize: 16 }}>Tax-exempt</Text>
              </View>
              </View>
            </View>
            <View style={{ fontSize: 16 }}>
              {/* <FontAwesome name="rupee" size={24} color="black" /> */}
              ₹ 40.00
            </View>
          </View>
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
              <Text style={{  fontSize: 16 }}>Subtotal</Text>
            </View>
            <View style={{ fontSize: 16 }}>
              {/* <FontAwesome name="rupee" size={24} color="black" /> */}
              40.00
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
              <Text style={{  fontSize: 16, marginTop:10 }}>Taxes</Text>
            </View>
            <View style={{ fontSize: 16 }}>
           ₹ 0.00
            </View>
          </View>
        </View>
    
        <View style={{ marginTop: 130,position:'absolute',bottom:10,width:'95%',gap:10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            
            <View>
              <Text style={{ fontSize: 16 }}>Total</Text>
              <Text style={{ fontSize: 16 }}>1 Item</Text>
            </View>
            <View>
              {/* <FontAwesome name="rupee" size={24}  /> */}
              <Text style={{ marginLeft: 5, fontSize: 16 }}>
              ₹ 40.00
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