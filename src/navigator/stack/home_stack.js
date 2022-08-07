import React from 'react'
 import  { createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from "../../screens/home";
 const Stack=createNativeStackNavigator();
 export default function Stack_navigator() {
   
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} ></Stack.Screen>
    </Stack.Navigator>
  )
}
