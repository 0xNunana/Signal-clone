import { View, Text ,TouchableOpacity, KeyboardAvoidingView, ScrollView, TextInput, Keyboard, TouchableWithoutFeedback} from 'react-native'
import {Avatar,Icon,Button} from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import ChatHeader from '../components/ChatHeader'
import {getDocs,collection,addDoc,serverTimestamp,query,orderBy} from 'firebase/firestore'
import { auth,db } from '../../firebase'


const ChatScreen = ({route}) => {
    const {id,chatName} =route.params
    const [input,setInput]=useState('')
    const [messages, setMessages]=useState([])
const sendMessage =async()=>{
    Keyboard.dismiss()
    const docRef = await addDoc(collection(db, "chats",id,"messages" ), {
       timestamp:serverTimestamp(),
       message:input,
       displayName:auth.currentUser.displayName,
       email: auth.currentUser.email,
       photoURL:auth.currentUser.photoURL

      });
      setInput('')
      console.log(docRef)
      
}
useEffect(() => {
    if (!id) return;
    
    const retrievedInfo = async () => {
      const messageref = collection(db, "chats", id, "messages");
      const q = query(messageref, orderBy('timestamp', 'asc'))
      const querySnapshot = await getDocs(q)
      const chatsArr = [];
      querySnapshot.forEach((doc) => {
        chatsArr.push({
          id: doc.id,
          data: doc.data()
        });
      });
      setMessages(chatsArr);
    };
    retrievedInfo();
  }, [id,messages]);

  return (
    
   
    
      
<KeyboardAvoidingView behavior='padding' style={{flex:1}}>
    <>
    <ChatHeader chatName={chatName} messages={messages}/>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1}}>
    <ScrollView contentContainerStyle={{padding:5}}>
       {messages?.map(({id,data})=>(
        data.email === auth.currentUser.email ? (
            <View key={id} className="p-3 m-3 bg-blue-100  rounded-2xl mb-2 mr-2  relative max-w-xs items-end self-end">
                <Avatar source={{uri:data.photoURL}} 
                rounded position="absolute" bottom={-17 } right={-7} size={30}
                containerStyle={{position:"absolute",bottom:-15 , right:-5}}
                />
                <Text  className="text-xl">
                    {data.message}
                </Text>
            </View>
        ): (
        //sender side
        <View key={id} className="p-2  bg-white rounded-lg mb-2  relative max-w-xs  flex-row self-start">
            <Avatar source={{uri:data.photoURL}} rounded/>
            <View>
            <Text className="ml-2 mb-15 text-xl">
                    {data.message}
                </Text>
                <Text className="pr-10 left-10 font-semibold text-gray-300">{data.displayName}</Text>
            </View>
                
        </View>)
       ))}
        


    </ScrollView>
    </TouchableWithoutFeedback>
    
    <View className="flex-row justify-between items-center border-t border-gray-200 px-5 py-2 bg-slate-200">
    <TextInput
    className="h-10 text-lg bg-white flex-grow bottom-0 mr-2 rounded-full px-2"
    placeholder='Type your message..'
    value={input}
    onChangeText={(change)=>setInput(change)}
    onSubmitEditing={sendMessage}
    
    />
    <Button title='Send' color="#FF5864" onPress={sendMessage}/>
    
</View>
    </>

</KeyboardAvoidingView>
     




     
    
  )
}

export default ChatScreen