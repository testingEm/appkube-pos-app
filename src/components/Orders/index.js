import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, ActivityIndicator } from "react-native";
// import { Container, Content } from 'react-native';
// // import { DataStore } from '@aws-amplify/datastore';
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
// import { Header } from "react-native/Libraries/NewAppScreen";
import { handleApi } from "../../api/fetchOrders";
import styles from "./styles";
const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try{
      const data = await handleApi();
      console.log('data',data.data)
      setOrders(data.data.listOrders.items);
    }
    catch(error){
      console.log('error',error)
    }
  
  };
  useEffect(() => {
    console.log('useeffect')
    fetchOrders();
  }, []);

  //   // async function refetch() {
  //   //     const data = await DataStore.query(Orders);
  //   //     const sortedOrders = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  //   //     setOrders(sortedOrders);
  //   // }

  //   // async function openReceipt(orderId) {
  //   //     const order = await DataStore.query(Orders, orderId);
  //   //     const allItems = await DataStore.query(lineItems);
  //   //     const lineItems = allItems.filter(li => li.order && li.order.id === order.id);
  //   //     return props.navigation.push('Receipt', {
  //   //         order: {
  //   //             ...order,
  //   //             lineItems,
  //   //         }
  //   //     });
  //   // }

  return (
    <View style={[styles.container]}>
      {/* <Content refreshControl={
                <RefreshControl
                    onRefresh={refetch}
                    refreshing={loading}
                />
            }>
                <OrderList orders={orders} onSelectOrder={openReceipt} />
            </Content> */}
      <View style={{ width: "100%", height: "20%" }}>
        <View
          style={[
            styles.header,
            styles.bgDark,
            styles.light,
            styles.boldText,
            styles.shadow,
          ]}
        >
          Orders
        </View>
        <View style={[styles.scrollLeft, styles.shadow]}>
          <View style={[styles.statusbox]}>
            Sale type : POS{" "}
            <FontAwesome name="caret-down" size={18} color="#31572c" />
          </View>
          <View style={[styles.statusbox]}>
            <Text>Sale Location: Synectiks</Text>
            <FontAwesome name="caret-down" size={18} color="#31572c" />
          </View>
        </View>
      </View>
      <ScrollView style={[styles.scrollbar]}>
        {console.log('in scrool')}
        {(orders.length <= 0) ? (
          <ActivityIndicator size="large"  color='green' ></ActivityIndicator>
          // <Text>Loading...
          //   {console.log('loading')}
          // </Text>
          
        ) : (
          // console.log('in order')
          orders.map((order) => {
            return (<View style={[styles.box, styles.shadow]} key={order.id}>
              <View style={[{ flex: 1 }, styles.gap]}>
                <Text style={{ fontWeight: 500, fontSize: 16, color: "gray" }}>
                  {order.createdAt}
                </Text>
                <View style={[styles.border]}></View>
                <View style={[styles.gap]}>
                  <Text style={{ fontSize: 16 }}>#3728</Text>
                  <Text style={{ fontSize: 14 }}>
                    <FontAwesome name="rupee" size={14} color="black" />
                    {order.totalPrice}
                  </Text>
                </View>
                <View style={[styles.arrowbox, { margin: 5 }]}>
                  No Customer{" "}
                  <FontAwesome5 name="angle-right" size={26} color="black" />
                </View>
              </View>
              <View style={[styles.status]}>
                <View style={[styles.statusbox]}>
                  <FontAwesome
                    name="circle"
                    size={18}
                    color="black"
                    style={{ margin: 0 }}
                  />
                  <Text style={{ marginLeft: 5 }}>{order.updatedAt}</Text>
                </View>
                <View style={[styles.statusbox]}>
                  <FontAwesome name="circle" size={18} color="#31572c" />
                  <Text style={{ marginLeft: 5 }}>Fullfilled</Text>
                </View>
              </View>
            </View>)  
          })
        )}
        {console.log('scrool ended')}
      </ScrollView>
    </View>
  );
};

export default Orders;