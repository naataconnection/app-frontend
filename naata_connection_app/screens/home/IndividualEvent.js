import { Assets } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import {ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,View, Image,TouchableHighlight,TouchableOpacity, ActivityIndicator, Animated, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton, Colors } from 'react-native-paper';
import RectangleCardFullWidth from '../../components/RectangleCardFullWidth';
import SquareCard from '../../components/SquareCard';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import GeneralGradientButton from '../../components/GeneralGradientButton.js';
import SliderButton from './Slider.js';
import {connect} from 'react-redux';

var tag="";
var iconSwapR = false;
var slideLeft = false;
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


function TouchableImage(props){
  return(
    <TouchableHighlight style={props.touchableStyle} onPress={props.onPress}>
      <ImageBackground source={props.source} style={props.imageStyle}>
        {props.label?<Text style={props.textStyle}>{props.label}</Text>:null}
        {props.badge}
      </ImageBackground>
    </TouchableHighlight>
  )
}

const IndividualEvent = (props)=>{
    // const imageUrl = { uri:'../../assets/btn_signOut.png'};
    const [icon,setIcon] = useState("heart-outline");  
    const event = props.events.find(event => event.e_id == props.route.params.e_id);
    console.log(event)
    if(event==="undefined")event=false;
    tag = props.tag;
    return (
        <View style={styles.container}>
            <GeneralGradientButton 
                    content="Log In"/>

            <ImageBackground source={event?{uri:'http://192.168.1.142:8000'+event.details.image_url}:require('../../assets/eventind.png')} style={styles.image}>
                {event?
                <View style={styleTag()}>
                    <Text style={styles.tag} fontWeight={400} >{event.details.tag} {event.details.tag=="LIVE"? <Text style={{fontSize:20}} >●</Text>: null}
                    </Text>
                </View>:null
                }
            </ImageBackground>

            <View style={styles.part2}>
                <IconButton icon={icon} 
                    onPress={()=> {
                        if(iconSwapR==false)
                        {
                        setIcon("heart");
                        iconSwapR= true;
                        }
                        else{
                        setIcon("heart-outline");
                        iconSwapR= false;
                        }
                    }} 
                style={styles.like} color="white" size={32}/>

                <Text style={styles.eventName}>{event?event.name:'Event'}</Text>

                <Text style={styles.eventTag}>{event?event.details.module:''}</Text>

                <TouchableOpacity activeOpacity={0.7} style={styles.eventPosition}>
                    <Image style={styles.imageStyle} source={require('../../assets/clock.png')}/>
                    <Text style={styles.eventText}>{event?event.details.period:''}</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={styles.eventPosition}>
                    <Image style={styles.imageStyle} source={require('../../assets/location.png')}/>
                    <Text style={styles.eventText}>{event?event.details.location.name:''}</Text>
                </TouchableOpacity>

                <Text style={styles.eventDescription}>{event?event.details.desc:''}</Text>

                <View style={styles.eventLinks}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.eventPosition}>
                        <Image style={styles.imageStyle} source={require('../../assets/rulebook.png')}/>
                        <Text style={styles.eventLinkText}>Rule Booklet</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={styles.eventPosition}>
                        <Image style={styles.imageStyle} source={require('../../assets/info.png')}/>
                        <Text style={styles.eventLinkText}>Information on Speaker/Topic</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.7} style={styles.eventPosition}>
                        <Image style={styles.imageStyle} source={require('../../assets/phone.png')}/>
                        <Text style={styles.eventLinkText} >PR-99999999</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.registerButton}>
                    <GeneralGradientButton onPress={()=> props.navigation.navigate('Tabs')}
                 content="Register For ₹499"/>
                </View> */}
                {/* <GeneralGradientButton content="Register For ₹499"/> */}
                <TouchableImage source={require('../../assets/icons/btn_signOut.png')}
                  imageStyle={{marginTop:80,overflow: 'hidden', borderRadius:10,width:'100%', height:44,display:'flex', justifyContent:'center', alignItems:'center'}} label={'Register For ₹499'}
                  textStyle={{color:'white'}} touchableStyle={{marginLeft:5}}
                />
            </View>
        </View>       
      );
} 

const styles = StyleSheet.create({
    container:{
        flex:2,
        flexDirection:'column',
    },
    sliderContainer:{
      marginTop:30,
      flex:1,
      flexDirection:'row',
      alignItems:'flex-start',
      justifyContent:'flex-end',
      width:"100%",
    },
    cardimage: {
    },
    rectanglecard:{
        width: 400,
        height: 170,
        borderRadius: 8,
    }, 
    heading:{
        color:'rgba(255,255,255,0.87)',
        marginHorizontal:10,
        fontSize:16,
        lineHeight:15.71,
        marginTop:20,
    },
    part2:{
        height: '100%',
        borderRadius:30,
        backgroundColor:'#181818',
        top:'30%',
        padding:20,
    },
    like:{
      position:'absolute',
      top:5,
      right:0,
      zIndex:30,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        position: 'absolute',
        width:'100%',
        height:'70%',
    },
    tag:{
      color:"white",
      fontFamily:'SF Pro Display',
    },
    eventName:{
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFFFFF",
    },
    eventText:{
        fontFamily: "SF Pro Display",
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.6)",
    },
    eventTag:{
        marginTop:10,
        marginBottom:20,
        fontFamily: "SF Pro Display",
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.6)",
    },
    eventDescription:{
        marginVertical:30,
        fontFamily: "SF Pro Display",
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.6)",
    },
    eventLinkText:{
        color: "#7F43E1",
        textDecorationLine:"underline",
    },
    eventPosition:{
        display:"flex",
        flexDirection:"row",
    },
    imageStyle:{
        marginRight:7,
        height:15,
        width:15,
    },
    registerButton:{
      zIndex:30,
      marginTop:20,
      paddingHorizontal:5,
    }
});

const mapStateToProps = state => ({
  events: state.events.allEvents
})

export default connect(mapStateToProps, null)(IndividualEvent);