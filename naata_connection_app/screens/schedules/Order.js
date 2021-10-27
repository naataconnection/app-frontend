import { Dimensions } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, TouchableHighlight } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Order = () => {
    return (
        <SafeAreaView style={styles.orderContainer}>
            <ScrollView style={styles.scrollOrderContainer}>
                <View style={styles.innerOrderContainer}>
                    <View style={styles.orderHeader}>
                        <Text style={styles.heading}>
                            Order : xxx
                        </Text>
                    </View>
                    <View style={styles.carouselView}>
                        <View style={styles.groupHeader}>
                            <Text style={styles.groupHeaderText}>
                                General Information
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 4 }]}>
                                Driver
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 6 }]}>
                                Loreum
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 5 }]}>
                                NC000103
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8 }]}>
                                Delivery Sheet Id
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10 }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8 }]}>
                                Starting KM
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10 }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8 }]}>
                                Ending KM
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10 }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8 }]}>
                                Total Parcels
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10 }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8 }]}>
                                Total Weight
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10 }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8 }]}>
                                Dispatched
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10 }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8 }]}>
                                Delivered
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10 }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                    </View>

                    
                </View>

                <View style={styles.innerOrderContainer}>
                    <View style={styles.orderHeader}>
                        <Text style={styles.heading}>
                            Invoices
                        </Text>
                    </View>
                    <ScrollView horizontal={true}>
                    <View style={[styles.carouselView, {backgroundColor: '#E3E3E1'}]}>
                        <View style={styles.groupHeader}>
                            <Text style={[styles.groupHeaderText, {color: '#F3752B'}]}>
                                Invoice 1
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Invoice Code
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E'}]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E'}]}>
                                XXX
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Delivery Sheet Id
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Starting KM
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Ending KM
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Total Parcels
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Total Weight
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Dispatched
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Delivered
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                    </View>   
                    <View style={[styles.carouselView, {backgroundColor: '#E3E3E1'}]}>
                        <View style={styles.groupHeader}>
                            <Text style={[styles.groupHeaderText, {color: '#F3752B'}]}>
                                Invoice 1
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Invoice Code
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E'}]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E'}]}>
                                XXX
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Delivery Sheet Id
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Starting KM
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Ending KM
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Total Parcels
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Total Weight
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Dispatched
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                Delivered
                            </Text>
                            <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                Loreum Ipsum
                            </Text>
                        </View>
                    </View> 
                    </ScrollView>        
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

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
        width: windowWidth * 0.90,
        height: windowHeight * 0.4,
        padding: windowWidth * 0.05,
        marginRight: windowWidth*0.04,
        marginBottom: windowHeight*0.04,
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
        flex: 1
        // margin: windowWidth*0.025,
        // justifyContent: 'space-evenly',
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

export default Order;
