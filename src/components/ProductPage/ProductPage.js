import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Picker,
  StyleSheet,
  Pressable,
} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {Entypo} from '@expo/vector-icons';
import {useRoute, useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
// import { AddProduct, removeItem } from "../../redux/slice/Product";
import {addToCart} from '../../redux/slice/customerSlice';
import DropDownPicker from 'react-native-dropdown-picker';

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [piece, setPiece] = useState(1);
  const [quantity, setQuantity] = useState('1');
  const [selectedType, setSelectedType] = useState('pieces');
  const [product, setProduct] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route.params.value);

  useEffect(() => {
    setProduct(route.params.value);
  }, []);

  const dispatch = useDispatch();
  const reduxData = useSelector(state => state.CustomerSlice.cart);

  const typePrice = {
    // kgs: { price: 50 },
    kgs: {price: product.price},
    gms: {price: product.price / 1000},
    // gms: { price: 0.3 },
    pieces: {price: product.price},
  };

  // const quantityTypes =
  //   product.unit === "KG"
  //     ? [
  //         { label: "KG", value: "kgs" },
  //         { label: "Grams", value: "gms" },
  //       ]
  //     : [{ label: product.unit, value: product.unit }];
  console.log(product.unit);
  const quantityTypes =
    product.unit === 'KG'
      ? [
          {key: 1, value: 'kgs'},
          {key: 2, value: 'gms'},
        ]
      : [{key: 1, value: product.unit}];

  const handleChangeQuantity = text => setQuantity(text);
  const handleSelectType = type => setSelectedType(type);

  return (
    <View
      style={{
        flexDirection: 'column',
        // gap: "10px",
        marginVertical: 10,
        padding: '15px',
        position: 'relative',
        height: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // gap: "20px",
          marginVertical: 20,
          marginLeft: 10,
        }}>
        <Image
          source={{
            uri: product.image,
          }}
          style={{width: 70, height: 70, borderRadius: 10}}
        />
        {/* <View style={{ marginLeft: 20 }}> */}
        <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 10}}>
          {product.name} 1 {product.unit} {'\n'}
          Price : ₹ {product.price}
        </Text>
        {/* </View> */}
      </View>
      <View style={{marginTop: 15}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: 'grey',
            marginBottom: 7,
            marginLeft: 12,
          }}>
          More details
        </Text>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderColor: '#dddddd',
            width: 'auto',
            height: '20vh',
            borderWidth: 2,
            borderRadius: 10,
            padding: 15,
            margin: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   backgroundColor: "#dddddd",
              paddingTop: 15,
              paddingBottom: 6,
            }}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
              Price
            </Text>
            <Text style={{color: 'black', fontSize: 16, fontWeight: 600}}>
              {quantity != '' && (
                <Text>
                  {quantity} x {selectedType} : Rs.
                  {Math.ceil(quantity * typePrice[selectedType].price * 1000) /
                    1000}
                </Text>
              )}
            </Text>
          </View>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#dddddd',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              //   backgroundColor: "#dddddd",
              paddingBottom: 10,
            }}>
            <Text style={{color: 'black', fontWeight: 500}}>
              Enter Custom Quantity
            </Text>
            <View style={styles.container}>
              <TextInput
                value={quantity}
                onChangeText={handleChangeQuantity}
                placeholder="Enter Quantity"
                keyboardType="numeric"
                style={styles.textInput}
              />
              {console.log(quantityTypes, selectedType)}
              <DropDownPicker
                items={quantityTypes.map((type, index) => ({
                  label: type.label,
                  value: type.value,
                  key: index,
                }))}
                defaultValue={selectedType}
                containerStyle={{height: 40, width: 100, marginTop: -8}}
                style={{
                  backgroundColor: '#fafafa',
                  borderBottomColor: '#fff',
                  borderTopColor: '#fff',
                  marginBottom: 30,
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => handleSelectType(item.value)}
              />
            </View>
            {/* <SelectList
              setSelected={(val) => setSelectedType(val)}
              data={quantityTypes.map((type) => ({
                key: type.key,
                value: type.value,
              }))}
              save="value"
            /> */}
            {/* {quantity != "" && (
              <Text>
                {quantity} x {selectedType} :{" "}
                {quantity * typePrice[selectedType].price} Rs.
              </Text>
            )} */}
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          bottom: 10,
          // paddingRight: 10,
          width: '95%',
          // justifySelf: "end",
          justifySelf: 'flex-end',
          marginTop: 15,
          marginBottom: 10,
        }}>
        <Pressable
          style={{
            backgroundColor: '#31572c',
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            marginLeft: 10,
          }}
          onPress={() => {
            // setPiece(piece + 1);
            // console.log(cart);
            // cart.push({
            //   name: product.name,
            //   quantityType: selectedType,
            //   quantity: quantity,
            //   price:
            //     Math.ceil(quantity * typePrice[selectedType].price * 1000) /
            //     1000,
            // });
            // console.log(cart);
            const data = dispatch(addToCart(product));
            // console.log(data.payload)
            // console.log(data.payload)
          }}>
          <Entypo name="plus" size={24} color="white" />
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#d8f3dc',
            width: '82%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 10,
          }}
          // onPress={handleGoToCheckout}
        >
          <Text
            style={{color: '#31572c', fontWeight: 700}}
            onPress={() => {
              navigation.navigate('Checkout');
            }}>
            Go to cart
          </Text>
          <Text style={{color: 'grey'}}>{reduxData.length} items</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  picker: {
    width: 100,
    height: 40,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default ProductPage;
