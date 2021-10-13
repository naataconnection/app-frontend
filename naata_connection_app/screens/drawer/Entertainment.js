import { Dimensions,Linking} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView,View, Image, RefreshControl, TouchableWithoutFeedback, FlatList} from 'react-native';
import { connect } from 'react-redux';
import {fetchEntertainment} from '../../store/actions/EntertainmentActions';
import { SERVER_HOSTNAME } from '../../config';
import Loader from '../../components/Loader';
import { useTheme } from '@react-navigation/native';
import InfoScreen from '../../components/InfoScreen';
import ErrorView from '../../components/ErrorScreen';

const RectangleContentCard = (props) =>{
  const imageUrl = require('../../assets/bg.png');
  let [cardHeight, setCardHeight] = useState(0);
  // console.log(SERVER_HOSTNAME+props.imageUrl);
  // console.log(imageUrl);
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.rectcard} onLayout={(e)=>{setCardHeight(e.nativeEvent.layout.height)}}>
        <ImageBackground source={props.imageUrl?{uri:props.imageUrl}:imageUrl} style={styles.cardimage} imageStyle={{ borderRadius: 6}}>

          <View style={styles.cardcontainer}>
              <View style={styles.rectblurredContainer}>
                <Image blurRadius={10} source={props.imageUrl?{uri:props.imageUrl}:imageUrl} style={[styles.rectcardcontainerimage,{height:cardHeight}]} />
              </View>  
              <View style={styles.rectcardcontainerbottom}>       
                <Text style={styles.cardsubtitle}>{props.subtitle}</Text>          
                <Text style={styles.cardtitle}>{props.title}</Text>
              </View>
            </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const SquareContentCard = (props) =>{
  const imageUrl = require('../../assets/bg.png');
  return (
    <TouchableWithoutFeedback onPress={props.onPress} style={{height:100}}>
      <View style={styles.squarecard}>
        <ImageBackground source={props.imageUrl?{uri:props.imageUrl}:imageUrl} style={styles.cardimage} imageStyle={{ borderRadius: 6}}>

          <View style={styles.cardcontainer}>
              <View style={styles.sqblurredContainer}>
                <Image blurRadius={10} source={props.imageUrl?{uri:props.imageUrl}:imageUrl} style={styles.sqcardcontainerimage} />
              </View>  
              <View style={styles.sqcardcontainerbottom}>       
                <Text style={styles.cardsubtitle}>{props.subtitle}</Text>          
                <Text style={styles.cardtitle}>{props.title}</Text>
              </View>
            </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const Entertainment = (props) => {

  const {dark, colors} = useTheme();

  const reload = ()=>{props.fetchEntertainment()};

    useEffect(() => {
      const unsubscribe = props.navigation.addListener('focus', () => {
          reload();
        });
      return unsubscribe;
    }, [props.navigation])


   if(props.error){
       return (
       <ErrorView color={colors.normalText} imgUrl={dark?require('../../assets/error_dark.png'):require('../../assets/error_light.png')} error={"Oops! Something went wrong."} />
       )
   }
   if(props.loading) {
       return (
        <Loader/>
       )
   }
  
  return (
  <SafeAreaView style={styles.container}>
      <Text style={{color: colors.headerText, fontWeight: '700', fontSize: 20, marginVertical: 10, width: '100%'}}>{"Entertainment"}</Text>
      <ScrollView style={{flex:1, width:'100%'}} contentContainerStyle={{flex:Object.entries(props.data).length?0:1}} 
       refreshControl={
        <RefreshControl
        refreshing={false}
        onRefresh={reload}
        />}
        showsVerticalScrollIndicator={false}>

        {Object.entries(props.data).length?

        Object.entries(props.data).map((item)=>(
          <View style={item[0]=='VDO'?styles.scrollView:styles.gridView} key={item[0]}>
            <Text style={[styles.heading, {color: colors.headerText}]}>{item[0]=='VDO'?"Highlights": item[0]=='FTR'?"Photo Filters" : "Others" }</Text>
              
              {item[0]=='VDO'?

              <ScrollView style={{backgroundColor:"pink"}} showsHorizontalScrollIndicator={false}  horizontal={true} style={{flexDirection:'row', height:170,paddingHorizontal:10}}>
                {item[1].map((item) =>(<RectangleContentCard
                                        key={item.url}
                                        title={item.name}
                                        imageUrl={SERVER_HOSTNAME + item.image_url}
                                        subtitle={item.subtitle}
                                        onPress={() => Linking.openURL(item.url)}
                                      />))}
              </ScrollView>
            :
              <View style={{flex:1, flexDirection:"row", flexWrap:"wrap",paddingHorizontal:10}}>
                {item[1].map((item)=>(<SquareContentCard
                                        key={item.url}
                                        title={item.name}
                                        imageUrl={SERVER_HOSTNAME + item.image_url}
                                        subtitle={item.subtitle}
                                        onPress={() => Linking.openURL(item.url)}
                                      />))}
              </View>}
        </View>))
        :
        <InfoScreen color={colors.normalText} imgUrl={dark?require('../../assets/blank_dark.png'):require('../../assets/blank_light.png')} info="There's Nothing here. Whatever you were looking for is not here at present. Unless, of course, you came all the way here to see this message in which case, 'Hello human!' ;)" />
        }
      </ScrollView>
  </SafeAreaView> 
  );
  



}

const styles = StyleSheet.create({
  searchBoxContainer:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:"98%",

  },
  upcomingevents:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  cardcontainer:{
    flex:1,
    flexDirection:'column-reverse',
    overflow:'hidden',
  },
  sqcardcontainerbottom:{
      flex:1,
      flexDirection:'column-reverse',
      alignItems:'flex-start',
      overflow:'hidden',
      padding:5,
    },
   rectcardcontainerbottom:{
      flex:1,
      flexDirection:'column-reverse',
      alignItems:'flex-start',
      overflow:'hidden',
      padding: 10,
      // height:"60%",
    },
   rectblurredContainer:{
      overflow:'hidden',
      width:'100%',
      height:'49%',
      position:'absolute',
      bottom:0,
      borderRadius: 8,
    },
    sqblurredContainer:{
      overflow:'hidden',
      width:'100%',
      height:'40%',
      position:'absolute',
      bottom:0,
      borderRadius: 6,
    },
   rectcardcontainerimage:{
      width:'100%',
      position:'absolute',
      bottom:0,
      zIndex:-1,
    },
    sqcardcontainerimage:{
      height:Dimensions.get('window').width * 0.18,
      zIndex:-1,
      position:'absolute',
      bottom:0,
      width:'100%',
      borderRadius:6,
    },
  cardimage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      borderRadius:10,
      backgroundColor: 'gray'
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
    flexDirection: 'column',
    alignItems: 'center',
    width:'100%',
    paddingLeft:10,
    paddingRight:5
  },
  scrollView: {
    width:"100%",
    // height:"auto",
    // marginLeft: "1%",
    marginVertical:"2%",
  },
  gridView: {
    marginVertical:"2%",
  },
  text: {
    fontSize: 42,
  },
  youMayAlsoLikeView:{
    // marginTop:"60%",
    marginTop:"6%",
  },
  rectcard:{
    width:310,
      height: '93%',
      borderRadius: 8,
      margin:10,
  },
  squarecard:{
     height: Dimensions.get('window').width * 0.6, 
      width:"44%",
      borderRadius: 8,
      margin:"3%",
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
     height:"80%",
      width:"45%",
      borderRadius: 8,
    margin:10,
  },  
  heading:{
    color:'rgba(255,255,255,0.87)',
    marginHorizontal:"4%",
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEntertainment: () => dispatch(fetchEntertainment())
    }
}

const mapStateToProps = state => ({
  loading: state.entertainment.loading,
  // highlightsContent: state.entertainment.data.filter(content => content.category == 'VDO'),
  // photoFilterContent: state.entertainment.data.filter(content => content.category == 'FTR'),
  data: state.entertainment.data,
  error:state.entertainment.error,
})

export default connect(mapStateToProps,mapDispatchToProps)(Entertainment);