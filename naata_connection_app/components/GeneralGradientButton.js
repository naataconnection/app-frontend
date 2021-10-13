import React  from 'react';
import { StyleSheet, Text, View , Image, ImageBackground, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const GeneralGradientButton = (props) => {
    return (
        <TouchableHighlight onPress={props.onPress}>
            <LinearGradient 
                colors={['#A32CDF', '#106AD2']} 
                start={{ x: 0, y: 0.7}} end={{x: 1, y: 0.7}}
                style={styles.buttonWrapper}
                >
                <Text style={styles.textCenter}>
                    {props.content}
                </Text>
            </LinearGradient>
        </TouchableHighlight>
    )
   
};
const styles = StyleSheet.create({
    buttonWrapper: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 25,
        // overflow: 'hidden',
        borderRadius: 8,
        height: 44,
    },
    textCenter: {
        textAlign: 'center',
        fontSize:14,
        fontWeight: '400',
        color: '#FFFFFF',
    },
    
   
    
})
export default GeneralGradientButton;