import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import styles from '../Category/styles';
// import { View, Text } from 'react-native'
// import React from 'react'
import { Amplify,API } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

import { useEffect } from 'react';
import getAllProducts from '../getAllProducts';
import {
  Ionicons,
  FontAwesome5,
  AntDesign,
  Fontisto,
} from "@expo/vector-icons";
import styles from './styles';
import fetchPro from '../Products/fetchPro';

const Products = () => {
  // const [data, setData] = useState([])
  const navigation = useNavigation();

  const navigateToCatalog = () => {
    navigation.navigate('Catalog');
  };

  // const navigateTogetAllProducts = () => {
  //   navigation.navigate('getAllProducts');

  // };


const client = generateClient();

// const Products = () => {
  const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const dispatch = useDispatch();
  // const navigation = useNavigation();

 
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Ensure proper configuration and initialization of Amplify
        await Amplify.configure({
          API: {
            GraphQL: {
              endpoint: 'https://rcvvni5tqzb4lorqzgibgi4wc4.appsync-api.us-east-1.amazonaws.com/graphql',
              region: 'us-east-1',
              defaultAuthMode: 'apiKey',
              apiKey: 'da2-mjccl5jhqvbdvg67pe4sklvwty'
            }
          }
        });

        const result = await client.graphql({
          query: `
            query ListProducts {
              listProducts {
                items {
                  id
                  image
                  name
                  price
                  unit
                  category
                }
              }
            }
          `,
        });

        console.log(result)
        setData(result.data.listProducts.items)

      }
      catch(error){
          console.log(error)
      }
    }
  fetchCategories()

  },[Data])
  const [Data, setData] = useState([])
  console.log(Data);

  const uniqueCategories = [...new Set(Data.map((item) => item.category))];

  console.log(uniqueCategories);

  // products by category
  // const CatProducts = Data.filter((e) => e.category == "" )
  // console.log(CatProducts);



const Header = () => (
  <View >
    <Text>Category</Text>
  </View>
);

const BodyButton = () => (
  <View style={{ padding: 10 }}>
    {/* <TouchableOpacity onPress={navigateTogetAllProducts} style={[styles.flexRow, styles.box, styles.bgLight]}>
      products
      <Ionicons name="ios-cart" size={20} color="black" />
    </TouchableOpacity>
    <TouchableOpacity onPress={navigateToCatalog} style={[styles.flexRow, styles.box, styles.bgLight]} >
      veggies
      <Ionicons name="ios-cart" size={20} color="black" />
    </TouchableOpacity> */}

      {uniqueCategories.map((category) => (
        <TouchableOpacity
          key={category}
          onPress={() => {
            const CatProducts = Data.filter((e) => e.category ==  category)
            console.log(CatProducts);
            navigation.navigate('getAllProducts',{category:category,catProducts:CatProducts})}}
          style={[styles.flexRow, styles.box, styles.bgLight]}
        >
          {category}
          <Ionicons name="ios-cart" size={20} color="black" />
        </TouchableOpacity>
      ))}
    
  </View>
);

return (
  <View>

    <BodyButton/>
  </View>
);
};

export default Products;
