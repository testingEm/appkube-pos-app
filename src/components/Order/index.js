//
import {useRoute, useNavigation} from '@react-navigation/native';
import styles from './styles';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Pressable,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getProduct} from '../../api/getProduct';

const Order = () => {
  const [items, setItems] = useState([]);

  const getProduct1 = async (id, quantity) => {
    try {
      const response = await getProduct(id);
      response.quantity = quantity;
      setItems(prevItems => [...prevItems, response]);
      return response; // Return the response for possible further processing
    } catch (error) {
      console.log('error getting product', error);
    }
  };

  const route = useRoute();
  const navigation = useNavigation();

  const order = route.params.value;

  useEffect(() => {
    if (order) {
      order.items.forEach(item => {
        getProduct1(item.productId, item.quantity);
      });
    }
  }, [order]);

  console.log('items ::', items);

  const goToCustomers = () => {
    console.log('going to customers to share order', order);
    navigation.navigate('Customers', {order: order});
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

  const handleUpdateStatus = () => {
    Alert.alert(
      'Update Order Status',
      'Please select the new status for the order:',
      [
        {
          text: 'Cancel Order',
          onPress: () => console.log('Cancel Order pressed'),
        },
        {
          text: 'Paid Order',
          onPress: () => HandleUpdate(),
        },
        {
          text: 'Fulfilled Order',
          onPress: () => console.log('Fulfilled Order pressed'),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 3,
        gap: 10,
        width: '100%',
        justifyContent: 'space-around',
      }}>
      <Image
        source={{
          uri: item?.image,
        }}
        style={{width: 40, height: 41, borderRadius: 50}}
      />
      <Text style={{color: 'black'}}>{item?.name}</Text>
      <Text style={{color: 'black'}}>{item?.quantity}</Text>
      <Text style={{color: 'black'}}>₹ {item?.price}</Text>
      <Text style={{color: 'black'}}>{item?.unit}</Text>
    </View>
  );

  return (
    <View>
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
          Order Price :{' '}
          <Text style={[styles.valueText]}>{order.totalPrice}</Text>
        </Text>
        <View style={[styles.iconIndicators]}>
          <Pressable
            style={[styles.statusbar]}
            // onPress={() => getProduct1(order.items[1]?.productId)}
            onPress={handleUpdateStatus}>
            <FontAwesome name="circle" size={18} color="#31572c" />
            <Text style={{marginLeft: 5, color: 'black'}}>update Status?</Text>
          </Pressable>
          <Pressable style={[styles.statusbar]} onPress={goToCustomers}>
            <Icon name="share" size={18} color="#31572c" />
            <Text style={{marginLeft: 5, color: 'black'}}>Share</Text>
          </Pressable>
        </View>
      </View>
      {/* <ScrollView>
        <View> */}
      <FlatList
        style={{width: '100%'}}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* </View>
      </ScrollView> */}
    </View>
  );
};

export default Order;
