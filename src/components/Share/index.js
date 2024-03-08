
import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";


const Share = () => {
  // const [showShare, setshowShare] = useState(false);
 

  const navigation = useNavigation();
  const [reloadScreen, setReloadScreen] = useState(false); // State to trigger screen reload


  // const handleOkClick = () => {
  //   setshowShare(true);
  // };



  // const goToOrders = () => {
  //   navigation.navigate("Orders");
  // };

  const goToHome = () => {
    navigation.navigate("Home");
     setReloadScreen(true);
  };
  const goToCustomers = () => {
    navigation.navigate("Customers");
     setReloadScreen(true);
  };

  return (
    // <View style={[styles.wrapper]}>
      <View style={[styles.container]}>
     
     <Text style={[styles.boldText,styles.dark,styles.shadow]}>Paid sucessfully</Text>
   {/*
   <Pressable
     style={{ backgroundColor: "blue", padding: 10, borderRadius: 5 }}
     onPress={goToOrders}
   >
     <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
       Go to Orders
     </Text>
   </Pressable> */}
   <View
     style={[styles.btns]}
   >
     
     <Pressable
     style={[styles.bgLight,styles.btn]}
     onPress={goToHome}
   >
       <Text style={[styles.dark,styles.font]}>Ok</Text>
    
   </Pressable>
   <Pressable style={[styles.btn,styles.bgDark,]} onPress={goToCustomers}>
      
       <Entypo name="share" size={20} color="#d8f3dc" />
       <Text style={[styles.light,styles.font]}>Share</Text>
     </Pressable>

     {/* <TextInput
       style={{
         border: ".5px solid gray",
         padding: 6,

         flexDirection: "column",
       }}
       placeholder="please Enter your phone number"
     ></TextInput> */}
   </View>
 </View>
   
  );
};

export default Share;