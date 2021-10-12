import * as React from 'react';
import { View, Text, Button, Image, TouchableHighlight, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import  Schedule  from "../screens/schedules/Allschedule";
import Allevents from "../screens/home/Allevents";
import SignUp from '../screens/registrations/SignUp';
import Login from '../screens/registrations/Login';
const Home = ({navigation}) => {
  // console.log(navigation);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Allevents/>
    </View>
  );
}
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
const mapStack = createStackNavigator();
const podcastStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TouchableImage(props){
  return(
    <TouchableHighlight style={props.touchableStyle} onPress={props.onPress}>
      <ImageBackground source={props.source} style={props.imageStyle}>
        {props.label?<Text style={props.textStyle}>{props.label}</Text>:null}
      </ImageBackground>
    </TouchableHighlight>
  )
}

function Header({navigation,scene}){
  return (
    <View style={{backgroundColor:'#1e1e1e', height:50, display: 'flex', justifyContent:'center'}}>
      {(['Home','Schedule','Map'].includes(scene.route.name))?
        <TouchableImage onPress={() => navigation.openDrawer() }
        source={require('../assets/icons/drawer.png')} imageStyle={{height:25,width:25, margin:10}}/> :
        <TouchableImage onPress={()=> {navigation?navigation.goBack():scene.descriptor.navigation.jumpTo('Tabs')}} 
        source={require('../assets/icons/hdr_back.png')} imageStyle={{height:20,width:20, margin:10}}/>
      }
    </View>
  );
  

}

const homeTab = ({navigation,route}) => {
    return (
        <eventStack.Navigator screenOptions={{header:Header}}>
            <eventStack.Screen name="Home" component={Home}/>

        </eventStack.Navigator>
       
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
  //   <Drawer.Navigator initialRouteName="Home">
  //   <Drawer.Screen name="Home" component={homeTab} />
  //   <Drawer.Screen name="Team" component={Team} />
  //   <Drawer.Screen name="SignUp" component={SignUp} />
  //   <Drawer.Screen name="Login" component={Login} />
  // </Drawer.Navigator>

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
        <Tab.Screen name="Map" component={mapTab} />
        {/* <Tab.Screen name="Podcast" component={podcastTab} /> */}
    </Tab.Navigator>
  );
}

function IconDrawerItem(props){
  let icon;
  if(props.label=='My Events')
    icon = require('../assets/icons/dw_myEvents.png')
  else if(props.label=='Food')
    icon = require('../assets/icons/dw_food.png')
  else if(props.label=='Entertainment')
    icon = require('../assets/icons/dw_entertainment.png')
  else if(props.label=='Sponsors & Partners')
    icon = require('../assets/icons/dw_SnP.png')
  else if(props.label=='Directory')
    icon = require('../assets/icons/dw_directory.png')
  else if(props.label=='The Team')
    icon = require('../assets/icons/dw_team.png')
  else 
    icon = require('../assets/icons/dw_faq.png')
  
  const styles = StyleSheet.create({
    view:{
      display: 'flex',
      flexDirection:'row',
      padding: 10,
    },
    text:{
      color: 'grey',
      fontSize: 14
    },
    image:{
      height: 20,
      width: 20,
      marginHorizontal: 10
    },
    bar:{
      marginHorizontal: 30,
      backgroundColor:'#adadad',
      opacity:0.15,
      height:1,
      flex:1,
    }
  });
  return(
    <TouchableHighlight onPress={props.onPress}>
      <View >
        <View style={styles.view}>
        <Image source={icon} style={styles.image}/>
        <Text style={styles.text}>{props.label}</Text>
        </View>
        {!props.noBottom?<View style={styles.bar}/>:null}
      </View>
    </TouchableHighlight>
  )
}


function DrawerContent({navigation, props}){

  return(
    <DrawerContentScrollView>
      <ImageBackground source={require('../assets/dw_bg.png')} style={{height: 150}}>
        <TouchableImage touchableStyle={{display:'flex',padding:10, borderRadius:20, height:40, width:40, position:'absolute', bottom:10, right:10, backgroundColor:'#1E1E1E'}}
          source={require('../assets/icons/dw_light.png')}
          imageStyle={{ height:20, width:20}}
        />       
      </ImageBackground>

      <View style={{display:'flex', flexDirection:'row', alignItems:'center', marginVertical:15}}>
        <Text style={{color:'white', fontSize:20, fontWeight:'bold',marginLeft:20 }}>{'Jane Doe'}</Text>
        <TouchableImage source={require('../assets/icons/dw_edit.png')} imageStyle={{height:20, width:20, margin:10}}/>     
      </View>

      <IconDrawerItem label='My Events' onPress={()=>{navigation.navigate('Events')}}/>
      <IconDrawerItem label='Food' onPress={()=>{navigation.navigate('Map')}}/>
      <IconDrawerItem label='Entertainment' onPress={()=>{navigation.navigate('Map')}}/>
      <IconDrawerItem label={'Sponsors & Partners'} onPress={()=>{navigation.navigate('Map')}}/>
      <IconDrawerItem label='Directory' onPress={()=>{navigation.navigate('Map')}}/>
      <IconDrawerItem label='The Team' onPress={()=>{navigation.navigate('Team')}}/>
      <IconDrawerItem label='FAQ' onPress={()=>{navigation.navigate('Map')}} noBottom={true}/>

      <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between', marginLeft:20, marginTop:20, marginBottom:15, width: 150}}>
        <TouchableImage source={require('../assets/icons/social_fb.png')} imageStyle={{width:25, height:25, flex:1}}/>
        <TouchableImage source={require('../assets/icons/social_insta.png')} imageStyle={{width:25, height:25, flex:1}}/>
        <TouchableImage source={require('../assets/icons/social_twitter.png')} imageStyle={{width:25, height:25, flex:1}}/>
        <TouchableImage source={require('../assets/icons/social_web.png')} imageStyle={{width:25, height:25, flex:1, resizeMode:'contain'}}/>
      </View>

      <TouchableImage source={require('../assets/icons/btn_signOut.png')}
        imageStyle={{width:220, height:44, display:'flex', justifyContent:'center', alignItems:'center'}} label={'Sign Out'}
        textStyle={{color:'white'}} touchableStyle={{marginLeft:20}}
      />
    </DrawerContentScrollView>
  );
}

class AppNavigator extends React.Component  {
    render() {
        return (
            <NavigationContainer theme={DarkTheme}>
              <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props} />} >
                <Drawer.Screen name="Tabs" component={TabScreen} />
                <Drawer.Screen name="Team" component={Team} options={{header:Header, headerShown:true}} />
                <Drawer.Screen name="Events" component={Events} options={{header:Header, headerShown:true}} />
              </Drawer.Navigator>
            </NavigationContainer>
        );
    }
   
  }
  
  export default AppNavigator;