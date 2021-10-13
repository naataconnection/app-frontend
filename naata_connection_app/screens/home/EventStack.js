import * as React from 'react';
import { View, Text, Button, Image, TouchableHighlight, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Allevents from './Allevents'; 

class AppNavigator extends React.Component  {
    render() {
        return (
            <NavigationContainer theme={DarkTheme}>
              <Drawer.Navigator initialRouteName="Event" drawerContent={props=><DrawerContent {...props} />} >
                <Drawer.Screen name="Event" component={Allevents}/>
                <Drawer.Screen name="Tabs" component={Allevents} />
                <Drawer.Screen name="Team" component={Allevents} options={{header:Header, headerShown:true}} />
                <Drawer.Screen name="Events" component={Events} options={{header:Header, headerShown:true}} />
              </Drawer.Navigator>
            </NavigationContainer>
        );
    }
   
  }
  
  export default AppNavigator;