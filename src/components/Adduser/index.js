import React, { useState } from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import {createUser} from "../../redux/slice/customerSlice";
import {useDispatch} from 'react-redux'
const Adduser = () => {
    const [inputUser, setInputUser] = useState({
        FirstName: "",
        LastName: "",
        PhoneNumber: "",
    });
    const dispatch = useDispatch();

    const handleChange = (name, value) => {
        setInputUser({ ...inputUser, [name]: value });
    };

    const handleSubmit = () => {
        console.log(inputUser);
        dispatch(createUser(inputUser));
        console.log('sending user', inputUser);
        Navigation.navigate('Customers')
    };
  const navigation = useNavigation();

    const handleGoToAdduser = () => {
        navigation.goBack();
      };
    const Navigation = useNavigation();


    return (
        <View>
            <View style={{ padding: 20 }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 20
                }}
                 >
                    <AntDesign name="close" size={30} color="blue"  onPress={handleGoToAdduser} />
                    <Text style={{ fontSize: 20 }} onPress={handleSubmit} >Save</Text>
                </View>
                <Text style={{ fontSize: 25, marginBottom: 20 }}>Add new Customer</Text>

                <Text style={{ fontSize: 15, color: "gray", marginBottom: 10 }}>Contact Information </Text>
                <TextInput
                    placeholder="First Name * (Required)"
                    placeholderTextColor="gray"
                    style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        marginBottom: 20,
                        fontSize: 16,
                        padding: 15
                    }}
                    value={inputUser.FirstName}
                    onChangeText={(e) => handleChange("FirstName", e)}
                />
                <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="gray"
                    style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        marginBottom: 20,
                        fontSize: 16,
                        padding: 15

                    }}
                    value={inputUser.LastName}
                    onChangeText={(text) => handleChange("LastName", text)}
                />
                <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor="gray"
                    style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        marginBottom: 20,
                        fontSize: 16,
                        padding: 15
                    }}
                    value={inputUser.PhoneNumber}
                    onChangeText={(text) => handleChange("PhoneNumber", text)}
                />
            </View>
        </View>
    );
}

export default Adduser;
