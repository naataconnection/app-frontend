import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, Text, View , Image, ImageBackground, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, TouchableHighlight} from 'react-native';


const OrangeButton = (props) => {
    
    const [verifyingMsg, setVerifyingMsg] = useState(`${props.verifyingMsg}`);
    let verifyingInterval = false;
    const verifyingMsgRef = useRef(verifyingMsg);

    useEffect(()=>{
        verifyingMsgRef.current=verifyingMsg;
      },[verifyingMsg])
    
    useEffect(()=>{
        if(props.verifying){
            verifyingInterval = setInterval(()=>{
                let ind=verifyingMsgRef.current.split('.').length;
                if(ind==4)
                    setVerifyingMsg(`${props.verifyingMsg}   `);
                else{
                    let newMsg = verifyingMsgRef.current.substr(0,props.verifyingMsg.length -1 +ind) 
                                + "." + verifyingMsgRef.current.substr(props.verifyingMsg.length -1 +ind,3-ind);
                    setVerifyingMsg(newMsg);
                }
            },500)
        }else{
            clearInterval(verifyingInterval);
            setVerifyingMsg(`${props.verifyingMsg}   `);
            verifyingInterval=false;
        }
        return ()=>{if(verifyingInterval)clearInterval(verifyingInterval);}
    },[props.verifying]);

    return (
        <TouchableHighlight onPress={props.onPress} style={[props.style,{borderRadius:16}]}>
            <Button style={styles.buttonWrapper} title={props.content}>
                <Text style={styles.buttonText}>
                    {props.verifying?verifyingMsg:props.content}
                </Text>
            </Button>
        </TouchableHighlight>
    )
   
};
const styles = StyleSheet.create({
    buttonWrapper: {
        justifyContent: 'center',
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
export default OrangeButton;
