import axios from "axios";
import { SERVER_HOSTNAME, API_ENDPOINT } from "../../config";
import { Dimensions } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import OrangeButton from '../../components/OrangeButton';
import { orange, blue, red, green } from '../../constants/Color';
import { font1, font2, font3, font4, font5 } from '../../constants/Fonts';
import { IconButton } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {

    const loginFunction = async (event)=>{
        navigation.navigate('GetOTP',{emailIdOrContact:'bajajtushar2019@gmail.com'});

        // try{
        //     const response = await axios.post(`${API_ENDPOINT}/user/login_checkUserAndSendOtp/`, {
        //         emailIdOrContact
        //     })
        //     // console.log(`Response from login API: ${response._respon}`);

        //     if(response.status==200){
        //         navigation.navigate('GetOTP',{emailIdOrContact});
        //     }
        // }
        // catch(error){
        //     console.log(`Error from login api = ${error}`);
        // }
    }

    const [emailIdOrContact, setEmailOrContact] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View keyboardShouldPersistTaps='handled' style={styles.scrollViewContainer}>

                <View style={styles.logoView}>
                    <Image source={require('../../assets/naata_images/final_logo.png')} style={styles.logoImage} />
                    {/* <Image source={require('../../assets/naata_images/naata.png')} style={styles.logoText} /> */}
                    <Text style={styles.logoText}>NAATA</Text>
                </View>

                <View style={styles.inputWrapper1}>
                <Image source={require('../../assets/naata_images/user.png')} style={styles.icon}/>
                    <TextInput
                        placeholder='E-Mail or Phone Number'
                        placeholderTextColor='#FFFFFF'
                        onChangeText={(text) => {
                            setEmailOrContact(text);
                        }}
                        clearTextOnFocus={true}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputWrapper2}>
                    <Text style={styles.nextLogin}>Next</Text>
                    <TouchableHighlight onPress={loginFunction}>
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
        marginTop: windowHeight * 0.30,
        justifyContent:'center',
        alignItems: 'center',
        // flex: 1
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
        width: windowWidth * 0.8,
        height: windowHeight * 0.06,
        borderRadius: 16,
        marginBottom: windowHeight * 0.02,
        borderColor: blue.border,
        backgroundColor: blue.info,
        flexDirection: 'row',
        alignContent: 'flex-end',
    },
    inputWrapper2: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        fontFamily: font4.fontFamily,
        fontStyle: font4.fontStyle,
        fontSize: font4.fontSize,
        fontWeight: font4.fontWeight,
        color: '#FFFFFF',
        width: windowWidth * 0.80,
        marginLeft: windowWidth * 0.1
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
    }
})

export default Login;