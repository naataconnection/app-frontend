import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Dimensions} from 'react-native';
import { SafeAreaView, View, StyleSheet, Text, TouchableWithoutFeedback,Image } from 'react-native';
import SquareCard from '../../components/SquareCard';
import { SERVER_HOSTNAME } from '../../config';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const SquareMoreCard = (props) =>{
  const {colors} = useTheme();
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={[styles.squamorecard,{backgroundColor:colors.secondary}]}>
      <Image source={{uri:props.background}} blurRadius={10} style={{position: 'absolute', resizeMode:'cover', width:'100%', height:'100%'}}/>
      <Text style={{color: 'white'}}>{props.num>0?"+"+props.num+" More":"Thats All"}</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

const ListItem = (props) =>{
  const event = props.event;
  return <SquareCard 
    key={event.e_id}
    tag={event.details.tag}
    title={event.name}
    subtitle={event.details.module}
    date={event.details.period}
    msgRef={props.msgRef}
    eid={event.e_id}
    isLiked={event.details.is_liked}
    imageUrl={ SERVER_HOSTNAME + event.details.image_url}
    onPress={()=>{props.navigation.navigate('IndividualEvent',{e_id:event.e_id})}}/>
}

const GridList = (props) => {

  const upcomingEvents = props.upcomingEventsData;
  return (
    <SafeAreaView style={styles.upcomingevents}>
        {(upcomingEvents.length)?upcomingEvents.map(event => (
          <ListItem event={event} key={event.e_id} navigation={props.navigation} msgRef={props.msgRef}/>
        )):null}
        {props.num?
         <SquareMoreCard num={props.num} background={props.moreBg}
          onPress={()=>{props.navigation.navigate('EventList',{status:"Upcoming"})}}/>
        :null
        }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  upcomingevents:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    width:"100%",
    paddingHorizontal:10
  },
  squamorecard:{
    justifyContent:'center',
    alignItems:'center',
    height: Dimensions.get('window').width * 0.6, 
    width:"47%",
    borderRadius: 8,
    margin:"1.5%",
    overflow:'hidden',
  },  
});

export default GridList;