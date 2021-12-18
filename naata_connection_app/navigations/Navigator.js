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
import Profile from '../screens/user/Profile';
import DieselEntry from '../screens/home/dieselEntryForm';


const eventStack = createStackNavigator();
const scheduleStack = createStackNavigator();
// const mapStack = createStackNavigator();
const podcastStack = createStackNavigator();
const profileStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const directoryStack = createStackNavigator();

const HomeTab = ({navigation,route, user}) => {
    // console.log("User from home tab", props.user);
    return (
        <eventStack.Navigator screenOptions={{header:Header, headerNotification:true}}>
            <scheduleStack.Screen name="Home">
              {props => <Allevents {...props} user={user} />}
            </scheduleStack.Screen>
            <scheduleStack.Screen name="DieselEntry">
              {props => <DieselEntry {...props} user={user}/>}
            </scheduleStack.Screen>
        </eventStack.Navigator>
       
    );
}

const ProfileTab = ({user}) => {
  return (
    <profileStack.Navigator screenOptions={{header:Header, headerNotification:true}}>
      <profileStack.Screen name="Profile"> 
        {props =>  <Profile {...props} user={user}/>}
      </profileStack.Screen>
      
    </profileStack.Navigator>
  );
}

const directoryTab =({navigation,route}) => {
        return (
                <directoryStack.Navigator screenOptions={{header:Header}}>
                    <directoryStack.Screen name="Directory" component={Directory}/>
                </directoryStack.Navigator>
            );
}
function ScheduleTab({navigation,route, user}) {
    console.log("Scehdule Tab");
    console.log(user);
    return (
        <scheduleStack.Navigator screenOptions={{header:Header}}>
            <scheduleStack.Screen name="Schedule">
              {props => <Schedule {...props} user={user} />}
            </scheduleStack.Screen>
            <scheduleStack.Screen name="ServiceRequest" component={ServiceRequest}/>
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


const TabScreen = ({route, navigation}) =>{
  console.log("User from tab screen");
  console.log(route.params.user);
  const user = route.params.user
  return (
    
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          if(route.name == 'Home'){
            icon = focused? require('../assets/icons/home_active.png') : require('../assets/icons/home.png');
          }
          else if(route.name == 'ServiceRequest'){
            icon = focused? require('../assets/icons/schedule_active.png') : require('../assets/icons/schedule.png');
          }
          else if(route.name == 'Profile'){
            icon = focused? require('../assets/icons/map_active.png') : require('../assets/icons/map.png');
          }

          return <Image source={icon} style={{height:20, width:20}}/>
        }
      })}
      tabBarOptions={{showLabel: false}}
      >
        <Tab.Screen name="Home">
          {props => <HomeTab {...props} user={user} />}
        </Tab.Screen>
        <Tab.Screen name="ServiceRequest">
        {props => <ScheduleTab {...props} user={user} />}
        </Tab.Screen>  
        <Tab.Screen name="Profile">
        {props => <ProfileTab {...props} user={user} />}
        </Tab.Screen>  
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
                <Drawer.Screen name="Tabs" component={TabScreen} />
                <Drawer.Screen name="Order" component={Order}/>
              </Drawer.Navigator>
            </NavigationContainer>
        );
    }
   
  }

  export default AppNavigator;