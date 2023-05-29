import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreens from '../screens/LoginScreens'
import Register from '../screens/RegisterScreen'

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
   </Stack.Navigator>
  )
}

export default StackNavigator