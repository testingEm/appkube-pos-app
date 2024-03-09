import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
// import {
//   Ionicons,
//   FontAwesome5,
//   AntDesign,
//   Fontisto,
// } from "@expo/vector-icons";
import styles from './styles';

const Products = () => {
  const navigation = useNavigation();
  const ProductsData = useSelector(start => start.getAllProducts);

  //   console.log("redux in products page in the product page",ProductsData,typeof(ProductsData));

  const [GetProduct, setGetProducts] = useState([...ProductsData]);

  const uniqueCategoriesSet = new Set();

  GetProduct.forEach(item => {
    if (item && item.category) {
      uniqueCategoriesSet.add(item.category);
    }
  });

  const uniqueCategoriesArray = Array.from(uniqueCategoriesSet);

  const BodyButton = () => (
    <View style={{padding: 10}}>
      {uniqueCategoriesArray.map(category => (
        <Pressable
          key={category}
          onPress={() => {
            const CatProducts = GetProduct.filter(e => e.category === category);
            console.log(CatProducts);
            navigation.navigate('getAllProducts', {
              category,
              catProducts: CatProducts,
            });
          }}
          style={[styles.flexRow, styles.box, styles.bgLight]}>
          <Text>{category}</Text>
          <Ionicons name="ios-cart" size={20} color="black" />
        </Pressable>
      ))}
    </View>
  );

  return (
    <View style={{padding:5}}>
      {/* <Pressable
        onPress={() => navigation.navigate('ProductsList')}
        style={[styles.flexRow, styles.box, styles.bgLight]}>
        <Text>Frutes</Text>
        <Ionicons name="ios-cart" size={20} color="black" />
      </Pressable> */}
      <BodyButton />
    </View>
  );
};

export default Products;
