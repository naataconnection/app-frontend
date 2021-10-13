import { useTheme } from '@react-navigation/native';
import React, {useEffect} from 'react';
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity, Linking, RefreshControl} from 'react-native';
import { connect } from 'react-redux';
import ErrorView from '../../components/ErrorScreen';
import Loader from '../../components/Loader';
import { SERVER_HOSTNAME } from '../../config';
import {fetchTeam} from '../../store/actions/TeamActions'
import InfoScreen from '../../components/InfoScreen';

const Team = ({teamData, fetchTeam, navigation}) => {

  const reload = ()=>{fetchTeam()};

  const {dark, colors} = useTheme();
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        reload();
      });
    return unsubscribe;
  }, [navigation])

  if(teamData.loading){
    return <Loader darkMode={dark}/>
  }

  if(teamData.error){
      return <ErrorView color={colors.normalText} imgUrl={dark?require('../../assets/error_dark.png'):require('../../assets/error_light.png')} error={"Oops! Something went wrong."} reload={reload} />;
  }

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color: colors.headerText, fontWeight: '700', fontSize: 20, marginTop: 10, textAlign: 'center'}}>{"Made with \uD83D\uDC9C by WebOps & Creatives"}</Text>
      <ScrollView style={{ flex: 1, width: '100%', marginTop:10}} showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex:teamData.data.length?0:1}}
        refreshControl={
        <RefreshControl
        refreshing={false}
        onRefresh={reload}
        />}>
      
      {teamData.data.length == 0 ? 

      (<InfoScreen color={colors.normalText}  imgUrl={dark?require('../../assets/blank_dark.png'):require('../../assets/blank_light.png')} info="Anonymous for Security Reasons :/" />)
      
      :( 
        teamData.data.map((item, index) => (
          <View style={[styles.teamWrapper, index == teamData.data.length - 1 ? {} : {borderBottomColor:dark?"rgba(173,173,173,0.2)":"#cccccc", borderBottomWidth: 0.2,}] } key={item.name + item.designation}>
            <View style={{flexDirection: 'row', width: '70%', alignItems: 'center'}}>
              <Image source={{uri: SERVER_HOSTNAME+item.image_url}} style={{width :40, height: 40, borderRadius: 100, marginRight: 16,backgroundColor:"gray"}} />
              <View style={{flexShrink: 1, width: '65%'}}>
                <Text style={{fontWeight: '700', color: "white", color: colors.normalText,}}>{item.name}</Text>
                <Text style={{color: 'white', opacity: 0.6, color: colors.normalText}}>{item.designation}</Text>
              </View>
            </View>
            <View style={styles.iconWrapper}>
              
              <TouchableOpacity 
              activeOpacity={0.7}
              onPress={() => Linking.openURL(item.github_or_Behance_Url) }
              >
                <Image source={
                  item.github_or_Behance_Url.includes('github') ? 
                  dark? require('../../assets/github1.png') : require('../../assets/github.png') : dark ?  require('../../assets/behance1.png'):  require('../../assets/behance.png')}  style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity 
              activeOpacity={0.7}
              onPress={() => Linking.openURL(item.linkedin_Url)}
              >
                <Image source={dark? require('../../assets/linkedin1.png') : require('../../assets/linkedin.png')} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        )))}
      </ScrollView>
    </SafeAreaView>
  ) 
     
}

const styles = StyleSheet.create({
  heading: {
    marginVertical:10,
    marginHorizontal:40,
    color: 'white',
    fontWeight: '700', 
    fontSize: 20,
    paddingVertical: 16,
    textAlign:'center',
    
  },
  teamWrapper :{
    flexDirection: 'row',
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-around'
  },
  icon: {
    width: 22,
    height: 22
    }
})

const mapStateToProps = (state) => {
  return {
    teamData : state.team
  }
}
export default connect(mapStateToProps, {fetchTeam})(Team);