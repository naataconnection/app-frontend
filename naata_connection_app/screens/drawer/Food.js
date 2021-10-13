import { useTheme } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View , Text, SafeAreaView, Image, TouchableOpacity, RefreshControl, ScrollView, Switch} from 'react-native';
import { IconButton } from 'react-native-paper';
import { connect, useDispatch } from 'react-redux';
import { SERVER_HOSTNAME } from '../../config';
import { fetchFood } from '../../store/actions/FoodActions';
import {SET_MAP_FOCUS} from '../../store/actions/MapActions';
import Loader from '../../components/Loader';
import { downloadFileAsync } from '../../store/actions/DownloadFileActions';
import MessageBubble from '../../components/MessageBubble';
import InfoScreen from '../../components/InfoScreen';
import ErrorView from '../../components/ErrorScreen';

const FoodItem = (props) => {
    const item = props.data;
    return (
        <View style={{alignItems: 'center'}}>
             <View  style={[styles.foodCard, props.isBottom? {borderBottomWidth: 0.5, borderBottomColor:props.dark?"rgba(173,173,173,0.2)":"#cccccc"} : {}]}>
                 <View style={{flex:1, flexDirection: 'row', alignItems: 'center',  }}>
                     <View style={styles.logoWrapper}>
                         <Image source={ item.logo_url=="" ? require('../../assets/photo.svg') : {uri: SERVER_HOSTNAME+item.logo_url}} style={item.logo_url=="" ? styles.defaultLogo : styles.logo}/>
                     </View>
                     <Text style={[styles.name,{color:props.textColor}]}>{item.name}</Text>
                 </View>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
                     {/* <Image source={item.is_veg ? require("../../assets/veg.png") : require("../../assets/nonveg.png")} style={styles.isveg}/> */}
                     <IconButton icon="book-open-variant" color={props.dark?'white':'black'} style={{width: 28, height: 28,  marginLeft: 14 }}
                     onPress={() => {
                         downloadFileAsync({
                                 fileURL: SERVER_HOSTNAME+item.menu_url,
                                 attachment_name: item.name+" Food Menu"
                             },props.downloadSucessCb,props.downloadFailedCb);
                         // Linking.openURL(SERVER_HOSTNAME+item.menu_url)
                         } 
                     }
                     />
                 </View>
             </View>
        </View>
    )
}


const Food = (props) => {

    const messageBubbleRef = useRef(null);
    const [veg,setVeg] = useState(false);
    let count = 0;
    const reload = ()=>{props.fetchFood()};
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            reload();
          });
        return unsubscribe;
    }, [props.navigation])

    const dispatch = useDispatch()

    const openInMap = (coo)=>{
        props.navigation.navigate('Map');
        dispatch({type:SET_MAP_FOCUS, payload: coo});
    }

    const downloadSucessCb = () => {
        messageBubbleRef.current.show("Food Menu Downloaded!");
        
    }
    const downloadFailedCb = (err) => {
        console.log(err);
        messageBubbleRef.current.show("Oops.. Something Went Wrong!");
    }

    const {dark,colors} = useTheme();

    if(props.loading){
        return <Loader darkMode={dark}/>
    }

    if(props.error){
        return <ErrorView color={colors.normalText} imgUrl={dark?require('../../assets/error_dark.png'):require('../../assets/error_light.png')} error={"Oops! Something went wrong."} reload={reload} />;
    }



    return(
        <SafeAreaView style={{flex: 1, width: "100%", }}>
            <View style={{flex: 1,}}>
                <View style={styles.header}>   
                    <View style={{flexDirection: 'row', alignItems: 'center', flexShrink: 1}}>
                        <Text style={{color: colors.headerText, fontWeight: '700', fontSize: 24}}>{"Food Stalls"}</Text>
                        {props.data.length?
                        <TouchableOpacity onPress={() => openInMap({"name":'Food Stalls', "coordinates":props.data[0].coordinates})} activeOpacity={0.6}>
                            <Image source={require("../../assets/icons/map_active.png")} style={{width: 28,height: 28, marginLeft: 10}}/>
                        </TouchableOpacity>
                        :null}
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color : colors.normalText}}>Veg</Text>
                        <Switch 
                        // onChange={ () => setVeg(!veg)}
                        onValueChange={ () => setVeg(!veg)}
                        trackColor={{  false: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)", true: dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.4)"  }}
                        thumbColor={veg ? "green" : "#f4f3e0"}
                        value = {veg}
                        style={{width: 50, height: 50,}}
                        />
                    </View>
                </View>
                {veg && props.data.filter(stall => stall.is_veg).length == 0 
                ? <InfoScreen color={colors.normalText} imgUrl={dark?require('../../assets/blank_dark.png'):require('../../assets/blank_light.png')} info="Uh Oh...Seems like the Stalls aren't up yet." />
                : <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle = {{flex: props.data.length?0:1}}
                    refreshControl={
                        <RefreshControl
                        refreshing={false}
                        onRefresh={reload}
                        />}
                >
                {props.data.length?
                
                <View style={{backgroundColor:colors.secondary, borderRadius:10, marginHorizontal:10, paddingHorizontal: 20}}>
                    
                {props.data.map((item,index) => (
                    !veg ? 
                    <FoodItem isBottom={index!=props.data.length -1} data={item} textColor={colors.normalText} dark={dark}
                    downloadFailedCb={downloadFailedCb} downloadSucessCb={downloadSucessCb} key={item.name}/> 
                    : item.is_veg ? 
                    <FoodItem isBottom={index!=props.data.length -1} data={item} textColor={colors.normalText} dark={dark}
                    downloadFailedCb={downloadFailedCb} downloadSucessCb={downloadSucessCb} key={item.name}/> : <View key = {index+1}/>
                ))}
                </View>
                :
                <InfoScreen color={colors.normalText} imgUrl={dark?require('../../assets/blank_dark.png'):require('../../assets/blank_light.png')} info="Uh Oh...Seems like the Stalls aren't up yet." />
                }
                </ScrollView>
                }
                <MessageBubble bottom={'6%'} width={'100%'} ref={messageBubbleRef}/>
            </View>
        </SafeAreaView>
    )
    
 

    

}


const styles=StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    heading: {
        opacity: 0.87,
        fontSize: 24,
    },
    map: {
        width: 20, 
        height: 20,
        color: "white"
    },
    foodCard: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: 70,
        alignItems: 'center',
    },
    logoWrapper: {
        width: 48,
        height: 48,
        borderRadius: 25,
        backgroundColor: "gray",
        justifyContent: 'center',
        alignItems: 'center'
    },
    defaultLogo:{
        width: 28,
        height: 28
    },
    logo: {
        width: 48,
        height: 48,
        borderRadius: 30
    },
    name: {
        color:  "white",
        opacity: 0.87,
        marginLeft: 18,
        flexShrink: 1
    },
    isveg : {
        width: 18, 
        height: 18,
        marginLeft: 14,
        marginRight: 10
        
    },
    menu:{
        width : 20, 
        height: 20,
    },
    
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFood: () => dispatch(fetchFood())
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.food.loading,
        data: state.food.data,
        error: state.food.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Food);