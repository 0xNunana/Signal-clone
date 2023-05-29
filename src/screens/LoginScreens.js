import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Button,Input, Image} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import {useNavigation} from '@react-navigation/native'

const LoginScreens = () => {
    const navigation = useNavigation()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState("")
    const SignIn =()=>{

    }
  return (
    <KeyboardAvoidingView 
    behavior="paddig"
    style={{flex:1,alignItems:"center",backgroundColor:"white",justifyContent:"center",padding:10}}>
        <StatusBar style='light'/>

<Image source={{uri:"https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg"}} style={{height:180,width:180}}/>
    
    <View style={{width:300}}>
        <Input placeholder='Email' type="email" autoFocus value={email} onChangeText={(text) =>setEmail(text)} />
        <Input placeholder='Password' type="password" autoFocus secureTextEntry value={password} onChangeText={(text)=>setPassword(text)}/>
    </View>
    
    <Button title="Login" containerStyle={{width:200, marginTop:10}} onPress={SignIn}/>
    <Button title="Register" type='outline' containerStyle={{width:200, marginTop:10}} onPress={()=>navigation.navigate("Register")}/>
    </KeyboardAvoidingView>
  )
}

export default LoginScreens

const styles = StyleSheet.create({})