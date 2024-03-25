import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, Pressable} from 'react-native';
import styles from './styles';
// import { fetchCategories } from "../../Api/FetchProducts";
// import {
//   FontAwesome5,
// //   AntDesign,
// //   Fontisto,
// } from "@expo/vector-icons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';


import {useNavigation} from '@react-navigation/native';

import { fetchCategories } from '../../api/fetchProducts';
import {addOrders, addCustomer} from '../../redux/slice/customerSlice';

import {AddAllProducts} from '../../redux/slice/getAllProductSlice';
import {useDispatch} from 'react-redux';
import { fetchingOrders } from '../../api/fetchOrders';
import { fetchingCustomers } from '../../api/fetchCustomers';
const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();


  const getProduct = async () => {
    try {
      const AllProducts = await fetchCategories();
      const Products = AllProducts.data.listProducts.items;
      dispatch(AddAllProducts(Products));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOrders = async () => {
    try {
      console.log('calling fetching');
      const response = await fetchingOrders();
      console.log('after fetching');
      const data = response.data.listOrders.items;
      console.log('orders data', data);
      data.map(value => {
        console.log('order vakue', value);
        dispatch(addOrders(value));
      });
    } catch (error) {
      console.log('orders error', error);
    }
  };
  const fetchCustomers = async () => {
    try {
      console.log('calling fetching');
      const response = await fetchingCustomers();
      console.log('after fetching');
      const data = response;
      console.log('customers data', data);
      data.map(value => {
        console.log('customer value', value);
        dispatch(addCustomer(value));
      });
    } catch (error) {
      console.log('orders error', error);
    }
  };

  useEffect(() => {
    getProduct();
    fetchOrders();
    fetchCustomers();
  }, []);


  const handleGoToCheckout = () => {
    navigation.navigate('Checkout');
  };
  const handleGoToAdduser = () => {
    navigation.navigate('Adduser');
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.header, styles.shadow]}>
        <Text style={[styles.boldText, styles.dark]}>Synectiks Farms</Text>
      </View>

      <Pressable
        style={[styles.box, styles.bgDark]}
        onPress={handleGoToAdduser}>
        <FontAwesome5 name="user-alt" size={18} color="#d8f3dc" />
        <TouchableOpacity>
          <Text style={[styles.light]}>Add Customer</Text>
        </TouchableOpacity>
      </Pressable>

      <View style={[styles.box, styles.bgDark]}>
        <AntDesign name="plus" size={18} color="#d8f3dc" />
        <Text style={[{textAlign: 'center'}, styles.light]}>
          Add custom sale
        </Text>
      </View>

      <View style={[styles.box, styles.bgLight]}>
        <FontAwesome5 name="percent" size={18} color="#31572c" />
        <Text style={[{textAlign: 'center'}, styles.dark]}>Apply discount {' '}</Text>
      </View>
      <View style={[styles.box, styles.bgLight, ,]}>
        <Fontisto name="shopping-basket" size={18} color="#31572c" />
        <Text style={[styles.dark]}>Ship to customer</Text>
      </View>
      <TouchableOpacity
        style={[styles.box, styles.active, {alignSelf: 'flex-start'}]}>
        <AntDesign name="plus" size={20} color="#31572c" />
        <Text style={[styles.dark]}>Add tile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.goToCartButton, styles.bgDark]}
        onPress={handleGoToCheckout}>
        <Text style={[styles.light, styles.boldText]}>Go to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;











// ---------------------------login page----------------------------------------



// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';


// const LoginScreen = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3D5AFE' }}>
//       <View style={{ width: 300, borderRadius: 10, padding: 30, backgroundColor: '#FFF', shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 10, elevation: 5 }}>

//         <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10, color: '#000' }}>Log in</Text>
//         <Text style={{ fontSize: 16, color: '#616161', marginBottom: 10 }}>Synectiks Farms</Text>

//         <View style={{ marginBottom: 10 }}>
//           <Text style={{ fontSize: 14, color: '#616161' }}>Mobile Number</Text>
//           <TextInput
//             placeholder="user email"
//             style={{ borderWidth: 1, borderColor: '#999', borderRadius: 5, padding: 7 }}
//           />
//         </View>

//         <TouchableOpacity style={{ backgroundColor: '#303030', borderRadius: 5, padding: 10, alignItems: 'center' }}>
//           <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Continue with number</Text>
//         </TouchableOpacity>

//         <Text style={{ textAlign: 'center', marginTop: 20 }}>or</Text>

       

//         <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#005db3', }}>New to Synectiks Farms? <Text style={{ fontWeight: 'normal', color: '#FFF' }}>Get started --</Text></Text>

//         <View style={{ flexDirection: 'row', marginTop: 5 }}>
//           <Text style={{ marginRight: 10, color: '#616161' }}>Help</Text>
//           <Text style={{ marginRight: 10, color: '#616161' }}>Privacy</Text>
//           <Text style={{ color: '#616161' }}>Terms</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default LoginScreen;







//---------------------------another Account-------------------
// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// const Page = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
//       <View style={{ borderWidth: 1, borderColor: '#000', borderRadius: 10, padding: 20, width: '90%', marginBottom: 20 }}>
//         <View>
//           {/* <Text style={{ width: 100, height: 100, backgroundColor: '#ccc', marginBottom: 10 }}>Image</Text> */}
//         </View>
//         <View>
//           <Text style={{ fontSize: 24, fontWeight: 'bold',color:"black" }}>Create a Synectiks Account</Text>
//           <Text style={{ fontSize: 16, color: '#616161', marginBottom: 10 }}>One last step before starting your free trial.</Text>
//         </View>
//         <View>
//           <Text style={{color:"black"}}>Mobile Number</Text>
//           <TextInput style={{ borderWidth: 1, borderColor: '#000', borderRadius: 5, padding: 10, marginBottom: 10 }} placeholder="Enter your email" />
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
//             <View style={{ flex: 1 }}>
//               <Text style={{color:"black"}}>First Name</Text>
//               <TextInput style={{ borderWidth: 1, borderColor: '#000', borderRadius: 5, padding: 10, marginBottom: 10 }} placeholder="Enter your first name" />
//             </View>
//             <View style={{ flex: 1, marginLeft: 10 }}>
//               <Text style={{color:"black"}}>Last Name</Text>
//               <TextInput style={{ borderWidth: 1, borderColor: '#000', borderRadius: 5, padding: 10, marginBottom: 10 }} placeholder="Enter your last name" />
//             </View>
//           </View>
//           <Text style={{ fontSize: 12, color: '#616161', marginBottom: 10 }}>Enter your first and last name as they appear on your government-issued ID.</Text>
//           <TextInput style={{ borderWidth: 1, borderColor: '#000', borderRadius: 5, padding: 10, marginBottom: 10 }} placeholder="Password" />
//           <TextInput style={{ borderWidth: 1, borderColor: '#000', borderRadius: 5, padding: 10, marginBottom: 10 }} placeholder="Confirm new Password" />
//           <TouchableOpacity style={{ backgroundColor: '#303030', borderRadius: 5, padding: 10, alignItems: 'center', marginBottom: 10 }}>
//             <Text style={{ color: 'white', fontWeight: 'bold' }}>Create Synectiks Farms Account</Text>
//           </TouchableOpacity>
//           <Text style={{ textAlign: 'center', marginTop: 10,color:"black" }}>Already have a Shopify account? <Text style={{ color: '#005bd3', fontWeight: 'bold' }}>Log in</Text></Text>
//           <Text style={{ textAlign: 'center', marginTop: 10,color:"black" }}>By proceeding, you agree to the <Text style={{ color: '#005bd3', fontWeight: 'bold' }}>Terms and Conditions</Text> and <Text style={{ color: '#005bd3', fontWeight: 'bold' }}>Privacy Policy</Text></Text>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
//             <Text style={{ color: '#616161', textDecorationLine: 'underline' }}>Help</Text>
//             <Text style={{ color: '#616161', textDecorationLine: 'underline' }}>Privacy</Text>
//             <Text style={{ color: '#616161', textDecorationLine: 'underline' }}>Terms</Text>
//           </View>
//         </View>
//       </View>
//     </View>

//   );
// };

// export default Page;



// -----------------------otp--------------------------------------------


// import React, { useState, useRef, useEffect } from "react";
// import { View, Text, TextInput, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";


// const Page = () => {
//   const navigation = useNavigation();
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const inputRefs = useRef([]);
 

//   useEffect(() => {
//     inputRefs.current[0]?.focus();
//   }, []);

//   const handleInputChange = (index, value) => {
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value.length === 1 && index < otp.length - 1) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.nativeEvent.key === "ArrowRight" && index < otp.length - 1) {
//       inputRefs.current[index + 1]?.focus();
//     } else if (e.nativeEvent.key === "ArrowLeft" && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     } else if (e.nativeEvent.key === "ArrowRight" && index === otp.length - 1) {
//       inputRefs.current[0]?.focus();
//     } else if (e.nativeEvent.key === "ArrowLeft" && index === 0) {
//       inputRefs.current[otp.length - 1]?.focus();
//     }else if (e.nativeEvent.key === "Backspace" && index > 0 && otp[index] === "") {
//       // Move focus to the previous input if backspace is pressed and current input is empty
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         {/* <View style={{ marginLeft: 5 }}> */}
//           <Text style={{ fontWeight: "bold", fontSize: 20 ,color:"black"}}>Enter OTP</Text>
//           <Text style={{ color: "#A2A1A8", fontSize: 14 }}>We have shared a code to your registered Mobile Number</Text>
          
//           <View style={{ flexDirection: "row", marginTop: 20 }}>
//             {otp.map((value, index) => (
//               <TextInput
//                 key={index}
//                 style={{ borderWidth: 1, borderColor: "#000", borderRadius: 5, padding: 10, width: 40, textAlign: "center", marginHorizontal: 5 ,color:"black"}}
//                 maxLength={1}
//                 value={otp[index]}
//                 onChangeText={(text) => handleInputChange(index, text)}
//                 onFocus={() => inputRefs.current[index].focus()}
//                 ref={(ref) => (inputRefs.current[index] = ref)}
//                 onKeyPress={(e) => handleKeyDown(e, index)}
//               />
//             ))}
//           </View>
//           <TouchableOpacity
//             style={{ backgroundColor: "blue", padding: 10, marginTop: 20, width: 200, borderRadius: 5, justifyContent: "center", alignItems: "center" }}
//             onPress={() => {
//               if (otp.some((item) => item === "" || item === undefined)) {
//                 alert("Invalid Otp");
//               } else {
//                 // dispatch(setOtp(otp.join("")));
//                 navigation.navigate("NewPassword");
//               }
//             }}
//           >
//             <Text style={{ color: "white", fontWeight: "bold" }}>Verify</Text>
//           </TouchableOpacity>
//       {/* </View> */}
//     </View>
//   );
// };

// export default Page;






