import axios from "axios";
import { SERVER_HOSTNAME, API_ENDPOINT } from "../../config";
import { Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import OrangeButton from '../../components/OrangeButton';
import { orange, blue, red, green } from '../../constants/Color';
import { font1, font2, font3, font4, font5 } from '../../constants/Fonts';
import { IconButton } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({route, navigation}) => {

const [emailIdOrContact, setEmailIdOrContact] = useState('');
const [input1, setInput1] = useState('');
const [input2, setInput2] = useState('');
const [input3, setInput3] = useState('');
const [input4, setInput4] = useState('');
const [input5, setInput5] = useState('');
const [input6, setInput6] = useState('');


useEffect(()=>{
    // console.log(route);
    setEmailIdOrContact(route.params.emailIdOrContact);
    // console.log(emailIdOrContact)
});

const verifyOTPFunction = async (event)=>{
    const user = {"_id":{"$oid":"61c2f8a3887c6b997e7136d6"},"firstName":"Customer1","lastName":"Dummy","emailId":"customer1@gmail.com","contact":"6900616159","role":"CUSTOMER","active":true,"__v":{"$numberInt":"0"},"userCode":"NCPR010001"};
    
    navigation.navigate('Tabs', {user})
    const otp = input1+input2+input3+input4+input5+input6;
    console.log(typeof(otp));
    try{
        console.log(typeof(emailIdOrContact))
        const response = await axios.post(`https://www.naataconnection.com/api/user/login_verifyOtp/`,{
            emailIdOrContact: emailIdOrContact,
            password: otp
        });
        console.log("Response from OTP api");
        console.log(response.data.user);
        const user = response.data.user;
        if(response.status==200){
            navigation.navigate('Tabs', {user})
        }
    }
    catch(err){
        console.log(err);
    }
}


const hidePasswordHandler = () => {

    setHidePassword(!hidePassword)
}

    return (
        <SafeAreaView style={styles.container}>
            <View keyboardShouldPersistTaps='handled' style={styles.scrollViewContainer}>

                <View style={styles.logoView}>
                    <Image source={require('../../assets/naata_images/final_logo.png')} style={styles.logoImage} />
                    {/* <Image source={require('../../assets/naata_images/naata.png')} style={styles.logoText} /> */}
                    <Text style={styles.logoText}>NAATA</Text>
                </View>

                <View style={styles.inputWrapper1}>
                    <View style={styles.otpWrapper}>
                        <TextInput
                            placeholder='0'
                            placeholderTextColor='#00B4D8'
                            onChangeText={text => setInput1(text)}
                            clearTextOnFocus={true}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.otpWrapper}>
                        <TextInput
                            placeholder='0'
                            placeholderTextColor='#00B4D8'
                            onChangeText={text => setInput2(text)}
                            clearTextOnFocus={true}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.otpWrapper}>
                        <TextInput
                            placeholder='0'
                            placeholderTextColor='#00B4D8'
                            onChangeText={text => setInput3(text)}
                            clearTextOnFocus={true}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.otpWrapper}>
                        <TextInput
                            placeholder='0'
                            placeholderTextColor='#00B4D8'
                            onChangeText={text => setInput4(text)}
                            clearTextOnFocus={true}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.otpWrapper}>
                        <TextInput
                            placeholder='0'
                            placeholderTextColor='#00B4D8'
                            onChangeText={text => setInput5(text)}
                            clearTextOnFocus={true}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.otpWrapper}>
                        <TextInput
                            placeholder='0'
                            placeholderTextColor='#00B4D8'
                            onChangeText={text => setInput6(text)}
                            clearTextOnFocus={true}
                            style={styles.input}
                        />
                    </View>
                </View>
                <View style={styles.inputWrapper3}>
                    <View style={styles.timeWrapper}>
                    <TouchableHighlight>
                            <Text style={styles.otpText}>
                                OTP expires in 00:00
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.resendWrapper}>
                        <TouchableHighlight>
                            <Text style={styles.otpText}>
                                Resend OTP
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.inputWrapper2}>
                    <Text style={styles.nextLogin}>Submit</Text>
                    <TouchableHighlight onPress={verifyOTPFunction}>
                        <Image source={require('../../assets/naata_images/nextButton.png')} style={styles.nextButton}></Image>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    );
} 
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        // alignItems: 'center',
        height: windowHeight
    },
    scrollViewContainer: {
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        flex: 1
    },
    logoView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: windowHeight * 0.05,
        width: windowWidth*0.4,
    },
    logoImage: {
        width: windowWidth * 0.30,
        height: 125,
    },
    logoText: {
        fontFamily: 'Sofia Pro',
        fontSize: 32,
        fontWeight: '700'
    },
    inputWrapper1: {
        width: windowWidth*0.95,
        height: windowHeight * 0.07,
        marginBottom: windowHeight * 0.02,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    otpWrapper:{
        flex: 1,
        height: '100%',
        borderColor: blue.border,
        backgroundColor: '#E8F6F9',
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    },
    inputWrapper2: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        fontFamily: font4.fontFamily,
        fontStyle: 'normal',
        fontSize: 28,
        fontWeight: '700',
        color: '#00B4D8',
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 25,
        overflow: 'hidden',
        borderRadius: 8,
        height: 44,
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
        marginRight: windowWidth*0.025
    },  
    icon:{
        position: 'absolute',
        top: windowHeight*0.012,
        left: windowWidth*0.025,
        height: 32,
        width: 32
    },
    inputWrapper3:{
        width: windowWidth*0.95,
        height: windowHeight * 0.04,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeWrapper:{
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 8,
    },
    resendWrapper:{
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 8
    },
    otpText:{
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Sofia Pro'
    }
})

export default Login;