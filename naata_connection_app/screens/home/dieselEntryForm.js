import { Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import axios from 'axios';
import { font4 } from '../../constants/Fonts';
import { SERVER_HOSTNAME, API_ENDPOINT } from "../../config";
import DocumentPicker from 'react-native-document-picker';
import FormData from 'form-data';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DieselEntry = (props) => {
    const user = props.user;
    // console.log('User from diesel entry', user);
    const [kmVehicle, setKMVehicle] = useState(0);
    const [pump, setPump] = useState("");
    const [litre, setLitre] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [paymentMode, setPaymentMode] = useState("");
    const [remarks, setRemarks] = useState("");
    const [singleFile, setSingleFile] = useState(null);
    // var kmImage = null;
    const [kmImage, setKmImage] = useState(null);
    const [billImage, setBillImage] = useState(null);
    const selectKmImage = async () => {
        // Opening Document Picker to select one file
        try {
          const res = await DocumentPicker.pick({
            // Provide which type of file you want user to pick
            type: [DocumentPicker.types.allFiles],
            // There can me more options as well
            // DocumentPicker.types.allFiles
            // DocumentPicker.types.images
            // DocumentPicker.types.plainText
            // DocumentPicker.types.audio
            // DocumentPicker.types.pdf
          });
          // Printing the log realted to the file
          console.log('res : ' + JSON.stringify(res));
          alert('Successful');
          // Setting the state to show single file attributes
          setKmImage(res);
          console.log(res['0']);
        //   file = res;
        } catch (err) {
          setKmImage(null);
          // Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            // If user canceled the document selection
            alert('Canceled');
          } else {
            // For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      };

      const selectBillImage = async () => {
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
            // There can me more options as well
            // DocumentPicker.types.allFiles
            // DocumentPicker.types.images
            // DocumentPicker.types.plainText
            // DocumentPicker.types.audio
            // DocumentPicker.types.pdf
          });
          console.log('res : ' + JSON.stringify(res));
          alert('Successful');
          setBillImage(res);
        } catch (err) {
          setBillImage(null);
          if (DocumentPicker.isCancel(err)) {
            alert('Canceled');
          } else {
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      };

    const submitDieselEntry = async () =>{
        const data = new FormData();
        console.log("totalAmount:",typeof kmVehicle);
        const body = {
            kmVehicle:kmVehicle,
            pump,
            litre:Number(litre),
            totalAmount:Number(totalAmount),
            vehicleNumber,
            paymentMode,
            remarks,
            dieselRate:100,
            userCode: user.userCode      
        }
        var images = [];
        images.push(kmImage[0]);
        images.push(billImage[0]);
        data.append('images', kmImage[0]);
        data.append('images', billImage[0]);
        console.log('images', images);

        Object.keys(body).forEach(key => {
            data.append(key, body[key]);
        });

        // data.append("body", body);

        try{
            // const response = await fetch(`${API_ENDPOINT}/diesel/create`,{
            //     method:'POST',
            //     body: data,
            //     headers: {
            //         "Content-Type": "multipart/form-data",
            //     }
            // });
            const response = await axios.post(`${API_ENDPOINT}/diesel/create`, data, {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            });
            console.log('Response from entry form:', JSON.stringify(response));

            if(response.status==200){
                alert("Diesel Form Submitted");
            }
            else{
                alert("Error occured");
            }

        }
        catch(err){
            console.log('error from Diesel Entry Form:', JSON.stringify(err));
        }
        


    }

    return (
        <SafeAreaView style={styles.orderContainer}>
            <ScrollView style={styles.scrollOrderContainer}>
                <View style={styles.innerOrderContainer}>
                    <View style={styles.orderHeader}>
                        <Text style={styles.heading}>
                            Diesel Entry Form
                        </Text>
                    </View>
                    <View style={styles.carouselView}>
                        {/* <View style={styles.groupHeader}>
                            <Text style={styles.groupHeaderText}>
                                General Information
                            </Text>
                        </View> */}
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 5 }]}>
                                KM of Vehicle
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <TextInput
                                placeholder='Enter KM travelled'
                                placeholderTextColor='#00B4D8'
                                
                                onChangeText={(text) => {
                                    console.log("type of kmVehicle 1:", typeof Number(text));
                                    setKMVehicle(Number(text));
                                    console.log("type of kmVehicle 2:", typeof kmVehicle);
                                }}
                                clearTextOnFocus={true}
                                style={[styles.input, {flex: 8}]}
                            />
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 5 }]}>
                                Pump
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <TextInput
                                placeholder='Enter Pump'
                                placeholderTextColor='#00B4D8'
                                onChangeText={(text) => {
                                    setPump(text);
                                }}
                                clearTextOnFocus={true}
                                style={[styles.input, {flex: 8}]}
                            />
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 5 }]}>
                                Litre
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <TextInput
                                placeholder='Enter Litre Consumed'
                                placeholderTextColor='#00B4D8'
                                keyboardType='numeric'
                                onChangeText={(text) => {
                                    setLitre(parseInt(text));
                                }}
                                clearTextOnFocus={true}
                                style={[styles.input, {flex: 8}]}
                            />
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 5, }]}>
                                Total Amount
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <TextInput
                                placeholder='Enter Total Amount'
                                placeholderTextColor='#00B4D8'
                                keyboardType='numeric'
                                onChangeText={(text) => {
                                    setTotalAmount(parseInt(text));
                                }}
                                clearTextOnFocus={true}
                                style={[styles.input, {flex: 8}]}
                            />
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 5 }]}>
                                Vehicle Number
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <TextInput
                                placeholder='Enter Vehicle Number'
                                placeholderTextColor='#00B4D8'
                                onChangeText={(text) => {
                                    setVehicleNumber(text);
                                }}
                                clearTextOnFocus={true}
                                style={[styles.input, {flex: 8}]}
                            />
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 5 }]}>
                                Payment Mode
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <TextInput
                                placeholder='Enter Payment Mode'
                                placeholderTextColor='#00B4D8'
                                onChangeText={(text) => {
                                    setPaymentMode(text);
                                }}
                                clearTextOnFocus={true}
                                style={[styles.input, {flex: 8}]}
                            />
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 5 }]}>
                                Remarks
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <TextInput
                                placeholder='Enter Remarks'
                                placeholderTextColor='#00B4D8'
                                onChangeText={(text) => {
                                    setRemarks(text);
                                }}
                                clearTextOnFocus={true}
                                style={[styles.input, {flex: 8}]}
                            />
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 5 }]}>
                                KM Image
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <View style={[ { flex: 8 }]}>
                                <TouchableHighlight onPress={selectKmImage}>
                                    <Text style={styles.uploadText}>
                                    {kmImage != null ? (
                                        (kmImage[0].name)
                                    ) : 'Upload File'}
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>     
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 5 }]}>
                                Bill Image
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <View style={[ { flex: 8 }]}>
                                <TouchableHighlight onPress={selectBillImage}>
                                    <Text style={styles.uploadText}>
                                    {billImage != null ? (
                                        (billImage[0].name)
                                    ) : 'Upload File'}
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>                        
                    </View>
                    <View style={styles.inputWrapper2}>
                        <Text style={styles.nextLogin}>Submit</Text>
                        <TouchableHighlight onPress={submitDieselEntry}>
                            <Image source={require('../../assets/naata_images/nextButton.png')} style={styles.nextButton}></Image>
                        </TouchableHighlight>
                    </View>
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
        height: windowHeight * 0.6,
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
        // flex: 1,
        marginBottom: windowHeight*0.01
        // margin: windowWidth*0.025,
        // justifyContent: 'space-evenly',
    },
    cardText: {
        // flex: 1,
        fontFamily: 'Sofia Pro',
        fontWeight: '700',
        color: '#FFFFFF',
        fontSize: 20,
        marginTop: windowHeight*0.01
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
    },
    input: {
        // flex: 1,
        fontFamily: 'Sofia Pro',
        color: '#00B4D8',
        fontWeight: '700',
        fontSize: 20,
        // lineHeight: 20
        backgroundColor: '#FFFFFF',
        borderRadius: 12
    },
    uploadText:{
        fontFamily: 'Sofia Pro',
        fontSize: 20,
        fontWeight: '700',
        backgroundColor: '#FFFFFF',
        color: '#00B4D8',
        borderRadius: 12,
        padding: windowHeight*0.007,
        height: windowHeight*0.045
    },
    inputWrapper2: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nextButton: {
        height: windowHeight * 0.085,
        width: windowWidth * 0.16,
        marginLeft: windowWidth*0.025
    },
    nextLogin:{
        fontFamily: 'Sofia Pro',
        fontWeight: '700',
        fontSize: 24,
        marginRight: windowWidth*0.025,
        color: '#000000'
    },         

});

export default DieselEntry;
