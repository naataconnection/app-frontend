import * as React from 'react';
import { View, Text, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  Schedule  from "../screens/schedules/Allschedule";
// import Notification from "../screens/notifications/notification";
import Allevents from "../screens/home/Allevents";
import GetOTP from '../screens/registrations/GetOTP';
import Login from '../screens/registrations/Login';
// import Map from '../screens/map/Map';
import Directory from '../screens/Directory/Directory';
import EventList from '../screens/home/EventList';
import IndividualEvent from '../screens/home/IndividualEvent';
import DrawerContent from '../components/DrawerContent';
import Header from "../components/Header";
import FAQ from '../screens/drawer/FAQs';
import ServiceRequest from "../screens/schedules/ServiceRequest";
import Order from "../screens/schedules/Order";


const Events = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Home Screen</Text>
      <Button
        title="Go to Home again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
const Podcast = () =>  {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to Techniche Podcast</Text>
      </View>
    );
  }

const Team = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Techniche Team</Text>  
      <Button
        title="Go to Home again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Map = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Techniche Map</Text>  
    </View>
  );
}


const eventStack = createStackNavigator();
const scheduleStack = createStackNavigator();
// const mapStack = createStackNavigator();
const podcastStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const directoryStack = createStackNavigator();


const homeTab = ({navigation,route}) => {
    return (
        <eventStack.Navigator screenOptions={{header:Header, headerNotification:true}}>
            <eventStack.Screen name="Home" component={Allevents}/>
            <eventStack.Screen name="EventList" component={EventList}/>
            <eventStack.Screen name="IndividualEvent" component={IndividualEvent}/>
        </eventStack.Navigator>
       
    );
}
const directoryTab =({navigation,route}) => {
        return (
                <directoryStack.Navigator screenOptions={{header:Header}}>
                    <directoryStack.Screen name="Directory" component={Directory}/>
                </directoryStack.Navigator>
            );
}
function scheduleTab({navigation,route}) {
    return (
        <scheduleStack.Navigator screenOptions={{header:Header}}>
            <scheduleStack.Screen name="Schedule" component={Schedule} />
        </scheduleStack.Navigator>
       
    );
}

function mapTab({navigation, route}) {
    return (
        <mapStack.Navigator screenOptions={{header:Header}}>
            <mapStack.Screen name="Map" component={Map} />
        </mapStack.Navigator>
       
    );
}

function podcastTab() {
    return (
        <podcastStack.Navigator>
            <podcastStack.Screen name="Podcast" component={Podcast} />
        </podcastStack.Navigator>
       
    );
}


const TabScreen = () =>{
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          if(route.name == 'Home'){
            icon = focused? require('../assets/icons/home_active.png') : require('../assets/icons/home.png');
          }
          else if(route.name == 'Schedule'){
            icon = focused? require('../assets/icons/schedule_active.png') : require('../assets/icons/schedule.png');
          }
          else if(route.name == 'Map'){
            icon = focused? require('../assets/icons/map_active.png') : require('../assets/icons/map.png');
          }

          return <Image source={icon} style={{height:20, width:20}}/>
        }
      })}
      tabBarOptions={{showLabel: false}}
      >
        <Tab.Screen name="Home" component={homeTab} />
        <Tab.Screen name="Schedule" component={scheduleTab} />
        <Tab.Screen name="Map" component={ServiceRequest} />
        {/* <Tab.Screen name="Podcast" component={podcastTab} /> */}
    </Tab.Navigator>
  );
}



class AppNavigator extends React.Component  {
    render() {
        return (
            <NavigationContainer theme={DefaultTheme}>
              <Drawer.Navigator initialRouteName="Login" drawerContent={props=><DrawerContent {...props} />} >
                <Drawer.Screen name="Login" component={Login} options={{header:Header, headerShown:false}} />
                <Drawer.Screen name="GetOTP" component={GetOTP} options={{header:Header, headerShown:false}} />
                <Drawer.Screen name="Directory" component={directoryTab} options={{header:Header, headerShown:false}} />
                <Drawer.Screen name="Tabs" component={TabScreen} />
                <Drawer.Screen name="Order" component={Order}/>
                <Drawer.Screen name="Team" component={Team} options={{header:Header, headerShown:true}} />
                <Drawer.Screen name="Events" component={Events} options={{header:Header, headerShown:true}} />
                <Drawer.Screen name="EventList" component={EventList} options={{header:Header, headerShown:true}} />
                <Drawer.Screen name="IndividualEvent" component={IndividualEvent} options={{header:Header, headerShown:true}} />
                <Drawer.Screen name="Faqs" component={FAQ} options={{header: Header, headerShown: true}}/>
              </Drawer.Navigator>
            </NavigationContainer>
        );
    }
   
  }

  export default AppNavigator;