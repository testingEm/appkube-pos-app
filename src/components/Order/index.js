import {useRoute,useNavigation} from '@react-navigation/native';
import styles from './styles';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';

const Order = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const order = route.params.value;
  console.log('order params ', route.params);
  console.log('order data', order);

   const goToCustomers = () => {
    console.log('going to customers to share order',order)
     navigation.navigate('Customers',{data:order});
    //  setReloadScreen(true);
   };
   const HandleUpdate = ()=>{
    console.log('goint to cash to update order',{totalPrice:order.totalPrice,orderId:order.id,CustomerID:order.customerOrdersId})
    navigation.navigate('Cash',{totalPrice:order.totalPrice,orderId:order.id,customerId:order.customerOrdersId})

   }

  return (
    <View style={[styles.container]}>
      <Text style={{marginBottom: 10, color: 'black'}}>Order Details : </Text>
      <Text style={[styles.textColor]}>
        Order id :<Text style={[styles.valueText]}> {order.id}</Text>
      </Text>
      <Text style={[styles.textColor]}>
        Order Created at :
        <Text style={[styles.valueText]}> {order.createdAt}</Text>
      </Text>
      <Text style={[styles.textColor]}>
        Order Price : <Text style={[styles.valueText]}>{order.totalPrice}</Text>
      </Text>
      <View style={[styles.iconIndicators]}>
        <Pressable style={[styles.statusbar]} onPress={HandleUpdate}>
          <FontAwesome name="circle" size={18} color="#31572c" />
          <Text style={{marginLeft: 5, color: 'black'}}>update Status?</Text>
        </Pressable>
        <Pressable style={[styles.statusbar]} onPress={goToCustomers}>
          {/* <FontAwesome name="circle" size={18} color="#31572c" /> */}
          <Icon name="share" size={18} color="#31572c" />
          <Text style={{marginLeft: 5, color: 'black'}}>Share</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Order;
