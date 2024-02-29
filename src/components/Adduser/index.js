import React from 'react'
import { TextInput, View,Text } from 'react-native'
import { AntDesign } from "@expo/vector-icons";


const Adduser = () => {
    return (
        <div>
              <View style={{ padding: 20 }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding:20
            }} >
                <AntDesign name="close" size={30} color="blue" />
                <Text style={{fontSize:20}}>Save</Text>
            </View>
            <Text style={{fontSize:25, marginBottom:20 }}>Add new Customer</Text>
          
                <Text style={{fontSize:15, color:"gray", marginBottom:10}}>Contact Information </Text>
                <TextInput
                    placeholder="First Name * (Required)"
                    placeholderTextColor="gray"
                    style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        marginBottom: 20,
                        fontSize: 16,
                        padding:15
                    }}
                />
                <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="gray"
                    style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        marginBottom: 20,
                        fontSize: 16,
                      
                        padding:15
                        
                    }}
                />
                <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor="gray"
                    style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        marginBottom: 20,
                        fontSize: 16,
                        padding:15
                    }}
                />
            </View>






        </div>
    )
}

export default Adduser