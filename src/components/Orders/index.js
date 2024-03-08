import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
// import { Container, Content } from 'react-native';
// // import { DataStore } from '@aws-amplify/datastore';
// import { Header } from "react-native/Libraries/NewAppScreen";
import { fetchingOrders } from "../../api/fetchOrders";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addOrders } from "../../redux/slice/customerSlice";

const Orders = () => {
  // const [loading, setLoading] = useState(true);
  // const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const fetchedOrders = useSelector((state) => state.CustomerSlice.orders);

  // const fetchOrders = async () => {
  //   try {
  //     // setLoading(true);
  //     const response = await fetchingOrders();
  //     const data = response.data.listOrders.items;
  //     console.log("orders data", data);
  //     data.map((value) => {
  //       dispatch(addOrders(value));
  //       // console.log("dispatching value", value);
  //     });
  //     // setLoading(false);
  //   } catch (error) {
  //     console.log("orders error", error);
  //     // setLoading(false)
  //   }
  // };
  console.log("fetched orders", fetchedOrders);

  // useEffect(() => {
  //   console.log("useEffect");
  //   fetchOrders();
  // }, []);

  // createdAt: "2024-03-04T10:03:04.791Z";
  // id: "f1b6db8a-112d-449c-a3d5-a7a4608313ce";
  // totalPrice: 45;
  // updatedAt: "2024-03-04T10:03:04.791Z";
  // __typename: "Order";
  // _deleted: null;
  // _lastChangedAt: 1709546584820;
  // _version: 1;
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
          <Text style={{ color: "white", fontSize: 16 }}>

            Orders
          </Text>
        </View>
        <View style={[styles.scrollLeft, styles.shadow]}>
          <View style={[styles.statusbox]}>
            <Text >

              Sale type : POS{" "}
            </Text>
            <FontAwesome name="caret-down" size={18} color="#31572c" />
          </View>
          <View style={[styles.statusbox]}>
            <Text>Sale Location: Synectiks</Text>
            <FontAwesome name="caret-down" size={18} color="#31572c" />
          </View>
        </View>
      </View>
      <ScrollView style={[styles.scrollbar]}>
        {console.log("in scrool")}

        {fetchedOrders.map((order, index) => {
          return (
            <View style={[styles.box, styles.shadow]} key={index}>
              <View style={[{ flex: 1 }, styles.gap]}>
                <Text
                  style={{ fontWeight: 500, fontSize: 16, color: "gray" }}
                >
                  {order.createdAt}
                </Text>
                <View style={[styles.border]}></View>
                <View style={[styles.gap]}>
                  <Text style={{ fontSize: 16 }}>#{order.__typename}</Text>
                  <Text style={{ fontSize: 18, color: '#31572c', flex: 1, fontWeight: "700" }}>
                    <FontAwesome name="rupee" size={18} color="#31572c" style={{ marginRight: 5 }} />
                    {order.totalPrice}
                  </Text>
                </View>
                <View style={[styles.arrowbox, { margin: 5 }]}>
                  <Text>

                    No Customer{" "}
                  </Text>
                  <FontAwesome5 name="angle-right" size={26} color="black" />
                </View>
              </View>
              <View style={[styles.status]}>
                <View style={[styles.statusbox]}>
                  <FontAwesome
                    name="circle"
                    size={18}
                    color="#31572c"
                  // style={{ margin: 0 }}
                  />
                  <Text style={{ marginLeft: 5 }}>paid</Text>
                </View>
                <View style={[styles.statusbox]}>
                  <FontAwesome name="circle" size={18} color="#31572c" />
                  <Text style={{ marginLeft: 5 }}>Fullfilled</Text>
                </View>
              </View>
            </View>
          )
        })
        }
        {console.log("scrool ended")}
      </ScrollView>
    </View>
  );
};

export default Orders;
