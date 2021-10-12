import React, {useState} from 'react';
import { StyleSheet, Text, View , Image, ImageBackground, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IconButton } from 'react-native-paper';



const GradientButton = (props) => {
    return(
        <View style={styles.gradientButtonContainer}>
            <LinearGradient
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#A32CDF' , '#106AD2']} 
            style={styles.gradientButtonWrapper}
            >
                <View style={styles.blackButton}>
                    <Text style={styles.gradientButtonText}>Log In With {props.content}</Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const Login = () => {

const [hidePassword, setHidePassword] = useState(true)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const hidePasswordHandler = () => {

    setHidePassword(!hidePassword)
}

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <IconButton icon="less-than" color='#979797' size={20} onPress={() => console.log('Pressed')} style={{position: 'absolute', top: 40}}/>
                
                <Image source={require('../../assets/Techniche_logo.png')} style={styles.image1}/>
                
                <Image source={require('../../assets/Techniche.png')} style={styles.image2}/>
                
                <View style={styles.inputWrapper}>
                    <TextInput 
                        placeholder='E-Mail ID'
                        placeholderTextColor='#979797'
                        onChangeText={text => setEmail(text)}
                        clearTextOnFocus={true}
                        style={styles.input}
                    />
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TextInput 
                            placeholder='Password'
                            placeholderTextColor='#979797'
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={hidePassword}
                            autoFocus={true}
                            style={styles.input}
                        />
                        <IconButton icon={hidePassword ? 'eye-outline' : 'eye-off-outline'} color="#979797" size={18} onPress={hidePasswordHandler} />
                    </View>

                </View>
                
                <View>
                    <LinearGradient 
                    colors={['#A32CDF', '#106AD2']} 
                    start={{ x: 0, y: 0.7}} end={{x: 1, y: 0.7}}
                    style={styles.buttonWrapper}
                    >
                        <Text style={styles.login}>
                            Log In
                        </Text>
                    </LinearGradient>
                </View>
                
                <Text style={styles.or}>OR</Text>
                
                <View style={styles.wrapper}>
                    <GradientButton content="Google" />
                    <GradientButton content="Facebook" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
        alignItems: 'center',
    },
    image1: {
        marginTop: 170,
        marginLeft: 117,
        marginRight: 118,
        width: 125,
        height: 125,
    },
    image2: {
        width: 236,
        height: 91,
        marginHorizontal: 62,
        marginTop: 9,
        marginBottom: 70,
    },
    inputWrapper : {
        width: 320 ,
        height: 88,
        backgroundColor: '#1E1E1E',
        borderRadius: 8,
        marginHorizontal: 20,
    },
    input: {
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontSize: 12,
        paddingLeft: 17,
        color: '#979797',
        width: 100,
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
    or: {
        color: 'rgba(255,255,255,0.6)',
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 14,
        fontFamily: "SF Pro Display",
        marginBottom: 20,
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
    gradientButtonContainer: {
        width: 156,
        height: 34,
    },
    gradientButtonWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 8,
    },
    blackButton: {
        width: 154,
        height: 32,
        backgroundColor: 'black',
        borderRadius: 8,
        textAlign: 'center',
    },
    gradientButtonText: {
        color: "#7F43E1",
        fontSize: 10,
        paddingVertical: 8, 
        textAlign: 'center',
        letterSpacing: 0.0125,
    }
})

export default Login