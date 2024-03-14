import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Pressable,
  ActivityIndicator
} from 'react-native';
import {useNavigation,useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Customers = () => {
  const data =  useSelector(state=> state.CustomerSlice.customers)
  const [searchQuery, setSearchQuery] = useState('');
  const [customers] = useState([
    {id: 1, name: 'John Doe', email: 'john@gmail.com'},
    // ... (other customer data)
  ]);
 console.log('customers', data);
  const navigation = useNavigation();
  const route = useRoute()
  // const  = route.params.value
  // const users = useSelector(state => state.CustomerSlice.users);

  const matchingResults = customers.filter(
    customer =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.customerContainer}
      onPress={() => {
        console.log('Selected customer:', item)
        navigation.navigate('Cash',{value:route.params.value,user:item});
        }}>
      <View style={styles.customerInfo}>
        <Text style={styles.customerName}>{item.name}</Text>
        <Text style={styles.customerEmail}>{item.email}</Text>
      </View>
      <Text>
        <Icon name="arrow-forward" />
      </Text>
    </TouchableOpacity>
  );

  const addCustomer = () => {
    console.log('addCustomer');
    navigation.navigate('Adduser');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for customers..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        // data={matchingResults}
        data= {data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Pressable
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={addCustomer}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
          Add Customer
        </Text>
      </Pressable>
    </View>
  );
};

export default Customers;

const styles = {
  container: {
    flex: 1,
    padding: 16,
    marginTop: 25,
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
  },
  customerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  customerInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  customerEmail: {
    fontSize: 14,
    color: '#666',
  },
};
