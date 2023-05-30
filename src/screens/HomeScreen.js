import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import CustomListItem from '../components/CustomListItem'
import {useNavigation} from '@react-navigation/native'
import {Image,Avatar,Icon} from 'react-native-elements'
import { auth ,db} from '../../firebase'
import {signOut} from 'firebase/auth'
import {collection,getDocs} from 'firebase/firestore'

const HomeScreen = ({navigation}) => {
    // const navigation =useNavigation()
const [chats,setChats]=useState([])

useEffect(() => {
    const retrievedInfo = async () => {
      const querySnapshot = await getDocs(collection(db, "chats"));
      const chatsArr = [];
      querySnapshot.forEach((doc) => {
        chatsArr.push({
          id: doc.id,
          data: doc.data()
        });
      });
      setChats(chatsArr);
    };
    retrievedInfo();
  }, []);

const logout =()=>{
    signOut(auth).then(()=>{
        navigation.navigate("Login")
    })
    
    console.log ( chats)

   
}

const Chat =(id,chatName)=>{
    navigation.navigate("Chat",{id,chatName})
}
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{height:70, backgroundColor:"white",borderBottomColor:"blue",borderWidth:0.5,flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:5}}>
<TouchableOpacity onPress={logout}>
<Avatar rounded source={{uri:auth?.currentUser?.photoURL}} />
</TouchableOpacity>

<Text className="text-2xl font-bold">Signal</Text>
<View className="flex-row">
    <TouchableOpacity className="mx-2">
<Icon name='camerao' type='antdesign' size={24} color="black"/>
    </TouchableOpacity>
    <TouchableOpacity className="mx-2" onPress={()=>navigation.navigate("AddChat")}>
<Icon name='pencil' type='font-awesome' size={24} color="black"/>
    </TouchableOpacity>
</View>
        </View>
        <ScrollView > 
        
            {chats?.map(({id,data:{chatName}})=>(
<CustomListItem chatName={chatName} id={id} key={id} enterChat={Chat}/>
            ))}
      
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen