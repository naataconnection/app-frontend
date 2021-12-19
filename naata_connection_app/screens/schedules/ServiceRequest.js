import { Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, TouchableHighlight } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ServiceRequest = (props) => {
    // console.log('service request data');
    // console.log(props.route.params);
    const serviceRequestData = props.route.params.serviceRequestData;
    const drivers = serviceRequestData.drivers;
    const deliveryBoys = serviceRequestData.deliveryBoys;
    const vehicles = serviceRequestData.vehicles;

    return (
        <SafeAreaView style={styles.orderContainer}>
            <ScrollView style={styles.scrollOrderContainer}>
                <View style={styles.innerOrderContainer}>
                    <View style={styles.orderHeader}>
                        <Text style={styles.heading}>
                            Service Request : xxx
                        </Text>
                    </View>
                    {
                        drivers.map((data, key)=>{
                            const orderCodeObject = serviceRequestData.orders[key];
                            return (
                                <View style={styles.carouselView}>
                                    <View style={styles.groupHeader}>
                                        <Text style={styles.groupHeaderText}>
                                            Group {key+1}
                                        </Text>
                                    </View>
                                    <View style={styles.innerCarouselView}>
                                        <Text style={[styles.cardText, { flex: 5 }]}>
                                            Driver
                                        </Text>
                                        <Text style={[styles.cardText, { flex: 1 }]}>
                                            :
                                        </Text>
                                        <Text style={[styles.cardText, { flex: 3 }]}>
                                            Loreum 
                                        </Text>
                                        <Text style={[styles.cardText, { flex: 1 }]}>
                                            :
                                        </Text>
                                        <Text style={[styles.cardText, { flex: 5 }]}>
                                            {data.userCode}
                                        </Text>
                                    </View>
                                    <View style={styles.innerCarouselView}>
                                        <Text style={[styles.cardText, { flex: 5 }]}>
                                            Delivery Boy
                                        </Text>
                                        <Text style={[styles.cardText, { flex: 1 }]}>
                                            :
                                        </Text>
                                        <Text style={[styles.cardText, { flex: 3 }]}>
                                            Loreum 
                                        </Text>
                                        <Text style={[styles.cardText, { flex: 1 }]}>
                                            :
                                        </Text>
                                        <Text style={[styles.cardText, { flex: 5 }]}>
                                            {deliveryBoys[key].userCode}
                                        </Text>
                                    </View>
                                    <View style={styles.innerCarouselView}>
                                        <Text style={[styles.cardText, { flex: 5 }]}>
                                            Vehicle
                                        </Text>
                                        <Text style={[styles.cardText, { flex: 1 }]}>
                                            :
                                        </Text>
                                        <Text style={[styles.cardText, { flex: 3 }]}>
                                            Loreum 
                                        </Text>
                                        <Text style={[styles.cardText, { flex: 1 }]}>
                                            :
                                        </Text>
                                        <Text style={[styles.cardText, { flex: 5 }]}>
                                            {vehicles[key].vehicleCode}
                                        </Text>
                                    </View>
                                    <View style={[styles.innerCarouselView, { justifyContent: 'flex-end', marginTop: windowHeight*0.02}]}>
                                        <TouchableHighlight onPress={()=> props.navigation.navigate('Order', {orderCodeObject})}>
                                            <View style={styles.viewOrder}>
                                                <Text style={styles.orderText}>
                                                    View Order
                                                </Text>
                                            </View>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            )
                        })
                    }
                    
                    <View style={[styles.carouselView, {backgroundColor: "#F3752B"}]}>
                        <View style={styles.groupHeader}>
                            <Text style={styles.groupHeaderText}>
                                Add Group
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 3 }]}>
                                Driver
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 5 }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 3 }]}>
                                Delivery Boy
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 5 }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 3 }]}>
                                Vehicle
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 5 }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={[styles.innerCarouselView, { justifyContent: 'flex-end', marginTop: windowHeight*0.02 }]}>
                            <View style={styles.viewOrder}>
                                <Text style={[styles.orderText, {color: "#F3752B"}]}>
                                    Add +
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.lastCarouselView}>
                        <View style={styles.lastGroupHeader}>
                            <Text style={styles.groupHeaderText}>
                                Status : Delivered
                            </Text>
                        </View>
                        <View style={[styles.innerCarouselView, { justifyContent: 'flex-end', marginTop: windowHeight*0.02 }]}>
                            <View style={[styles.viewOrder, {width: windowWidth*0.3,}]}>
                                <Text style={[styles.orderText, {color: "#F3752B"}]}>
                                    Close Request
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    orderContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    scrollOrderContainer: {
        flex: 1
    },
    innerOrderContainer: {
        flexDirection: 'column',
        flex: 1,
        margin: windowWidth * 0.05,
    },
    orderHeader: {
        flex: 1,
        marginBottom: windowHeight * 0.025,
    },
    orderCard: {
        flex: 5,
        backgroundColor: "#00B4D8",
    },
    innerOrderCard: {
        flex: 1,
        margin: windowWidth * 0.05,
    },
    groupTextView: {
        flexDirection: 'column',
        flex: 2,
    },
    infoCard: {
        flexDirection: 'column',
        flex: 4,
    },
    heading: {
        fontSize: 26,
        fontWeight: '700',
        color: "#000000",
        fontFamily: "Sofia Pro"
    },
    groupText: {
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Sofia Pro',
        color: "#FFFFFF",
    },
    cardRows: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: windowHeight * 0.2
    },
    normalText: {
        fontFamily: 'Sofia Pro',
        fontSize: 14,
        fontWeight: '700'
    },
    carouselView: {
        flexDirection: 'column',
        backgroundColor: '#00B4D8',
        borderRadius: 16,
        width: windowWidth * 0.92,
        height: windowHeight * 0.25,
        padding: windowWidth * 0.03,
        marginBottom: windowHeight*0.08
    },
    lastCarouselView:{
        flexDirection: 'column',
        backgroundColor: '#52B788',
        borderRadius: 16,
        width: windowWidth * 0.90,
        height: windowHeight * 0.15,
        padding: windowWidth * 0.05,
        marginBottom: windowHeight*0.08
    },
    innerCarouselView: {
        flexDirection: 'row',
        // margin: windowWidth*0.025,
        // justifyContent: 'space-evenly',
        marginBottom: windowHeight*0.005
    },
    cardText: {
        // flex: 1,
        fontFamily: 'Sofia Pro',
        fontWeight: '700',
        color: '#FFFFFF',
        fontSize: 20,
        // lineHeight: 20
    },
    groupHeader: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        marginBottom: windowHeight*0.02
    },
    lastGroupHeader:{
        flexDirection: 'row',
        alignContent: 'flex-start',        
    },
    groupHeaderText: {
        fontSize: 26,
        fontWeight: '700',
        fontFamily: 'Sofia Pro',
        color: '#FFFFFF'
    },
    viewOrder: {
        backgroundColor: "#FFFFFF",
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: windowWidth * 0.01,
        borderRadius: 8,
        width: windowWidth * 0.20,
        height: windowHeight * 0.04
    },
    orderText: {
        fontSize: 18,
        fontFamily: 'Sofia Pro',
        fontWeight: '700',
        color: "#F3752B"
    }

});

export default ServiceRequest;