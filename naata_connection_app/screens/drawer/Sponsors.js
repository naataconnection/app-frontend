import { useTheme } from '@react-navigation/native';
import React, {useEffect} from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, Linking, SafeAreaView, ScrollView, RefreshControl} from 'react-native';
import { connect } from 'react-redux';
import ErrorView from '../../components/ErrorScreen';
import Loader from '../../components/Loader';
import { SERVER_HOSTNAME } from '../../config';
import {fetchSponsors} from '../../store/actions/sponsorActions'
import InfoScreen from '../../components/InfoScreen';

const Sponsors = ({sponsorData, fetchSponsors,navigation}) => {

  const {dark, colors} = useTheme();

  const reload = ()=>{fetchSponsors()};

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        reload();
      });
    return unsubscribe;
}, [navigation])

  if(sponsorData.loading){
    return <Loader darkMode={dark}/>
  }

  if(sponsorData.error){
      return <ErrorView color={colors.normalText} imgUrl={dark?require('../../assets/error_dark.png'):require('../../assets/error_light.png')} error={"Oops! Something went wrong."} reload={reload} />;
  }

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 20}}>
      <Text style={[styles.heading, {color: colors.headerText}]}>Sponsors and Partners</Text>
      
      <ScrollView style={{ flex: 1}} showsVerticalScrollIndicator={false} contentContainerStyle={{flex:sponsorData.data.length?0:1}}
        refreshControl={
        <RefreshControl
        refreshing={false}
        onRefresh={reload}
        />}>
          {sponsorData.data.length === 0?
        (<InfoScreen color={colors.normalText}  imgUrl={dark?require('../../assets/blank_dark.png'):require('../../assets/blank_light.png')} info="There's Nothing here. Whatever you were looking for is not here at present. Unless, of course, you came all the way here to see this message in which case, 'Hello human!' ;)" />)
        : 
        sponsorData.data.map((item, index) => (
          <TouchableOpacity 
          onPress={() => {
            if(item.website && item.website.startsWith("http")){
              Linking.openURL(item.website).catch(err=>console.log(err));
            } 
          }}
          activeOpacity={0.7}
          style={[styles.wrapper,{backgroundColor:colors.secondary}]} 
          key={item.name}>
            <Image source={{uri: SERVER_HOSTNAME+item.logo_url}} style={styles.logo} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      </SafeAreaView>
  )
     
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontWeight: '700', 
    fontSize: 20,
    paddingVertical: 10,
    marginBottom:10
    
  },
  wrapper: {
    width: '100%', 
    alignItems: 'center',
    marginBottom: 16,
    borderRadius:10,
    overflow:"hidden"
  },
  logo: {
    width : "100%",
    height: 160,
    borderRadius : 8,
  }
})

const mapStateToProps = (state) => {
  return {
    sponsorData : state.sponsor
  }
}
export default connect(mapStateToProps, {fetchSponsors})(Sponsors);