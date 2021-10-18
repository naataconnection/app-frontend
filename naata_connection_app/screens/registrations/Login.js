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

    const [hidePassword, setHidePassword] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const hidePasswordHandler = () => {

        setHidePassword(!hidePassword)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView keyboardShouldPersistTaps='handled' style={styles.scrollViewContainer}>

                <View style={styles.logoView}>
                    <Image source={require('../../assets/naata_images/final_logo.png')} style={styles.logoImage} />
                    <Text style={styles.logoText}>NAATA</Text>
                </View>

                <View style={styles.inputWrapper1}>
                    <TextInput
                        placeholder='E-Mail or Phone Number'
                        placeholderTextColor='#FFFFFF'
                        onChangeText={text => setEmail(text)}
                        clearTextOnFocus={true}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputWrapper2}>
                    <TouchableHighlight onPress={()=> navigation.navigate('Tabs')}>
                        <Image source={require('../../assets/naata_images/nextButton.png')} style={styles.nextButton}></Image>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    scrollViewContainer: {
        flexDirection: 'column',
        marginTop: windowHeight * 0.30,
    },
    logoView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: windowHeight * 0.02
    },
    logoImage: {
        width: windowWidth * 0.30,
        height: 125,
    },
    logoText: {
        fontFamily: font1.fontFamily,
        fontSize: font1.fontSize,
        fontWeight: '800',
        fontStyle: font2.fontStyle
    },
    inputWrapper1: {
        width: windowWidth * 0.8,
        height: windowHeight * 0.06,
        borderRadius: 16,
        marginBottom: windowHeight * 0.02,
        borderColor: blue.border,
        backgroundColor: blue.info,
        flexDirection: 'row',
        alignContent: 'flex-start'
    },
    inputWrapper2: {
        flexDirection: 'row-reverse',
    },
    input: {
        fontFamily: font4.fontFamily,
        fontStyle: font4.fontStyle,
        fontSize: font4.fontSize,
        fontWeight: font4.fontWeight,
        color: '#FFFFFF',
        width: windowWidth * 0.80,
        marginLeft: windowWidth * 0.05
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
        width: windowWidth * 0.16
    }
})

export default Login;