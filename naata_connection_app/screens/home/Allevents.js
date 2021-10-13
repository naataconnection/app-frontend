import { Assets } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import {ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,View, Image,TouchableHighlight, ActivityIndicator,TouchableWithoutFeedback, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton, Colors } from 'react-native-paper';
import RectangleCard from '../../components/RectangleCard';
import SquareCard from '../../components/SquareCard';
import SearchBox from '../../components/SearchBox.js';
import { useSelector, connect } from 'react-redux';
import {setEvents} from '../../store/Action';
import { event } from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RectangleMoreCard = (props) =>{
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.rectmorecard}>
        <Text style={styles.rectmorecardtext}>+10 More</Text>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const SquareMoreCard = () =>{
  return (
    <View style={styles.squamorecard}>
      <Text style={styles.squamorecardtext}>+10 More</Text>
    </View>
  );
}

const AllEvents = (props) => {

  const allEvents = props.allEvents;
  // console.log("ALLEVENTS");
  console.log(allEvents);
  // console.log(typeof allEvents);
  // console.log(Object.keys(allEvents).length);
  const ongoingEvents = allEvents.filter(event => event.status == 'Ongoing');
  const upcomingEvents = allEvents.filter(event => event.status == 'Upcoming');
  const concludedEvents = allEvents.filter(event => event.status == 'Concluded');
  
  useEffect(()=>{
    props.setEvents();
  },[props.loaded])

  if(!props.loaded) {
    return (
      <ActivityIndicator size="large" color="#ffffff"></ActivityIndicator>
    )
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView styel={{flexDirection:'column', flex:4}}>
        <View style={styles.searchBoxContainer}>
          <SearchBox/>
        </View>
        <View style={styles.scrollView}>
          <Text style={styles.heading}>Ongoing Events</Text>
          <ScrollView  horizontal={true} style={{flexDirection:'row'}}>
            
            {upcomingEvents.length!=0 &&  upcomingEvents.map(event => (
              <RectangleCard
                key={event.id}
                tag={event.details.tag}
                title={event.name}
                subtitle={event.details.module}
                date={event.details.period}
                imageUrl={event.details.image_url}
                // onPress={()=>{console.log(event.e_id)}}
                onPress={()=>{props.navigation.navigate('IndividualEvent',{e_id: event.e_id})}}
              />

            ))}
            <RectangleMoreCard onPress={()=>{props.navigation.navigate('EventList')}}/>
          </ScrollView>
        </View>
        
        <View style={styles.scrollView}>
        <Text style={styles.heading}>Upcoming Events</Text>
          <ScrollView horizontal={true}>
            <SquareCard tag="Reg. Open" onPress={()=>{props.navigation.navigate('IndividualEvent',{e_id:'E21002'})}}></SquareCard>
            <SquareCard tag="Starts in 5h"></SquareCard>
            <SquareCard tag="Reg. Closed"></SquareCard>
            <SquareMoreCard></SquareMoreCard>
          </ScrollView>
          {/* <View style={styles.upcomingevents}>
            <SquareCard tag="Reg. Closed"></SquareCard>
            <SquareMoreCard></SquareMoreCard>
          </View> */}
        </View>
        <View style={styles.scrollView}>
          <Text style={styles.heading}>You May Also Like</Text>
          <ScrollView  horizontal={true}>
          {upcomingEvents.length!=0 &&  upcomingEvents.map(event => (
              <RectangleCard
                key={event.id}
                tag={event.details.tag}
                title={event.name}
                subtitle={event.details.module}
                date={event.details.period}
                onPress={()=>{props.navigation.navigate('IndividualEvent',{e_id: event.e_id})}}
              />

          ))}
          <RectangleMoreCard/>
          </ScrollView>
        </View>
        <View style={styles.scrollView}>
          <Text style={styles.heading}>Concluded Events</Text>
          <ScrollView  horizontal={true}>
            {concludedEvents.length!=0 &&  concludedEvents.map(event => (
              <SquareCard
                key={event.e_id}
                tag={event.details.tag}
                title={event.name}
                subtitle={event.details.module}
                date={event.details.period}
                imageUrl={event.details.image_url}
                onPress={()=>{props.navigation.navigate('IndividualEvent',{e_id: event.e_id})}}
              />
            ))
            }
            <SquareMoreCard/>
          </ScrollView>
        </View>        
      </ScrollView>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  searchBoxContainer:{
    paddingLeft: '8%'
    // alignItems: 'center',

  },
  // upcomingevents:{
  //   flex:2,
  //   flexDirection:'row',
  // },
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
    alignItems: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  rectmorecard:{
    backgroundColor:'#1E1E1E',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width: windowWidth*0.8,
    height: windowHeight*0.25,
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

const mapStateToProps = state => ({
  allEvents: state.events.allEvents,
  loaded: state.events.loaded
})

export default connect(mapStateToProps, {setEvents})(AllEvents);