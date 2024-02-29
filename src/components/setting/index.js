import React from 'react'
import { Text, View, Button,TouchableOpacity } from 'react-native';
import styles from './styles';
import {Ionicons,AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const setting = () => {

    const navigation = useNavigation();

  const navigateToCustomer = () => {
    navigation.navigate('Customers');
  };

    const Customer = () => (
        <View>
          <TouchableOpacity style={[styles.flexRow, styles.box,styles.bgLight,styles.gap]} onPress={navigateToCustomer} >
            <View style={[styles.flexRow]}  >
                <Ionicons name="ios-person" size={20} color="black" />
                <Text>Customer</Text>
            </View>
            <AntDesign name="rightcircleo" size={24} color="black" />

          </TouchableOpacity>
        </View>
      );
    

  return (
   <View>
    <Customer/>
   </View>
  )
}

export default setting