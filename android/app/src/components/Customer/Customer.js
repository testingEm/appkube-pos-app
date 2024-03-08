import React, { useState } from 'react';
// import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Pressable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", email: "john@gmail.com" },
    { id: 2, name: "Jane Smith", email: "smith@gmail.com" },
    { id: 3, name: "Alice Johnson", email: "Alice@gmail.com" },
    { id: 4, name: "Bob Brown", email: "Bob@gmail.com" },
    { id: 5, name: "Alice Johnson", email: "alice@example.com" },
  { id: 6, name: "Charlie Davis", email: "charlie@example.com" },
  { id: 7, name: "Emma Smith", email: "emma@example.com" },
  { id: 8, name: "David Wilson", email: "david@example.com" },
  { id: 9, name: "Ella Martinez", email: "ella@example.com" },
  { id: 10, name: "Frank Thompson", email: "frank@example.com" },
  { id: 11, name: "Grace Lee", email: "grace@example.com" },
  { id: 12, name: "Henry Clark", email: "henry@example.com" },
  { id: 13, name: "Ian Martinez", email: "ian@example.com" },
  { id: 14, name: "Jennifer Brown", email: "jennifer@example.com" },
  { id: 15, name: "Kevin Taylor", email: "kevin@example.com" },
  { id: 16, name: "Linda Harris", email: "linda@example.com" },
  { id: 17, name: "Michael Adams", email: "michael@example.com" },
  { id: 18, name: "Nancy Scott", email: "nancy@example.com" }
    //   { id: 1, name: 'alex Doe' ,email: "john@gmail.com" },
    //   { id: 2, name: 'flex Smith' ,email: "smith@gmail.com" },
    //   { id: 3, name: 'ben Johnson',email: "Alice@gmail.com" },
    //   { id: 4, name: 'juan Brown',email: "Bob@gmail.com" },
    // Add more customers as needed
  ]);
 const navigation = useNavigation();
  const matchingResults = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.customerContainer}
      onPress={() => console.log("Selected customer:", item)}
    >
      <View style={styles.customerInfo}>
        <Text style={styles.customerName}>{item.name}</Text>
        <Text style={styles.customerEmail}>{item.email}</Text>
      </View>
      <Text>
        <Icon name="arrow-forward" />
      </Text>
    </TouchableOpacity>
  );
  const addCustomer = ()=>{
    console.log('addCustomer')
    navigation.navigate('Adduser');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for customers..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={matchingResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Pressable 
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
        onPress={addCustomer}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
              add Customer 
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
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
  },
  customerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  customerInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  customerEmail: {
    fontSize: 14,
    color: "#666",
  },
};