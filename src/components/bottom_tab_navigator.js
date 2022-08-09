import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';

export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    
    <View style={{ flexDirection: 'row',backgroundColor:"gray",bottom:10,width:"95%",alignSelf:"center",height:50,borderRadius:20,justifyContent:"center",alignItems:"center",alignContent:"center" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const Iconn =options.tabBarIcon.icon;
        console.log(options)

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
        if(route.name=="Favorite"){
          return(
            <View             style={{ flex: 1, alignItems:"center",backgroundColor:"gray"  ,
           position:"absolute",bottom:20,width:70,height:70,borderRadius:100,zIndex:-1,
          justifyContent:"center",alignContent:"center",alignSelf:"center"}}
            >
            <TouchableOpacity
            
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{alignContent:"center",alignItems:"center",alignSelf:"center",justifyContent:"center"}}
           >
<Icon name="add-circle" size={60} color={ isFocused?"gold":"white"} />
             
          </TouchableOpacity>
          </View>
          )
        }
        else

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems:"center" }}
          >
  
            <Text style={{ color: isFocused ? '#673ab7' : 'red' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({})

 
