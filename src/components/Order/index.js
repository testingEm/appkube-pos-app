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
      <Text style={{color: 'black', textAlign: 'center', width: 100}}>
        {item?.name}
      </Text>
      <Text style={{color: 'black', textAlign: 'center', width: 10}}>
        {item?.quantity}
      </Text>
      <Text style={{color: 'black', textAlign: 'center', width: 30}}>
        ₹ {item?.price}
      </Text>
      <Text style={{color: 'black', textAlign: 'center', width: 50}}>
        {item?.unit}
      </Text>
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
      {items && (
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: 5,
              backgroundColor: '#DDDDDD',
              padding: 5,
            }}>
            <Text style={{color: 'black', textAlign: 'center'}}>Image</Text>
            <Text style={{color: 'black', textAlign: 'center'}}>Name</Text>
            <Text style={{color: 'black', textAlign: 'center'}}>Quantity</Text>
            <Text style={{color: 'black', textAlign: 'center'}}>Price</Text>
            <Text style={{color: 'black', textAlign: 'center'}}>Unit</Text>
          </View>
          <FlatList
            style={{width: '100%'}}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      )}
    </View>
  );
};

export default Order;
