import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

const index = () => {
  // const [showShare, setshowShare] = useState(false);
  const navigation = useNavigation();

  // const handleOkClick = () => {
  //   setshowShare(true);
  // };
 const goToOrders = () =>{
    navigation.navigate('Orders');
 
 }
 const goToHome = () =>{
    navigation.navigate('Home');
 
 }
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      
        <View
        //   style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
       
        >
          <Text style={{ color: 'blue' }}>Paid sucessfully</Text>
        </View>
        <Pressable 
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
        onPress={goToHome}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
              Go to Home 
            </Text>
        </Pressable>
        <Pressable 
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
        onPress={goToOrders}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
              Go to Orders
            </Text>
        </Pressable>
        <View style={{ position: 'absolute', bottom: 20,left:30 ,flexDirection:"row",alignItems:"center",gap:40 }}>
          <Text style={{fontSize:16, fontWeight:600}}> <Entypo name="share" size={20
          } color="black" />Share</Text>

          <TextInput style={{
             border: ".5px solid gray",
             padding:6,
             
             
             flexDirection: "column",
            
           
          }} placeholder='please Enter your phone number'></TextInput>
        </View>
      
    </View>
  );
};

export default index;
