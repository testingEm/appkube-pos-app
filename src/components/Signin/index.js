import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
    const navigation = useNavigation();
    const handleGoToOtp = () => {
        navigation.navigate('Otp');
    };
    const handleGoToSignup = () => {
        navigation.navigate('Signup');

    };


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height:200 }}>
            <View style={{ width: 300, height:350, borderRadius: 10, padding: 30, backgroundColor: '#FFF',  }}>

                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom:6, color: '#000' }}>Log in</Text>
                <Text style={{ fontSize: 15, color: '#616161', marginBottom: 10 }}>Synectiks Farms</Text>

                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 14, color: '#616161' }}>Mobile Number</Text>
                    <TextInput
                        placeholder="Enter the Mobile number"
                        style={{ borderWidth: 1, borderColor: '#999', borderRadius: 5, padding: 7 , color:"black" }}
                    />
                </View>

                <TouchableOpacity style={{ backgroundColor: '#303030', borderRadius: 5, padding: 10,marginBottom:10, alignItems: 'center' }} onPress={handleGoToOtp}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold' }} >Continue with number</Text>
                </TouchableOpacity>

                


                <Pressable onPress={handleGoToSignup}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#005db3', }}>New to Synectiks Farms? <Text style={{ fontWeight: 'normal', color: '#FFF' }}>Get started --</Text></Text></Pressable>

                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ marginRight: 10, color: '#616161' }}>Help</Text>
                    <Text style={{ marginRight: 10, color: '#616161' }}>Privacy</Text>
                    <Text style={{ color: '#616161' }}>Terms</Text>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;