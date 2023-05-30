import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {ListItem,Avatar} from 'react-native-elements'
import {getDocs,query,orderBy,collection} from 'firebase/firestore'
import { db } from '../../firebase'

const CustomListItem = ({id,chatName,enterChat}) => {

    const [chatMessages,setChatMessages]=useState([])

    useEffect(() => {
        const retrievedInfo = async () => {
            try {
              const messageref = collection(db, "chats", id, "messages");
              const q = query(messageref, orderBy('timestamp', 'desc'))
              const querySnapshot = await getDocs(q)
              const chatsArr = [];
              querySnapshot.forEach((doc) => {
                chatsArr.push({
                  data: doc.data()
                });
              });
              setChatMessages(chatsArr);
            } catch (error) {
              console.error(error);
            }

          };
        
        retrievedInfo()
      }, []);

      return(
        <View className="p-2">
<ListItem onPress={()=>enterChat(id,chatName)} key={id} bottomDivider  >
<Avatar
rounded
source={{uri: chatMessages?.[0]?.data?.photoURL }}

/>
<ListItem.Content>
    <ListItem.Title style={{fontWeight:'800'}}>
       {chatName}
    </ListItem.Title>
    <ListItem.Subtitle  numberOfLines={1} ellipsizeMode='tail' style={{}}>
{chatMessages?.[0]?.data?.displayName} : {chatMessages?.[0]?.data?.message} 
    </ListItem.Subtitle>
</ListItem.Content>
    </ListItem>
        </View>
    
  )
}

export default CustomListItem