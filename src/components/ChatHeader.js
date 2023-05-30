import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import {Icon,Avatar} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'

const ChatHeader = ({chatName,messages}) => {
    const navigation = useNavigation()
  return (
    <View className="h-16 w-full bg-blue-300 border-blue-300 border-b flex-row items-center space-x-4 px-2  ">
    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
    <Icon name='chevron-left' type='font-awesome' size={25} color="white"/>
    </TouchableOpacity>


    <View className="flex-row flex-grow space-x-2  items-center ">
    <Avatar rounded source={{uri:messages?.[0]?.data.photoURL}} />
<Text className="text-xl text-gray-600">{chatName}</Text>

    </View>
    <View className="flex-row items-center justify-center pb-3">
<TouchableOpacity className=" pt-3  pr-2">
        <Icon type='material' name='call' size={25} color="white"/>
    </TouchableOpacity>
    <TouchableOpacity className=" mr-2 pt-3 ">
        <View className=" border-l-2 pl-3 border-blue-500">
        <Icon type='material' name="video-call" size={25} color="white" />
        </View>

    </TouchableOpacity>
     </View>
     
     </View>
  )
}

export default ChatHeader