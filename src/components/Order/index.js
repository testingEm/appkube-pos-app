import {useRoute,useNavigation} from '@react-navigation/native';
import styles from './styles';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Pressable,
  Alert 
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getProduct } from '../../api/getProduct';

const Order = () => {

  const getProduct1 = async id => {
    console.log('This is id ', id);
    try {
      console.log('product gettting async', id);

      const response = await getProduct(id);
      console.log('getting order response ', response);

      return response;
    } catch (error) {
      console.log('error getting product', error);
    }
  };
  const route = useRoute();
  const navigation = useNavigation();

  const order = route.params.value;
  console.log('order params ', route.params);
  console.log('order data', order);

   const goToCustomers = () => {
    console.log('going to customers to share order',order)


     navigation.navigate('Customers',{order:order});
    //  setReloadScreen(true);
   };

   const HandleUpdate = () => {
    console.log('Going to Cash to update order', {
      totalPrice: order.totalPrice,
      orderId: order.id,
      customerId: order.customerId,
    });
    navigation.navigate('Cash', {
      totalPrice: order.totalPrice,
      orderId: order.id,
      customerId: order.customerId,
    });
  };

  const handleUpdateOrder = async (newStatus) => {
    try {
      // Assuming `updateTotal` and `payment` are obtained or defined elsewhere in your component
      const updateOrderData = {
        id: order.id,
        status: newStatus,
        paymentMethod: order.paymentMethod, // or any other method you are choosing
        // totalPrice: updateTotal, // Ensure this variable is correctly assigned
        // customerId: order.customerId,
      };
      const updatedOrder = await updatingOrder(updateOrderData);
      console.log('Order updated:', updatedOrder);
      // Optionally, navigate back or refresh the order details
      // navigation.goBack();
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const handleUpdateStatus = () => {
    const options = [
      { text: 'CANCEL', onPress: () => handleUpdateOrder('CANCELLED') },
      { text: 'PAID', onPress: () => HandleUpdate('PAID') },
      { text: 'FULFILLED', onPress: () => handleUpdateOrder('FULFILLED') },
    ];

    Alert.alert(
      'Update Order Status',
      'Please select the new status for the order:',
      options
    );
  };

  

  return (
    <View style={[styles.container]}>
      <Text style={{marginBottom: 10, color: 'black'}}>Order Details : </Text>
      <Text style={[styles.textColor]}>
        Order id :<Text style={[styles.valueText]}> #{order.id}</Text>
      </Text>
      <Text style={[styles.textColor]}>
        Order Created at :

        <Text style={[styles.valueText]}> {order.createdAt ? order.createdAt.slice(0, 10) : ''}</Text>
      </Text>

      <Text style={[styles.textColor]}>
        Order Price : <Text style={[styles.valueText]}>{order.totalPrice}</Text>
      </Text>
      <View style={[styles.iconIndicators]}>
        <Pressable style={[styles.statusbar]} onPress={handleUpdateStatus} >
        {/* <Pressable style={[styles.statusbar]} onPress={()=>getProduct1(order.items[1].productId)} > */}
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
