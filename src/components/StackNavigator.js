import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreens from '../screens/LoginScreens'
import Register from '../screens/RegisterScreen'
import HomeScreen from '../screens/HomeScreen'
import AddChatScreen from '../screens/AddChatScreen'
import ChatScreen from '../screens/ChatScreen'

const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
    const global ={
        headerStyle:{backgroundColor:"#2C6BED"},
        headerTitleStyle:{color:"white"},
        headerTintColor:"white",
    }
  return (
   <Stack.Navigator screenOptions={global}>
    
    <Stack.Screen name="Login" component={LoginScreens}/>
    <Stack.Screen name="Register" component={Register}/>
    
   <Stack.Screen name='AddChat' component={AddChatScreen} options={{title:"Add a new Chat",headerBackTitle:"Chats"}}/>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Chat" component={ChatScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default StackNavigator