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
     navigation.navigate('Customers');
    //  setReloadScreen(true);
   };

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
        <View style={[styles.statusbar]}>
          <FontAwesome name="circle" size={18} color="#31572c" />
          <Text style={{marginLeft: 5, color: 'black'}}>Paid</Text>
        </View>
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
