import { Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SERVER_HOSTNAME, API_ENDPOINT } from "../../config";
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

    
const Schedule = (props) => {
    const user = props.user;
    // console.log(`User from all schedule`, props.user);
    
    const [activeServiceRequests, setActiveServiceRequests] = useState(null);
    const [pendingServiceRequests, setPendingServiceRequests] = useState(null);
    const [completedServiceRequests, setCompletedServiceRequests] = useState(null);

    // useEffect(()=>{
        

    // });

    useEffect(() => {
        const getActiveServiceRequest = async () => {
            try{
                // console.log("UserCode", user.userCode);
                const response = await axios.get(`${API_ENDPOINT}/serviceRequest/activeUsers`, {
                    userCode: user.userCode
                });
                
                if(response.status==200)
                {
                    setActiveServiceRequests(response.data.message);
                    console.log('Active Service Requests');
                    console.log(activeServiceRequests);
                }
                else{
                    console.log('Response from failed request:',response.data.message);
                }

            }
            catch(err){
                console.log(err);
            }
        }

        const getPendingServiceRequest = async () => {
            try{
                const response = await axios.get(`${API_ENDPOINT}/serviceRequest/pendingUsers`,{
                    userCode: user.userCode
                });
                
                if(response.status==200){
                    setPendingServiceRequests(response.data.message);
                    console.log('Pending Service Requests', pendingServiceRequests);
                }
                else{
                    console.log('Response from failed requests:', response.data.message);
                }
            }
            catch(err){
                console.log(err);
            }
        }

        const getCompletedServiceRequest = async () => {
            try{
                const response = await axios.get(`${API_ENDPOINT}/serviceRequest/completedUsers`,{
                    userCode: user.userCode
                });
                
                if(response.status==200){
                    setCompletedServiceRequests(response.data.message);
                    console.log('Completed Service Requests', completedServiceRequests);
                }
                else{
                    console.log('Response from failed requests:', response.data.message);
                }
            }
            catch(err){
                console.log(err);
            }
        }
    
        getActiveServiceRequest();
        getPendingServiceRequest();
        getCompletedServiceRequest();
      }, []);    

    return (
        <SafeAreaView style={styles.serviceContainer}>
            <ScrollView>
                <View style={styles.innerServiceContainer}>
                    <View style={styles.serviceRow}>
                        <Text style={styles.activeText}>
                            Active
                        </Text>
                        <Text style={styles.filterText}>
                            Fitler
                        </Text>
                    </View>
                    <ScrollView horizontal={true}>
                        {activeServiceRequests!=null && activeServiceRequests.map((data, key)=>{
                            // console.log("Data from card", data);
                            return (
                                <View style={styles.serviceCarousel} key={key}>
                                    <View style={styles.carouselView}>
                                    <View style={styles.innerCarouselView}>
                                        <Text style={[styles.cardText, {flex: 3}]}>
                                            Service Code
                                        </Text>
                                        <Text style={[styles.cardText, {flex: 1}]}>
                                            :
                                        </Text>
                                        <Text style={[styles.cardText, {flex: 3}]}>
                                            {data.requestCode}
                                        </Text>
                                    </View>
                                    <View style={styles.innerCarouselView}>
                                        <Text style={[styles.cardText, {flex: 3}]}>
                                            Customer
                                        </Text>
                                        <Text style={[styles.cardText, {flex: 1}]}>
                                            :
                                        </Text>
                                        <Text style={[styles.cardText, {flex: 3}]}>
                                            {data.customer.userCode}
                                        </Text>
                                    </View>
                                    <View style={styles.innerCarouselView}>
                                        <Text style={[styles.cardText, {flex: 3}]}>
                                            Super User
                                        </Text>
                                        <Text style={[styles.cardText, {flex: 1}]}>
                                            :
                                        </Text>
                                        <Text style={[styles.cardText, {flex: 3}]}>
                                            {data.superUser.userCode}
                                        </Text>
                                    </View>
                                    <View style={styles.innerCarouselView}>
                                        <Text style={[styles.cardText, {flex: 3}]}>
                                            Status
                                        </Text>
                                        <Text style={[styles.cardText, {flex: 1}]}>
                                            :
                                        </Text>
                                        <Text style={[styles.cardText, {flex: 3}]}>
                                            Active
                                        </Text>
                                    </View>
                                    <View style={styles.innerCarouselView}>
                                        <Text style={[styles.cardText, {flex: 3}]}>
                                            Start Date
                                        </Text>
                                        <Text style={[styles.cardText, {flex: 1}]}>
                                            :
                                        </Text>
                                        <Text style={[styles.cardText, {flex: 3}]}>
                                            XXX
                                        </Text>
                                    </View>
                                    <View style={styles.lastCarouselRow}>
                                        <TouchableHighlight onPress={()=>props.navigation.navigate('ServiceRequest', {serviceRequestData: data})}>
                                            <View style={styles.CarouselButton}>
                                                <Text>
                                                    View Request
                                                </Text>
                                            </View>
                                        </TouchableHighlight>
                                    </View>
                                    </View>                            
                                </View>
                            )
                        })}
                        </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    serviceContainer: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#EFEFEF',
    },
    innerServiceContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: windowHeight * 0.025
    },
    serviceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: windowWidth*0.025
    },
    activeText: {
        fontFamily: 'Sofia Pro',
        fontSize: 24,
        fontWeight: '800',
        fontStyle: 'normal',
        color: '#000000'
    },
    filterText: {
        fontSize: 18,
        fontFamily: 'Sofia Pro',
        fontWeight: '700',
        fontStyle: 'normal',
        color: '#000000'
    },
    carouselView:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00B4D8',
        borderRadius: 16,
        width: windowWidth*0.8,
        height: windowHeight*0.25,
        padding: windowWidth*0.08,
    },
    innerCarouselView:{
        flexDirection: 'row',
        flex: 1,
        // margin: windowWidth*0.025,
        // justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center'
    },
    serviceCarousel: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: windowWidth*0.02
    },
    cardText:{
        // flex: 1,
        fontFamily: 'Sofia Pro',
        fontWeight: '700',
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 20
    },
    lastCarouselRow:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%'
    },
    CarouselButton:{
        backgroundColor: "#FFFFFF",
        flexDirection: 'column',
        justifyContent: 'center'
    }

});

export default Schedule;