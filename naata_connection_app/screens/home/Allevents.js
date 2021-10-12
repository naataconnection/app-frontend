import { Assets } from '@react-navigation/stack';
import React, {useState} from 'react';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import {ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,View, Image,TouchableHighlight,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton, Colors } from 'react-native-paper';

var tag="";
var iconSwapR = false; //For Rectangle Card
var iconSwapS = false; //For Square Card

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

  const [icon,setIcon] = useState("heart-outline");
  tag=props.tag;
  return (
    <View style={styles.rectanglecard}>
      <ImageBackground source={require('../../assets/bg.png')} style={styles.cardimage} imageStyle={{ borderRadius: 6}}>
        <View style={styleTag()}>
          <Text style={styles.tag} fontWeight={400} >{props.tag=="Live"?props.tag.toUpperCase(): props.tag} {props.tag=="Live"? <Text style={{fontSize:20}} >●</Text>: null}
          </Text>
        </View>
        
      <View style={styles.cardcontainer}>
        <Image blurRadius={10} source={require('../../assets/bg.png')} style={styles.cardcontainerimage} />    
        <IconButton icon={icon} 
        //onPress={()=>setIcon('heart')} onLongPress={()=>setIcon('heart-outline')}
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
          <Text style={styles.carddate}>25 September, 2:00 - 5:00 PM</Text>          
          <Text style={styles.cardsubtitle}>After The Sunset</Text>          
          <Text style={styles.cardtitle}>As We Keep Searching</Text>
      </View>
      </ImageBackground>
    </View>
  );
}

const RectangleMoreCard = () =>{
  return (
    <View style={styles.rectmorecard}>
      <Text style={styles.rectmorecardtext}>+10 More</Text>
    </View>
  );
}

const SquareCard = (props) =>{
  const [icon,setIcon] = useState("heart-outline");
  tag=props.tag;
  return (
    <View style={styles.squarecard}>
      <ImageBackground source={require('../../assets/bg_square.png')} style={styles.cardimage} imageStyle={{ borderRadius: 6}}>
        <View style={styleTag()}>
          <Text style={styles.tag} fontWeight={400} >{props.tag=="Live"?props.tag.toUpperCase(): props.tag} {props.tag=="Live"? <Text style={{fontSize:20}} >●</Text>: null}
          </Text>
        </View>
      <View style={styles.cardcontainer}>
        <Image blurRadius={10} source={require('../../assets/bg_square.png')} style={styles.cardcontainerimage} />    
        <IconButton icon={icon} 
        //onPress={()=>setIcon('heart')} onLongPress={()=>setIcon('heart-outline')}
         onPress={()=> {
           if(iconSwapS==false)
           {
             setIcon('heart');
             iconSwapS= true;
           }
           else{
             setIcon('heart-outline');
             iconSwapS= false;
           }
         }} 
          style={styles.like} color="white" size={32}/>  
          <Text style={styles.carddate}>25 September, 7:00 PM</Text>          
          <Text style={styles.cardsubtitle}>After The Sunset</Text>          
          <Text style={styles.cardtitle}>The Local Train</Text>
      </View>
      </ImageBackground>
    </View>
  );
}

const SquareMoreCard = () =>{
  return (
    <View style={styles.squamorecard}>
      <Text style={styles.squamorecardtext}>+10 More</Text>
    </View>
  );
}

const AllEvents = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View style={styles.scrollView}>
          <Text style={styles.heading}>Ongoing Events</Text>
          <ScrollView  horizontal={true} >
            <RectangleCard tag="Live" />
            <RectangleCard tag="Reg. Open" />
            <RectangleCard tag="Reg. Closed" />
            <RectangleMoreCard/>
          </ScrollView>
        </View>
        <View style={styles.scrollView}>
        <Text style={styles.heading}>Upcoming Events</Text>
          <View style={styles.upcomingevents}>
            <SquareCard tag="Reg. Open"></SquareCard>
            <SquareCard tag="Starts in 5h"></SquareCard>
          </View>
          <View style={styles.upcomingevents}>
            <SquareCard tag="Reg. Closed"></SquareCard>
            <SquareMoreCard></SquareMoreCard>
          </View>
        </View>
        <View style={styles.scrollView}>
          <Text style={styles.heading}>You May Also Like</Text>
          <ScrollView  horizontal={true}>
            <RectangleCard tag="Reg. Open" />
            <RectangleCard tag="Starts in 5h"/>
            <RectangleCard tag="Reg. Open" />
          <RectangleMoreCard/>
          </ScrollView>
        </View>
        <View style={styles.scrollView}>
          <Text style={styles.heading}>Concluded Events</Text>
          <ScrollView  horizontal={true}>
            <SquareCard tag="Reg. Open"/>
            <SquareCard tag="Starts in 5h"/>
            <SquareCard tag="Reg. Open"/>
            <SquareMoreCard/>
          </ScrollView>
        </View>        
      </ScrollView>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  upcomingevents:{
    flex:2,
    flexDirection:'row',
  },
  cardcontainer:{
    flex:3,
    flexDirection:'column-reverse',
    overflow:'hidden',
  },
  cardcontainerimage:{
    overflow:'hidden',
    height:80,
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
  container: {
    flex: 1,
    height:146,
  },
  scrollView: {
    marginHorizontal: 20,
    
  },
  text: {
    fontSize: 42,
  },
  rectanglecard:{
    width: 320,
    height: 170,
    borderRadius: 8,
    margin:10,
  },
  rectmorecard:{
    backgroundColor:'#1E1E1E',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width: 320,
    height: 170,
    borderRadius: 8,
    margin:10,
  },
  rectmorecardtext:{
    color:'rgba(255,255,255,0.6)',
  },
  squamorecardtext:{
    color:'rgba(255,255,255,0.6)',
  },  
  squamorecard:{
    backgroundColor:'#1E1E1E',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width: 170,
    height: 250,
    borderRadius: 8,
    marginLeft:10,
    marginTop:10,
  },  
  heading:{
    color:'rgba(255,255,255,0.87)',
    marginHorizontal:10,
    fontSize:16,
    lineHeight:15.71,
    marginTop:20,
  },
  squarecard:{
    height:250,
    width:170,
    borderRadius: 8,
    margin:10,
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

export default AllEvents;