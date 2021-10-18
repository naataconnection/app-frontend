import { Dimensions } from 'react-native';
import React, {useState} from 'react';
import { StyleSheet, Text, View , Image, ImageBackground, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IconButton } from 'react-native-paper';
import GeneralGradientButton from '../../components/GeneralGradientButton';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const GradientButton = (props) => {
    return(
        <TouchableHighlight style={styles.gradientButtonContainer} onPress={props.onPress}>
            <LinearGradient
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#A32CDF' , '#106AD2']} 
            style={styles.gradientButtonWrapper}
            >
                <View style={styles.blackButton}>
                    <Text style={styles.gradientButtonText}>Log In With {props.content}</Text>
                </View>
            </LinearGradient>
        </TouchableHighlight>
    )
}

const Login = ({navigation}) => {

const [hidePassword, setHidePassword] = useState(true)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const hidePasswordHandler = () => {

    setHidePassword(!hidePassword)
}

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView keyboardShouldPersistTaps='handled' style={styles.scrollViewContainer}>
                
                <Image source={require('../../assets/naata_images/final_logo.png')} style={styles.logoImage}/>
                
                <View style={styles.inputWrapper}>
                    <TextInput 
                        placeholder='E-Mail/Phone Number'
                        placeholderTextColor='#F3752B'
                        onChangeText={text => setEmail(text)}
                        clearTextOnFocus={true}
                        style={styles.input}
                    />
                </View>
                
                <GeneralGradientButton 
                    onPress={()=> navigation.navigate('Tabs')}
                    content="GET OTP"
                />
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
    scrollViewContainer:{
        flexDirection: 'column',
        marginTop: windowHeight*0.30,
    },
    logoImage: {
        marginLeft: windowWidth*0.15,
        marginBottom: windowWidth*0.05,
        width: windowWidth*0.30,
        height: 125,
        flex: 3,
    },
    inputWrapper : {
        width: windowWidth*0.65,
        height: windowHeight*0.05,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginBottom: windowHeight*0.02,
        borderColor: '#00B4D8'
    },
    input: {
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: 'bold',
        alignContent: 'center',
        width: windowWidth*0.40,
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
    login: {
        textAlign: 'center',
        fontSize:14,
        fontWeight: '400',
        color: '#FFFFFF',
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    eye: {
            marginVertical:  10,
            marginRight: 15,
            fontSize: 10,
    },
    gradientButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 8,
        width: windowWidth*0.8
    },
    gradientButtonText: {
        color: "#7F43E1",
        fontSize: 10,
        paddingVertical: 8, 
        textAlign: 'center',
        letterSpacing: 0.0125,
    }
})

export default Login;