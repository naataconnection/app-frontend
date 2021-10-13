import { Assets } from '@react-navigation/stack';
import React, {useState} from 'react';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import {ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,View, Image,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton, Colors } from 'react-native-paper';

var tag="";
var iconSwapR = false;

styleTag = function(){
    if(tag=="Live")
    {
      return (
        {
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          backgroundColor:'#FF7388',
          borderRadius:4,
          position:'absolute',
          top:5,
          left:5,
          paddingTop:0,
          paddingLeft:4,
          paddingRight:4,
          textTransform: 'uppercase',
        }
      );
    }
    else if(tag=="Reg. Open")
    {
      return (
        {
          backgroundColor:'#13BD8A',
          borderRadius:4,
          position:'absolute',
          top:5,
          left:5,
          padding:5,
        }
      );
    }
    else if(tag=="Reg. Closed"){
      return (
        {
          backgroundColor:'#FF7388',
          borderRadius:4,
          position:'absolute',
          top:5,
          left:5,
          padding:5,
        }
      );
    }
    else if(tag!= null){
      return (
        {
          backgroundColor:'#FFC716',
          borderRadius:4,
          position:'absolute',
          top:5,
          left:5,
          padding:5,
        }
      );
    }
  };

const RectangleCard = (props) =>{
    const imageUrl = require('../assets/bg.png');
    const [icon,setIcon] = useState("heart-outline");
    tag = props.tag;
    return (
      <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={styles.rectanglecard} >
        <ImageBackground source={imageUrl} style={styles.cardimage} imageStyle={{ borderRadius: 6}}>
          <View style={styleTag()}>
            <Text style={styles.tag} fontWeight={400} >{props.tag=="Live"?props.tag.toUpperCase(): props.tag} {props.tag=="Live"? <Text style={{fontSize:20}} >●</Text>: null}
            </Text>
          </View>
          
        <View style={styles.cardcontainer}>
          <Image blurRadius={10} source={require('../assets/bg.png')} style={styles.cardcontainerimage} />    
          <IconButton icon={icon} 
           onPress={()=> {
             if(iconSwapR==false)
             {
               setIcon('heart');
               iconSwapR= true;
             }
             else{
               setIcon('heart-outline');
               iconSwapR= false;
             }
          }} 
            style={styles.like} color="white" size={32}/>
            <Text style={styles.carddate}>{props.date}</Text>          
            <Text style={styles.cardsubtitle}>{props.subtitle}</Text>          
            <Text style={styles.cardtitle}>{props.title}</Text>
        </View>
        </ImageBackground>
      </View>
      </TouchableWithoutFeedback>
      
    );
  }

  const styles = StyleSheet.create({
    cardcontainer:{
      flex:3,
      flexDirection:'column-reverse',
      overflow:'hidden',
    },
    cardcontainerimage:{
      overflow:'hidden',
      height:'48%',
      width:'100%',
      position:'absolute',
      bottom:0,
      left:0,
      right:0,
      zIndex:-1,
      borderRadius: 6,
    },
    cardimage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      borderRadius:10,
    },
    cardtitle: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight:'700',
      paddingLeft:10,
      paddingTop:5,
    },  
    cardsubtitle:{
      color: '#FFFFFF',
      fontSize: 15,
      paddingLeft:10,    
    },
    carddate:{
      color: '#FFFFFF',
      fontSize: 15,
      paddingLeft:10,
      paddingBottom:5,
    },
    scrollView: {
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
    rectanglecard:{
      width: '55%',
      height: '90%',
      borderRadius: 8,
      margin:10,
    },
    rectmorecardtext:{
      color:'rgba(255,255,255,0.6)',
    },
    heading:{
      color:'rgba(255,255,255,0.87)',
      marginHorizontal:10,
      fontSize:16,
      lineHeight:15.71,
      marginTop:20,
    },
    like:{
      position:'absolute',
      top:0,
      right:2,
    },
    tag:{
      color:"white",
      fontFamily:'SF Pro Display',
    }
  });
export default RectangleCard;