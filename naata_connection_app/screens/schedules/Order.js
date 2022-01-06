import { Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import axios from 'axios';
import { SERVER_HOSTNAME, API_ENDPOINT } from "../../config";
import DeprecatedViewPropTypes from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Order = (props) => {
    // console.log("Order details");
    // console.log(props.route.params.orderCodeObject);
    const orderCode = props.route.params.orderCodeObject.orderCode;
    const requestCode = props.route.params.requestCode;
    const user = props.user;
    // var invoiceDetailsDummy = [];
    const [orderDetails, setOrderDetails] = useState(null);
    var invoiceCodes = []; 
    const [invoiceDetails, setInvoiceDetails] = useState([]);

    const dispatchOrder = async()=>{

        try{
            const response = await axios.post(`${API_ENDPOINT}/api/serviceRequest/dispatch/driver`, {
                driverCode: user.userCode,
                orderCode,
                requestCode
            });

            if(response.status==200){
                alert(`Order ${orderCode} is dispatched`);
            }
        }
        catch(err){
            console.log('Error from dispatch request:', JSON.stringify(err));
            alert(`Error ${err.message} has occured`);
        }
    };

    const deliverOrder = async()=>{

        try{
            const response = await axios.post(`${API_ENDPOINT}/api/serviceRequest/deliver/driver`, {
                driverCode: user.userCode,
                orderCode,
                requestCode
            });

            if(response.status==200){
                alert(`Order ${orderCode} is dispatched`);
            }
        }
        catch(err){
            
            alert(`Error ${err.message} has occured`);
        }
    };


    // const updateInvoiceDetails = (element)=>{
    //     setInvoiceDetails(invoiceDetails=> [...invoiceDetails, element]);
    // }



      useEffect(() => {
          const getOrderDetails = async () => {
              try{
                  // console.log("OrderCode", orderCode);
                  const response =  await axios.post(`https://www.naataconnection.com/api/serviceRequest/orders`, {
                      orderCode
                  });
                  // console.log(response);
                  console.log('Order Details', response.data.message[0]);
                  setOrderDetails(response.data.message[0]);
                  if(orderDetails!=null){
                      setInvoiceDetails([]);
                      console.log('Invoice Details after clearning:', invoiceDetails);
                      for(var i=0;i<orderDetails.invoices.length;i++){
                        var invoiceCode = orderDetails.invoices[i].invoiceCode;

                        try{
                            const response = await axios.post(`${API_ENDPOINT}/serviceRequest/invoices`,{
                                invoiceCode
                            })
            
                            if(response.status==200){
                                console.log('Response from invoice API:', response.data.message[0]);
                                let newArr = [...invoiceDetails]; // copying the old datas array
                                newArr.push(response.data.message[0]);
                                setInvoiceDetails(newArr);
                                console.log('Array of invoice details:',invoiceDetails)
                            }
                        }
                        catch(err){
                            console.log('Error from invoice details:', JSON.stringify(err).message);
                        }
                      }
                  }
              }
              catch(err){
                  console.log(err);
              }
          };
          
      
          getOrderDetails();
        }, []) ;

    return (
        <SafeAreaView style={styles.orderContainer}>
            <ScrollView style={styles.scrollOrderContainer}>
                <View style={styles.innerOrderContainer}>
                    <View style={styles.orderHeader}>
                        <Text style={styles.heading}>
                            Order : {orderCode}
                        </Text>
                    </View>
                    {orderDetails!=null && 
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
                                {orderDetails.driver!=null && orderDetails.driver.userCode}
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
                                {orderDetails.deliverySheetId}
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
                                {orderDetails.startingKM !=null ? orderDetails.startingKM : '-'}
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
                                {orderDetails.endingKM !=null ? orderDetails.endingKM : '-'}
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
                                {orderDetails.totalParcels !=null ? orderDetails.totalParcels : '-'}
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
                                {orderDetails.totalWeight !=null ? orderDetails.totalWeight : '-'}
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
                                {orderDetails.dispatch?'Yes':'No'}
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
                                {orderDetails.deliver?'Yes':'No'}
                            </Text>
                        </View>
                    </View>}
                    {user.role=='DRIVER' && orderDetails!=null && orderDetails.dispatch==true &&
                    <View style={styles.lastCarouselView}>
                        <View style={styles.lastGroupHeader}>
                            <Text style={styles.groupHeaderText}>
                                Status : Dispatched
                            </Text>
                        </View>
                        <View style={[styles.innerCarouselView, { justifyContent: 'flex-end', marginTop: windowHeight*0.02 }]}>
                            <View style={[styles.viewOrder, {width: windowWidth*0.3,}]}>
                                <TouchableHighlight onPress={deliverOrder}>
                                    <Text style={[styles.orderText, {color: "#F3752B"}]}>
                                        Deliver Request
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    }
                    {user.role=='DRIVER' && orderDetails!=null && orderDetails.dispatch==false &&
                    <View style={styles.lastCarouselView}>
                        <View style={styles.lastGroupHeader}>
                            <Text style={styles.groupHeaderText}>
                                Status :Not Dispatched
                            </Text>
                        </View>
                        <View style={[styles.innerCarouselView, { justifyContent: 'flex-end', marginTop: windowHeight*0.02 }]}>
                            <View style={[styles.viewOrder, {width: windowWidth*0.3,}]}>
                                <TouchableHighlight onPress={dispatchOrder}>
                                    <Text style={[styles.orderText, {color: "#F3752B"}]}>
                                        Dispatch Request
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    }                       
                </View>             

                <View style={styles.innerOrderContainer}>
                    <View style={styles.orderHeader}>
                        <Text style={styles.heading}>
                            Invoices 
                        </Text>
                    </View>
                    <ScrollView horizontal={true}>
                    {invoiceDetails!=null && invoiceDetails.map((data, key)=>{
                        return (
                            <View style={[styles.carouselView, {backgroundColor: '#E3E3E1'}]} key={key}>
                                <View style={styles.groupHeader}>
                                    <Text style={[styles.groupHeaderText, {color: '#F3752B'}]}>
                                        Invoice {key+1}
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
                                        {data.invoiceCode !=null ? data.invoiceCode : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Invoice Id
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {data.invoiceId != null ? data.invoiceId : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Number of Parcels
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                    {data.numberParcels != null ? data.numberParcels : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Parcels Weight
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                    {data.parcelWeight != null ? data.parcelWeight : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Parcel Type
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {data.parcelType != null ? data.parcelType : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Delivery Address
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {data.deliveryAddress != null ? data.deliveryAddress : '-'}
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
                                        {data.dispatched ? 'YES' : 'NO'}
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
                                        {data.delivered ? 'YES' : 'NO'}
                                        {/* {invoiceDetails!=null ? 'Done': 'Not done'} */}
                                    </Text>
                                </View>
                            </View>   
                        );
                    })}                        
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
