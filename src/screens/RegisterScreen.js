import { View, Text, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import {Button,Input} from 'react-native-elements'
import { auth } from '../../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

const Register = () => {
 const [name,setName]=useState('')
 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')
 const [image,setImage]=useState("")
 const register =()=>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // updateProfile(user, { 
    //   displayName:name,
    //    photoURL:
    //     image || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log (errorCode,errorMessage)
    // ..
  });


 }

  return (
<KeyboardAvoidingView behavior="padding" style={{flex:1,alignItems:"center",justifyContent:"center",padding:10,backgroundColor:"white"}}>
 <Text  style={{marginBottom:50 , fontSize:20}}>
Create a Signal Account
 </Text>
 <View style={{width:300}}>
<Input
placeholder='Full Name'
autoFocus
type="text"
value={name}
onChangeText={(text)=>setName(text)}
/>
<Input
placeholder='Email'

type="email"
value={email}
onChangeText={(text)=>setEmail(text)}
/>
<Input
placeholder='Password'

type="password"
secureTextEntry
value={password}
onChangeText={(text)=>setPassword(text)}
/>
<Input
placeholder='Profile Photo URL (optional)'
type="text"
value={image}
onChangeText={(text)=>setImage(text)}
onSubmitEditing={register}
/>

 </View>
 <Button title="Register" onPress={register} raised  containerStyle={{width:200, marginTop:10}}/>
 
</KeyboardAvoidingView>
  )
}

export default Register