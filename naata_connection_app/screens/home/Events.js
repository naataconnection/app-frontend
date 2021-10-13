import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView,View} from 'react-native';
import RectangleCardFullWidth from '../../components/RectangleCardFullWidth';
import { connect} from 'react-redux';
import { SERVER_HOSTNAME } from '../../config';
import InfoScreen from '../../components/InfoScreen';
import { useTheme } from '@react-navigation/native';
import ErrorView from '../../components/ErrorScreen';
const Events = (props) =>{

  const {dark, colors} = useTheme();

  const {navigation} = props;
  const events = props.events.filter(event => event.details.is_liked === true);

  if(props.errorStatus){
    return (<ErrorView color={colors.normalText} imgUrl={dark?require('../../assets/error_dark.png'):require('../../assets/error_light.png')} error={"Oops! Something went wrong."} />);
  }

  return (events.length?
        (<SafeAreaView style={styles.container}>
            {
            /* <View style={styles.searchBoxContainer}>
              <SearchBox/>
          </View> */}
            {/* <View style={styles.scrollView}> */}
              <Text style={{color: colors.headerText, fontWeight: '700', fontSize: 20,width : '95%' , marginVertical:10}}>My Events</Text>
                <ScrollView  showsVerticalScrollIndicator={false} style={{width:'95%'}} >
                  {events.length!=0 && events.map(event =>(
                    <RectangleCardFullWidth 
                      key={event.e_id}
                      tag={event.details.tag}
                      title={event.name}
                      subtitle={event.details.module}
                      date={event.details.period}
                      eid={event.e_id}
                      isLiked={event.details.is_liked}
                      imageUrl={ SERVER_HOSTNAME + event.details.image_url}
                      onPress={()=>{props.navigation.navigate('IndividualEvent',{e_id: event.e_id})}}
                    />
                  ))}
                </ScrollView>
            {/* </View>         */}
        </SafeAreaView>):
         (<SafeAreaView style={{flex: 1, paddingHorizontal: 20}}>
           <Text style={{color: colors.headerText, fontWeight: '700', fontSize: 20,width : '95%' , marginVertical:10}}>My Events</Text>
           <InfoScreen color={colors.normalText}  imgUrl={dark?require('../../assets/blank_dark.png'):require('../../assets/blank_light.png')} info="Looks like you haven't bookmarked any events yet :'(" />
          </SafeAreaView>)
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    alignItems:"center",
    width:"100%",

  },
  // scrollView: {
  //   // marginVertical:"0%",
  //   width:"95%",
  //   alignSelf:'center',
  //   marginVertical: 10,
  //   backgroundColor: 'skyblue'
  // },
  searchBoxContainer:{
    flex:1,
    alignItems: 'center',
    width:"100%",
    marginBottom:0,
  },
});

const mapStateToProps = state => ({
  events: state.events.allEvents,
  errorStatus: state.events.error,
})

export default connect(mapStateToProps,null)(Events);