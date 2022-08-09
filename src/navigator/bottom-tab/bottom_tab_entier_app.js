import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../stack/home_stack';
import SittingScreen from '../stack/sitting_stack';
import Bage from '../../screens/bage';
import Profile from '../../screens/profile';
import favoraite from '../../screens/favorite'

import Bottom_tap_nav from '../../components/bottom_tab_navigator';

import Icon from 'react-native-vector-icons/Ionicons';
 const Tab = createBottomTabNavigator();

const BottomTabEntierApp = () => {
    return (
        <Tab.Navigator
       
        tabBar={props=><Bottom_tap_nav {...props}></Bottom_tap_nav>}
        > 
        
         
          
        
   
        <Tab.Screen    name="Home"         
 component={HomeScreen}  options={{tabBarLabel: 'Home', unmountOnBlur: true, 
 tabBarIcon: {icon:(isFocused)=>{if(isFocused) return(<Icon name="home-outline" size={24}  color="#f66"/> ); else  return (<Icon name="home" size={24}  color="gray" />)}}}} />


<Tab.Screen logo="Profile"   name="Sittings"         
 component={SittingScreen}  options={{tabBarLabel: 'Favorite', unmountOnBlur: true, 
 tabBarIcon: {icon:(isFocused)=>{if(isFocused) return(<Icon name="person-outline" size={24}  color="#f66"/> ); else  return (<Icon name="person" size={24}  color="gray" />)}}}} />


<Tab.Screen    name="Add new items"         
 component={favoraite}  options={{tabBarLabel: 'Favorite', unmountOnBlur: true, 
 tabBarIcon: {icon:(isFocused)=>{if(isFocused) return(<Icon name="add-outline" size={24}  color="#f66"/> ); else  return (<Icon name="add" size={24}  color="gray" />)}}}} />


<Tab.Screen    name="Messages"         
 component={Profile}  options={{tabBarLabel: 'Profile', unmountOnBlur: true, 
 tabBarIcon: {icon:(isFocused)=>{if(isFocused) return(<Icon name="chatbubble-ellipses-outline" size={24}  color="#f66"/> ); else  return (<Icon name="chatbubble-ellipses" size={24}  color="gray" />)}}}} />



<Tab.Screen    name="More"         
 component={Bage}  options={{  unmountOnBlur: true, 
 tabBarIcon: {icon:(isFocused)=>{if(isFocused) return(<Icon name="menu-outline" size={24}  color="#f66"/> ); else  return (<Icon name="menu" size={24}  color="gray" />)}}}} />
         

 </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default BottomTabEntierApp;

