import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Button,Input, Image} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import {useNavigation} from '@react-navigation/native'
import {onAuthStateChanged,signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase'

const LoginScreens = () => {
    const navigation = useNavigation()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState("")
    useEffect(()=>{
        
            const unsubscribe =onAuthStateChanged(auth, (user) => {
                if (user) {
                   
                    navigation.replace("Home")
                  // User is signed in, see docs for a list of available properties
                  // https://firebase.google.com/docs/reference/js/auth.user
                 // const uid = user.uid;
                  // ...
                } 
              });

              return unsubscribe;
        
    },[])
  
    const SignIn=()=>{
signInWithEmailAndPassword(auth,email,password).catch(()=>alert("Profile Not Found. Please Register"))
    }
  return (
    <KeyboardAvoidingView 
    behavior="paddig"
    style={{flex:1,alignItems:"center",backgroundColor:"white",justifyContent:"center",padding:10}}>
        <StatusBar style='light'/>

<Image source={{uri:"https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg"}} style={{height:180,width:180}}/>
    
    <View style={{width:300}}>
        <Input placeholder='Email' type="email" autoFocus value={email} onChangeText={(text) =>setEmail(text)} />
        <Input placeholder='Password' type="password" autoFocus secureTextEntry value={password} onChangeText={(text)=>setPassword(text)} onSubmitEditing={SignIn}/>
    </View>
    
    <Button title="Login" containerStyle={{width:200, marginTop:10}} onPress={SignIn}/>
    <Button title="Register" type='outline' containerStyle={{width:200, marginTop:10}} onPress={()=>navigation.navigate("Register")}/>
    </KeyboardAvoidingView>
  )
}

export default LoginScreens

const styles = StyleSheet.create({})