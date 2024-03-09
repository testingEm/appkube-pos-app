// import React from 'react';
// import { View,Text,StyleSheet } from 'react-native';
// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Home Screen </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, Pressable} from 'react-native';
import styles from './styles';
// import { fetchCategories } from "../../Api/FetchProducts";
// import {
// //   FontAwesome5,
// //   AntDesign,
// //   Fontisto,
// } from "@expo/vector-icons";

// import { useNavigation } from "@react-navigation/native";

// import { addOrders} from "../../redux/slice/customerSlice";

import {fetchCategories} from '../../Api/FetchProducts';

import {AddAllProducts} from '../../redux/slice/getAllProductSlice';
import {useDispatch} from 'react-redux';
// import { fetchingOrders } from "../../api/fetchOrders";

const Home = () => {
  const dispatch = useDispatch();

  const [allProducts, setAllProducts] = useState([]);
  const getProduct = async () => {
    try {
      const AllProducts = await fetchCategories();

      setAllProducts(AllProducts.data.listProducts.items);
    } catch (error) {
      console.error(error);
    }
  };

  //   const fetchOrders = async () => {
  //     try {

  //       const response = await fetchingOrders();
  //       const data = response.data.listOrders.items;
  //       console.log("orders data", data);
  //       data.map((value) => {
  //         dispatch(addOrders(value));

  //       });

  //     } catch (error) {
  //       console.log("orders error", error);

  //     }
  //   };

  useEffect(() => {
    getProduct();
    // fetchOrders();
  }, []);

  //   console.log("this is the allProducts for the redux",allProducts);
  dispatch(AddAllProducts(allProducts));

  //   const navigation = useNavigation();

  //   const handleGoToCheckout = () => {
  //     navigation.navigate('Checkout');
  //   };
  //   const handleGoToAdduser = () => {
  //     navigation.navigate('Adduser');
  //   };

  return (
    <View style={[styles.container]}>
      <View style={[styles.header, styles.shadow]}>
        <Text style={[styles.boldText, styles.dark]}>Synectiks Farms</Text>
      </View>

      <Pressable
        style={[styles.box, styles.bgDark]}
        //   onPress={handleGoToAdduser}
      >
        {/* <FontAwesome5 name="user-alt" size={18} color="#d8f3dc" /> */}
        <TouchableOpacity>
          <Text style={[styles.light]}>Add Customer</Text>
        </TouchableOpacity>
      </Pressable>

      <View style={[styles.box, styles.bgDark]}>
        {/* <AntDesign name="plus" size={18} color="#d8f3dc" /> */}
        <Text style={[{textAlign: 'center'}, styles.light]}>
          Add custom sale
        </Text>
      </View>

      <View style={[styles.box, styles.bgLight]}>
        {/* <FontAwesome5 name="percent" size={18} color="#31572c" /> */}
        <Text style={[{textAlign: 'center'}, styles.dark]}>Apply discount</Text>
      </View>
      <View style={[styles.box, styles.bgLight, ,]}>
        {/* <Fontisto name="shopping-basket" size={18} color="#31572c" /> */}
        <Text style={[styles.dark]}>Ship to customer</Text>
      </View>
      <TouchableOpacity
        style={[styles.box, styles.active, {alignSelf: 'flex-start'}]}>
        {/* <AntDesign name="plus" size={20} color="#31572c" /> */}
        <Text style={[styles.dark]}>Add tile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.goToCartButton, styles.bgDark]}

        // onPress={handleGoToCheckout}
      >
        <Text style={[styles.light, styles.boldText]}>Go to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
