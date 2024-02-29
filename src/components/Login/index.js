import { useState } from 'react'
import React  from 'react'
import { View, Text, TextInput, Button,Pressable } from 'react-native'
import styles from './styles'
const index = () => {
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const handleSignup = () => {
      console.log('user credentials:')
      console.log('name',userName);
      console.log('email',email);
      console.log('password',password);
      console.log('confirmPassword',confirmPassword);
    }
  return (
    <View style={[styles.container,]}>
      <Text style={[styles.boldText,styles.dark]}>Sign-up to Start</Text>
      <TextInput 
      style={[styles.textInput]}
      placeholder='userName'
      value={userName}
      onChangeText={(val)=>setUserName(val)}

      />
      <TextInput 
      style={[styles.textInput]}
      placeholder='Email'
      value={email}
      onChangeText={(val)=>setEmail(val)}

      />
      <TextInput 
      style={[styles.textInput]}
      placeholder='password'
      value={password}
      onChangeText={(val)=>setPassword(val)}

      />
      <TextInput 
      style={[styles.textInput]}
      placeholder='Confrim password'
      value={confirmPassword}
      onChangeText={(val)=>setConfirmPassword(val)}

      />
      <Pressable  onPress={handleSignup} style={[styles.button]}>Sign up</Pressable>
      {/* <Pressable></Pressable> */}
    </View>
  )
}

export default index