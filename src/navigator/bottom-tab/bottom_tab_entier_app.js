import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../stack/home_stack';
import Icon from 'react-native-vector-icons/FontAwesome';
 const Tab = createBottomTabNavigator();

const BottomTabEntierApp = () => {
    return (
        <Tab.Navigator>
<Tab.Screen      
 options={{headerShown:false,tabBarLabel: 'dsad', unmountOnBlur: true, 
          tabBarIcon: ({ color ,focused}) => (
            <Icon name="rocket" size={30} color="#900" />),}} name="sdsa sdsa"  component={HomeScreen} />     

 </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default BottomTabEntierApp;

