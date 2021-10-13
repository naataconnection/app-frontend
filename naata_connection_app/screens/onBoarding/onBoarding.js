import React, { useEffect, useRef } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, Animated, Dimensions} from 'react-native'
import { connect } from 'react-redux'
import GeneralGradientButton from '../../components/GeneralGradientButton'
import {skipAction} from '../../store/actions/AuthActions'

const windowWidth = Dimensions.get('window').width
const OnBoarding = ({navigation, route, skipAction}) => {
    let text = "";
    let heading = "";
    content = "";
    const pageIndex = route.params.pageIndex;
    if (pageIndex == 0)
    {
        heading = "Discover"
        text = "Check out our events and see what you can participate in."
        content="Next"
    }
    if (pageIndex == 1)
    {
        heading = "Personalise"
        text = "Look at our schedule and create your own personalised schedule too."
        content="Next"
    }
    if (pageIndex == 2)
    {
        heading = "Explore"
        text = "Traverse the campus and easily find the location of your favourite events."
        content="Continue"
    }

    return (
        <View style={[styles.container]}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.7} 
                onPress={() => navigation.goBack()}
                >
                    <Image source={require('../../assets/icons/hdr_back.png')} style={pageIndex==0 ? {display: 'none' } : {display: 'flex', width: 12,height: 18}} />
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => skipAction()}

                >
                    <Text style={ pageIndex == 2 ? {display: 'none'} : {display: 'flex', color: 'white'} }>skip</Text>
                </TouchableOpacity>
            </View>

            <Image source={
                pageIndex == 0
                ? require('../../assets/onboarding1.png')
                : pageIndex == 1
                ? require('../../assets/onboarding2.png')
                : require('../../assets/onboarding3.png')     
            }
            style={{width: 300,height: 300}}
            />

            <View style={styles.bottom}>
                <Text style={{color: 'white', fontSize: 25, fontWeight: '700', }}>{heading}</Text>

                <Text style={{color: 'white', opacity: 0.6, paddingBottom: 20 }}>{text}</Text>
                <GeneralGradientButton content={content}
                 onPress={
                    route.params.pageIndex == 0 ?
                    () => navigation.push( 'OnBoarding1' , {                        
                        params: {pageIndex : route.params.pageIndex  + 1}                
                    }) :
                    route.params.pageIndex == 1 ? 
                    () => navigation.push('OnBoarding2', {
                        params: {pageIndex : route.params.pageIndex + 1}
                    }) :
                    () => skipAction()
                }
                 />
                
                <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 30}}>
                    <Image source={pageIndex==0 ? require('../../assets/icons/filledring.png') : require('../../assets/icons/ring.png')}  style={{marginRight: 10,width: 8, height: 8}}/>
                    <Image source={pageIndex==1 ? require('../../assets/icons/filledring.png') : require('../../assets/icons/ring.png')} style={{width: 8,height: 8}}/>
                    <Image source={pageIndex==2 ? require('../../assets/icons/filledring.png') : require('../../assets/icons/ring.png')} style={{marginLeft: 10,height: 8,width: 8}}/>
                </View>
            </View>
        </View> 
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    }
})


export default connect(null,{skipAction})(OnBoarding);