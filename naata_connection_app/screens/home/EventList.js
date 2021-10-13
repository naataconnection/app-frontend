import { Assets } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import {ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,View, Image,TouchableHighlight,TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton, Colors } from 'react-native-paper';
import RectangleCardFullWidth from '../../components/RectangleCardFullWidth';
import SquareCard from '../../components/SquareCard';
import { useSelector } from 'react-redux';
import SearchBox from '../../components/SearchBox';
const EventList = (props) =>{
  const {navigation} = props;
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView >
            <View style={styles.searchBoxContainer}>
              <SearchBox/>
          </View>
            <View style={styles.scrollView}>
              <ScrollView>
                <RectangleCardFullWidth tag="Live" onPress={()=>{navigation.navigate('IndividualEvent')}}/>
                <RectangleCardFullWidth tag="Reg. Open"/>
                <RectangleCardFullWidth tag="Reg. Closed"/>
                <RectangleCardFullWidth tag="Reg. Closed"/>
                <RectangleCardFullWidth tag="Reg. Closed"/>
                <RectangleCardFullWidth tag="Reg. Closed"/>
              </ScrollView>
            </View>        
          </ScrollView>
        </SafeAreaView> 
      );
}

const styles = StyleSheet.create({
  searchBoxContainer:{
    flex:1,
    alignItems: 'center',
  },
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

export default EventList;