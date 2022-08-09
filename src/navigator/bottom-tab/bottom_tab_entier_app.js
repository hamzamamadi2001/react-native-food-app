import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../stack/home_stack';
import SittingScreen from '../stack/sitting_stack';
import Bage from '../stack/sitting_stack';
import Profile from '../stack/sitting_stack';
import favoraite from '../stack/sitting_stack';

import Bottom_tap_nav from '../../components/bottom_tab_navigator';

import Icon from 'react-native-vector-icons/Ionicons';
 const Tab = createBottomTabNavigator();

const BottomTabEntierApp = () => {
    return (
        <Tab.Navigator
         screenOptions={{tabBarShowLabel:false,
        }}
        tabBar={props=><Bottom_tap_nav {...props}></Bottom_tap_nav>}
        > 
        
         
          
        
   
        <Tab.Screen    name="Home"         
 component={HomeScreen}  options={{tabBarLabel: 'Home', unmountOnBlur: true, 
 tabBarIcon: {icon:<Icon name="home" size={24} color="gold" />,"name":"heart"}}} />


<Tab.Screen logo="sitting"   name="Sittings"         
 component={SittingScreen}  />

<Tab.Screen    name="Favorite"         
 component={favoraite}  options={{tabBarLabel: 'Favorite', unmountOnBlur: true, 
 tabBarIcon: {icon:<Icon name="home" size={24} color="gold" />,"name":"heart"}}} />


<Tab.Screen logo="adsfadsfas"   name="Profile"         
 component={Profile}  options={{tabBarLabel: 'Profile', unmountOnBlur: true, 
          tabBarIcon: {icon:<Icon name="home" size={24} color="gold" />,"name":"user"}}} />



<Tab.Screen    name="BAge"         
 component={Bage}  options={{tabBarLabel: 'BAge', unmountOnBlur: true, 
       tabBarIcon: {icon:<Icon name="home" size={24} color="gold" />,"name":"user"}} }/>
         

 </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default BottomTabEntierApp;

