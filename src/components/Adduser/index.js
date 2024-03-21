import React, {useState} from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import {addCustomer} from '../../redux/slice/customerSlice';
import {useDispatch} from 'react-redux';
import { creatingCustomer } from '../../Api/createCustomer';
// import Fontisto from 'react-native-vector-icons/Fontisto';
const Adduser = () => {
  const [inputUser, setInputUser] = useState({
    name: '',
    phone: '',
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
 const route =  useRoute();
  const handleChange = (name, value) => {
    setInputUser({...inputUser, [name]: value});
  };
  const total = route.params.total
  const items = route.params.items
  const handleSubmit = () => {
    console.log('details',inputUser);
    const CustomerCreated = createCustomer(inputUser);
    dispatch(addCustomer(CustomerCreated));
    console.log('sending user', inputUser);
    // Navigation.navigate('Customers');
    navigation.navigate('Customers',{total: total, items: items});
    // setReloadScreen(true);
  };


  const handleGoToAdduser = () => {
    navigation.goBack();
  };

  // const Navigation = useNavigation();
  const createCustomer = async (details)=>{
    console.log('This is items ', details);
    try {
      console.log('creating customer async', details);
  
      const response = await creatingCustomer(details);
      console.log('created customer response ', response);
  
      return response;
    } catch (error) {
      console.log('error creating customer', error);
    }
   }

  return (
    <View>
      <View style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
          }}>
          <AntDesign
            name="close"
            size={30}
            color="#31572c"
            onPress={handleGoToAdduser}
          />
          <Text style={{fontSize: 20, color: 'blue'}} onPress={handleSubmit}>
            Save
          </Text>
        </View>
        <Text style={{fontSize: 25, marginBottom: 20, color: 'black'}}>
          Add new Customer
        </Text>

        <Text style={{fontSize: 15, color: 'gray', marginBottom: 10}}>
          Contact Information{' '}
        </Text>
        <TextInput
          placeholder="Name * (Required)"
          placeholderTextColor="gray"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            marginBottom: 20,
            fontSize: 16,
            padding: 15,
            color: 'black',
          }}
          value={inputUser.name}
          onChangeText={e => handleChange('name', e)}
        />
        {/* <TextInput
          placeholder="Last Name"
          placeholderTextColor="gray"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            marginBottom: 20,
            fontSize: 16,
            padding: 15,
          }}
          value={inputUser.LastName}
          onChangeText={text => handleChange('LastName', text)}
        /> */}
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="gray"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            marginBottom: 20,
            fontSize: 16,
            padding: 15,
            color: 'black',
          }}
          value={inputUser.phone}
          onChangeText={text => handleChange('phone', text)}
        />
      </View>
    </View>
  );
};

export default Adduser;
