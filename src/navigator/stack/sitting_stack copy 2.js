import React from 'react'
 import  { createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from "../../screens/home";
 const Stack=createNativeStackNavigator();
 export default function Sitting_stack() {
   
  return (
    <Stack.Navigator>
        <Stack.Screen name="SittingScreen" component={Home} ></Stack.Screen>
    </Stack.Navigator>
  )
}
