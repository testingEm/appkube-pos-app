import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { createOrder } from '../../redux/slice/customerSlice';


// const valuePass=()=>{

// }

const Cash = () => {
    const routdata = useRoute()
    console.log(routdata.params.value)
    const navigation = useNavigation();

    const handleGoToCash = () => {
        navigation.goBack();
    };
    const dispatch = useDispatch();

    const handleOrder = () => {
        dispatch(createOrder({ total: routdata.params.value }));
        navigation.navigate('Share');
    }

    const [Isloading, setIsloadig] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsloadig(false)
        }, 3000)
        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (

        <View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 20,
                    marginTop: 40,

                }}>

             <Text>  <AntDesign
                    name="close"
                    size={30}
                    color="blue"
                    onPress={handleGoToCash}
                />
                </Text> 
                <Text style={{ fontSize: 16, fontWeight: 600 }}>Mark unpaid</Text>
            </View>
            <View
                style={{
                    borderBottomColor: "lightgray",
                    borderBottomWidth: 1,
                    marginVertical: 8,
                    color: "white",
                }}
            />
            {Isloading ? (<Text style={{
                paddingHorizontal: 20,
                fontSize:16

            }}>
                Loading ........</Text>) : (

                <View style={{
                    paddingHorizontal: 20,

                }}>
                    <Text style={{ fontWeight: 600, fontSize: 17 }}> ₹ {routdata.params.value}.00</Text>
                    <Text style={{ fontSize: 14, fontWeight: 500 }}>Select Payment Option</Text>
                </View>
            )}
            <View style={{
                border: ".5px solid gray",
                margin: 15,
                flexDirection: "column",
                gap: 20,
                padding: 15
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <MaterialCommunityIcons name="cash" size={24} color="black" />

                        <Text style={{ padding: 8 , fontSize: 14, fontWeight: 500 }}
                            onPress={handleOrder}
                        >Cash</Text>
                    </View>
                    <AntDesign name="right" size={20} color="black" />
                </View>
                <View
                    style={{
                        borderBottomColor: "lightgray",
                        borderBottomWidth: 1,
                        marginVertical: 8,
                        color: "white",
                    }}
                />
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <MaterialCommunityIcons name="cash" size={24} color="black" />
                        <Text style={{ padding: 8, fontSize: 14, fontWeight: 500 }}>Upi</Text>
                    </View>
                    <AntDesign name="right" size={20} color="black" />
                </View>
                <View
                    style={{
                        borderBottomColor: "lightgray",
                        borderBottomWidth: 1,
                        marginVertical: 8,
                        color: "white",
                    }}
                />
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <MaterialCommunityIcons name="cash" size={24} color="black" />
                        <Text style={{ padding: 8,fontSize: 14, fontWeight: 500 }}>Split Payment</Text>
                    </View>
                    <AntDesign name="right" size={20} color="black" />
                </View>




            </View>


        </View>
    )
}

export default Cash