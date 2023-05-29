import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {Input,Button,Icon} from 'react-native-elements'
import { db } from '../../firebase'
import { collection, addDoc } from "firebase/firestore"; 
const AddChatScreen = ({navigation}) => {
const [input,setInput]=useState()

const createchat=async()=>{
await addDoc(collection(db,'chats'),{
    chatName:input
}).then(()=>navigation.goBack()).catch((error)=>alert(error))
}


  return (
    <View className="p-3 h-full bg-white">
      <Input
      placeholder='Enter a Chat Name :'
      value={input}
      onChangeText={(text)=>setInput(text)}
      onSubmitEditing={createchat}
      leftIcon={
        <Icon name='wechat' type='antdesign' size={24}/>
      }
      
      />
      <Button title="Create new chat" onPress={createchat}/>
    </View>
  )
}

export default AddChatScreen