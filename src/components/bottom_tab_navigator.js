import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';

export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    
    <View style={{ elevation:3,shadowOpacity:10,shadowColor:"black",shadowRadius:0,flexDirection: 'row',backgroundColor:"white",bottom:10,width:"95%",alignSelf:"center",height:50,borderRadius:10,justifyContent:"center",alignItems:"center",alignContent:"center" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
 
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        console.log(options)
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        if(route.name=="Add new items"){
          return(
            <View             style={{ flex: 1, alignItems:"center",backgroundColor:"white"  ,
         width:"auto",borderRadius:50,height:80,
          justifyContent:"center",alignContent:"center",alignSelf:"flex-end",}}
            >

           
               <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{justifyContent:"center",alignSelf:"center",alignItems:"center"}}
            >
<Icon name="add-circle" size={60} color="#f66" style={{textAlign:"center",textAlignVertical:"center",width:80,height:80}} />
            
          </TouchableOpacity> 
          
              </View>
           
         
          )
        }
        else

        return (
          <TouchableOpacity
          key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems:"center"}}
          >
          {options.tabBarIcon.icon(isFocused)}
            <Text style={{ color: isFocused ? '#f66' : 'gray' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({})

 
