import React, {useState} from 'react';
import { StyleSheet, Text, View , Image, ImageBackground, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IconButton } from 'react-native-paper';

const CheckBox = () =>{

    const [plus, setplus] = useState(true)

    const plusHandler = () => {
        setplus(!plus)
    } 

    return (
        <View style={styles.eventholder}>
            <TouchableOpacity onPress={plusHandler} >
                <Image  source={plus ? require('../../assets/icons/emptycheckbox.png') : require('../../assets/icons/filledcheckbox.png')} size={20}  style={{ marginTop: 1, marginLeft:5,}}  />
            </TouchableOpacity>
            </View>
    );
}

const Schedule = () => {
return (
    <View style={styles.container}>
        <View style={styles.daysContainer}>
            <View style={styles.days}>
                
            <LinearGradient
                    colors={['#A32CDF', '#106AD2' ]}
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 1}}
                    style={{borderRadius: 8, width: 100, height: 33.5, justifyContent: 'center'}}
            >
                
                    <Text style={styles.DaybuttonHighText}>Ongoing</Text>
                
            </LinearGradient>
                
                
                <LinearGradient
                    colors={['#A32CDF', '#106AD2' ]}
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 1}}
                    style={{borderRadius: 8, width: 100, height: 33.5, justifyContent: 'center'}}
            >
                <View style={styles.bgblack}>
                    <Text style={styles.DaybuttonText}>Upcoming</Text>
                </View>
                    </LinearGradient>
                <LinearGradient
                    colors={['#A32CDF', '#106AD2' ]}
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 1}}
                    style={{borderRadius: 8, width: 100, height: 33.5, justifyContent: 'center'}}
            >
                <View style={styles.bgblack}>
                    <Text style={styles.DaybuttonText}>Concluded</Text>
                </View>
                    </LinearGradient>
            </View>
        </View>

        <View style={styles.TechO}>
            <View style={styles.TechOFlex}>
           
                <View style={styles.techOHead}>
                    <Text style={styles.techOHeadText}>Filter by Category</Text>
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <CheckBox/>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>Competitions</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.number}>12</Text>
                        </View>
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <CheckBox/>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>Workshops</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.number}>8</Text>
                        </View>
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <CheckBox/>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>Lecture Series</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.number}>6</Text>
                        </View>
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <CheckBox/>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>Nexus</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.specnumber}>5</Text>
                        </View>
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/> 
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <CheckBox/>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>Exhibitions</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.number}>3</Text>
                        </View>
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <CheckBox/>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>Pronites</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.number}>3</Text>
                        </View>
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <CheckBox/>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>Funniche</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.number}>10</Text>
                        </View>
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
            </View>
        </View>
        <View style={styles.TechE}>
            <View style={styles.TechOFlex}>
            <View style={{width: 320,height: 24,}}/>
                <View style={styles.techOHead}>
                    <Text style={styles.techOHeadText}>Filter by Price</Text>
                </View>
                    <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <CheckBox/>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>Free</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.number}>30</Text>
                        </View>
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <CheckBox/>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>Paid</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.number}>17</Text>
                        </View>
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                    <View style={{width: 320,height: 18,}}/>
                <View style={styles.filterholder}>
                <LinearGradient
                    colors={['#A32CDF', '#106AD2' ]}
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 1}}
                    style={{borderRadius: 8, width: 320, height: 44, justifyContent: 'center'}}>
                <View style={styles.filterflex}>
                    <View style={styles.filtersub}>
                    <Text style={styles.DaybuttonHighText}>Clear Filters</Text>
                    </View>
                    <View style={styles.verticalcontainer}>
                        <Image style={styles.vertical} source={require('../../assets/icons/vertical.png')}/>
                    </View>
                    <View style={styles.filtersub}>
                    <Text style={styles.DaybuttonHighText}>Apply Filters</Text>
                    </View>

                </View>
                </LinearGradient>
                </View>

            </View>
            
        </View>

        
    </View>
)}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
},
daysContainer: {
    width: 320.51,
    height: 34,
    borderRadius: 8,
    marginTop:5,
    },
    eventScheduleWrapper: {
        width: 320,
        height: 44,
        backgroundColor:'black',
        borderRadius: 8,
        marginTop:5,
        borderWidth: 1,
        borderColor: '#7F43E1'
        /*top:20,*/
        },
        eventScheduleText: {
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 16.71,
        paddingBottom: 13,
        paddingTop: 14,
        paddingLeft: 9,
        paddingRight: 214,
        color:'#7F43E1',
        },
DaybuttonHighText: {
fontFamily: 'SF Pro Display',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: 14,
lineHeight: 16.71,
color: '#ffffff',
opacity: 0.6 ,
textAlign: 'center',
},
TechO: {
width: 320,
height: 285,
borderRadius: 8,
marginTop:10,
},
TechOFlex: {
    flex: 1, 
        width:320,
        marginTop:5,
        justifyContent: 'space-between',},
days: {
    flex: 1, 
        flexDirection: 'row',
        width:320,
        marginTop:5,
        justifyContent: 'space-between',},
filterflex: {
    flex: 1, 
    flexDirection: 'row',
    width:320,
    marginTop:5,},
eventholder:{
    width: 50, 
    height: 34,
    justifyContent:'center',
    borderRadius: 8, 
    borderColor: 'white',
},
techOHead:{
    width: 320, 
    height: 34,
    borderRadius: 8, 
    justifyContent: 'center',
},
techOHeadText:{
    width: 150, 
    height: 24,
    borderRadius: 8, 
    fontSize:16,
    color:'#FFFFFF',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight:'bold',
},
techOText:{
    width: 100, 
    height: 18,
    borderRadius: 8, 
    fontSize:14,
    color:'#FFFFFF',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
},
eventName:{
    width: 200, 
    height: 18,
    fontSize:14,
    color:'#FFFFFF',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    paddingRight:46,
    left:193,
},
eventTime:{
    width: 150, 
    height: 18,
    fontSize:14,
    color:'#FFFFFF',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    paddingRight:20,
    textAlign: 'left',
    color: '#ffffff',
    opacity: 0.6 ,
},
techtextflex: {
    flex: 1, 
        flexDirection: 'row',
        width:320,
        marginTop:5,
},
    plus: {
        width: 14, 
        height: 14,
        marginLeft: 10,
    
        },
    box: {
        width: 17, 
        height: 17,
        marginLeft: 10,
         },
        bgblack: {
            width: 99, 
            height: 32.5,
            backgroundColor: 'black',
            justifyContent: 'center',
            borderRadius: 8,
        
            },
        timepanel: {
            borderRadius: 8,
            width: 60,
            height: 33.5, 
            justifyContent: 'center'},
        number:{
            width: 100, 
            height: 34,
            justifyContent:'center',
            borderRadius: 8, 
            borderColor: 'white',
            },
        number:{
            width: 240, 
            height: 18,
            fontSize:14,
            color:'#555555',
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            paddingRight:20,
            textAlign: 'right',
            },
            specnumber:{
                width: 240, 
                height: 18,
                fontSize:14,
                color:'#7F43E1',
                fontFamily: 'SF Pro Display',
                fontStyle: 'normal',
                paddingRight:20,
                textAlign: 'right',
                },
        TechE: {
            width: 320,
            height: 100,
            borderRadius: 8,
            marginTop:10,
            },
        DaybuttonText: {
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 16.71,
            color: '#7F43E1',
            textAlign: 'center',
            },
        DaybuttonHighText: {
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 16.71,
            color: 'white',
            textAlign: 'center',
            },
        filtersub: {
            width: 158, 
            height: 33.5,
            justifyContent: 'center',
        },
        verticalcontainer: {
            width: 2, 
            height: 33.5,
            justifyContent: 'center',
        },
        filterholder: {
            width: 320, height: 90, justifyContent: 'flex-end',
        },
        line: {
            width: 320,
            height: 1,
            backgroundColor: 'rgba(151, 151, 151, 0.1)',
            marginTop: 3,
        },
        vertical: {
            width: 1.5,
            height: 44,
            marginTop: 1,
            backgroundColor: '#7F43E1',
        },
});

export default Schedule;