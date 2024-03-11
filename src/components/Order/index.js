import {View, Text, Pressable} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from './styles';
// import {FontAwesome, FontAwesome5} from '@expo/vector-icons';
// import {Feather} from '@expo/vector-icons';
import React from 'react';

const Order = () => {
  const route = useRoute();
  console.log('order params ', route.params);
  const order = route.params.value;
  console.log('order data', order);

  return (
    <View>
      <View
        style={{
          height: 60,
          padding: 10,
          backgroundColor: '#31572c',
          color: 'blue',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'blue'}}>Order</Text>
      </View>
     
        <Pressable style={[styles.box, styles.shadow]}>
          <View style={[{flex: 1}, styles.gap]}>
            <Text style={{fontWeight: 500, fontSize: 16, color: 'blue'}}>
              {/* {order.createdAt} */}
            </Text>
            <View style={[styles.border]} />
            <View style={[styles.gap]}>
              <Text style={{fontSize: 16, color: 'blue'}}>
                {/* #{order.__typename} id : */}
              </Text>
              <Text style={{color: 'blue'}}>{order.id}</Text>
              <Text
                style={{
                  fontSize: 18,
                  color: '#31572c',
                  flex: 1,
                  fontWeight: '700',
                }}>
                {/* <FontAwesome
                name="rupee"
                size={18}
                color="#31572c"
                style={{marginRight: 5}}
              /> */}
                {/* Total : {order.totalPrice} */}
              </Text>
            </View>
            <View style={[styles.arrowbox, {margin: 5}, {marginBottom: 20}]}>
              <Text>No Customer </Text>
              {/* <FontAwesome5 name="angle-right" size={26} color="black" /> */}
            </View>
          </View>
          <View style={[styles.status]}>
            <View style={[styles.statusbox]}>
              {/* <FontAwesome
              name="circle"
              size={18}
              color="#31572c"
              // style={{ margin: 0 }}
            /> */}
              <Text style={{marginLeft: 5}}>paid</Text>
            </View>
            <Pressable style={[styles.statusbox]}>
              {/* <Feather name="share-2" size={24} color="black" /> */}

              <Text style={{marginLeft: 5}}>Share</Text>
            </Pressable>
          </View>
        </Pressable>
     
    </View>
    // <View>
    //   <Text style={{color: 'black'}}>Order : {order.id}</Text>
    //   <Text>{order.totalPrice}</Text>
    // </View>
  );
};

export default Order;
