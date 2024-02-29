import React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import styles from '../Category/styles';
import getAllProducts from '../getAllProducts';
import {
  Ionicons,
  FontAwesome5,
  AntDesign,
  Fontisto,
} from "@expo/vector-icons";
import styles from './styles';

const Products = () => {
  const navigation = useNavigation();

  const navigateToCatalog = () => {
    navigation.navigate('Catalog');
  };

  const navigateTogetAllProducts = () => {
    navigation.navigate('getAllProducts');
    
  };

  const Header = () => (
    <View >
      <Text>Category</Text>
    </View>
  );

  const BodyButton = () => (
    <View style={{padding:10}}>
      <TouchableOpacity  onPress={navigateTogetAllProducts} style={[styles.flexRow, styles.box,styles.bgLight]}>
        products
        <Ionicons name="ios-cart" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity  onPress={navigateToCatalog} style={[styles.flexRow, styles.box,styles.bgLight]} >
        veggies
        <Ionicons name="ios-cart" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
     
      <BodyButton />
    </View>
  );
};

export default Products;
