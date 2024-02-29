import React from "react";
import { TouchableOpacity ,Text,View, Pressable} from "react-native";
import styles from "./styles";
import {
  FontAwesome5,
  AntDesign,
  Fontisto,
} from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {

  const navigation = useNavigation();

  const handleGoToCheckout = () => {
    navigation.navigate('Checkout');
  };
  const handleGoToAdduser = () => {
    navigation.navigate('Adduser');
  };
  // const navigation = useNavigation();

  // const handleGoToCart = () => {
  //   navigation.goBack();
  // };
  return (
    <View style={[styles.container]}>
      <View style={[styles.header, styles.shadow]}>
        <Text style={[styles.boldText,styles.dark]}>Synectiks Farms</Text>
      </View>

      <Pressable style={[styles.box, styles.bgDark]} onPress={handleGoToAdduser}>
        <FontAwesome5 name="user-alt" size={18} color="#d8f3dc" />
        <TouchableOpacity
          style={[]}
          // onPress={handleAddTile}
          
        >
          <Text style={[styles.light]} >Add Customer</Text>
        </TouchableOpacity>
      </Pressable>
      

      <View style={[styles.box, styles.bgDark]}>
        <AntDesign name="plus" size={18} color="#d8f3dc" />
        <Text style={[{ textAling: "center" }, styles.light]}>
          Add custom sale
        </Text>
      </View>

      <View style={[styles.box, styles.bgLight]}>
        <FontAwesome5 name="percent" size={18} color="#31572c" />
        <Text style={[{ textAling: "center" }, styles.dark]}>
          Apply discount
        </Text>
      </View>

      <View style={[styles.box, styles.bgLight, ,]}>
      <Fontisto name="shopping-basket" size={18} color="#31572c" />
        <Text style={[ styles.dark]}>
          Ship tooo customer
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.box, styles.active, { alignSelf: "flex-start" }]}
        // onPress={handleAddTile}
      >

      <AntDesign name="plus" size={20} color="#31572c" />
        <Text style={[styles.dark]}>Add tile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.goToCartButton, styles.bgDark]}
        // onPress={handleGoToCart}
        onPress={handleGoToCheckout}
      >
        <Text style={[styles.light,styles.boldText]} >Go to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
