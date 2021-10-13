import React  from 'react';
import { StyleSheet, Text, View , Image, ImageBackground, TouchableHighlight} from 'react-native';
import TouchableImage from './TouchableImage'
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

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
  
  
function DrawerContent({navigation}){
  
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
        <IconDrawerItem label='Food' onPress={()=>{navigation.navigate('EventList')}}/>
        <IconDrawerItem label='Entertainment' onPress={()=>{navigation.navigate('IndividualEvent')}}/>
        <IconDrawerItem label={'Sponsors & Partners'} onPress={()=>{navigation.navigate('Map')}}/>
        <IconDrawerItem label='Directory' onPress={()=>{navigation.navigate('Directory')}}/>
        <IconDrawerItem label='The Team' onPress={()=>{navigation.navigate('Team')}}/>
        <IconDrawerItem label='FAQ' onPress={()=>{navigation.navigate('Faqs')}} noBottom={true}/>
  
        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between', marginLeft:20, marginTop:20, marginBottom:15, width: 150}}>
          <TouchableImage source={require('../assets/icons/social_fb.png')} imageStyle={{width:25, height:25, flex:1}}/>
          <TouchableImage source={require('../assets/icons/social_insta.png')} imageStyle={{width:25, height:25, flex:1}}/>
          <TouchableImage source={require('../assets/icons/social_twitter.png')} imageStyle={{width:25, height:25, flex:1}}/>
          <TouchableImage source={require('../assets/icons/social_web.png')} imageStyle={{width:25, height:25, flex:1, resizeMode:'contain'}}/>
        </View>
  
        <TouchableImage source={require('../assets/icons/btn_signOut.png')} onPress={()=>{navigation.navigate('Login')}}
          imageStyle={{width:220, height:44, display:'flex', justifyContent:'center', alignItems:'center'}} label={'Sign Out'}
          textStyle={{color:'white'}} touchableStyle={{marginLeft:20}}
        />
      </DrawerContentScrollView>
    );
  }

  export default DrawerContent;