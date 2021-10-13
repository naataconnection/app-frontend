
  
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
                <Image  source={plus ? require('../../assets/icons/linplus.png') : require('../../assets/icons/cross-icon.png')} color="#979797" size={20}  style={{marginLeft:95 , marginTop: 1,}}  />
            </TouchableOpacity>
            </View>
    );
}
const DayHigh3 = () => {
    const [textcolor, settextcolor] = useState(true)
    const [buttonbg, setbuttonbg] = useState(true)

    const DayHighHandler = () => {
        setbuttonbg(!buttonbg)
        settextcolor(!textcolor)
    }
    return (
        
            <View >
                <TouchableOpacity onPress={DayHighHandler}>
                <LinearGradient
                    colors={['#A32CDF', '#106AD2' ]}
                    start={{x: 0.5, y: 0.5}} 
                    end={{x: 1, y: 1}}
                    style={{borderRadius: 8, width: 100, height: 33.5, justifyContent: 'center'}}
            >
                    <View style={{borderRadius: 8, width: 100, height: 33.5, justifyContent: 'center',backgroundColor: buttonbg? 'black':'#7F43E1', borderColor:'#7F43E1', borderWidth:1,}}>
                        <Text style={{color:textcolor ? '#7F43E1' : 'white', textAlign:'center', fontSize:14}}>Day 3</Text>
                    </View>
                </LinearGradient>
                    </TouchableOpacity>  
            </View>
    )
}

const DayHigh2 = () => {
    const [textcolor, settextcolor] = useState(true)
    const [buttonbg, setbuttonbg] = useState(true)

    const DayHighHandler = () => {
        setbuttonbg(!buttonbg)
        settextcolor(!textcolor)
    }
    return (
        
            <View >
                <TouchableOpacity onPress={DayHighHandler}>
                <LinearGradient
                    colors={['#A32CDF', '#106AD2' ]}
                    start={{x: 0.5, y: 0.5}} 
                    end={{x: 1, y: 1}}
                    style={{borderRadius: 8, width: 100, height: 33.5, justifyContent: 'center'}}
            >
                    <View style={{borderRadius: 8, width: 100, height: 33.5, justifyContent: 'center',backgroundColor: buttonbg? 'black':'#7F43E1', borderColor:'#7F43E1', borderWidth:1,}}>
                        <Text style={{color:textcolor ? '#7F43E1' : 'white', textAlign:'center', fontSize:14}}>Day 3</Text>
                    </View>
                </LinearGradient>
                    </TouchableOpacity>  
            </View>
    )
}


const Schedule = () => {

    

    const [dropdown, setdropdown] = useState(true)
    
    const dropdownhandler = () => {
    
        setdropdown(!dropdown)
    }
    const [searchtext, setsearchtext] = useState('')
    
        return (

    <View style={styles.container}>

        <View style={styles.searchflexcontainer}>
            <View style={styles.searchWrapper}>
                
                    
                    <TextInput 
                        placeholder='Search'
                        placeholderTextColor='#979797'
                        onChangeText={text => setsearchtext(text)}
                        clearTextOnFocus={true}
                        style={styles.input}
                    />
                    <View style={styles.searchicon}>
                    <IconButton icon={'magnify'} color="#979797" size={25} style={{marginLeft : 80,}} />  
                    </View>
                    <View style={styles.searchicon}>
                        <IconButton icon={'power-on'} color="#979797" size={25}  />  
                    </View>
                    <View style={styles.searchicon}>
                        <IconButton icon={'menu'} color="#979797" size={25}  />   
                    </View>
                    
            </View>
        </View>

        <View style={styles.scheduleflexcontainer}>
            <View style={styles.eventScheduleWrapper}>
                
                    <View style={styles.eventholder}>
                        <Text style={styles.eventScheduleText}>Event Schedule</Text>
                    </View>
                    <View style={styles.eventholder}>
                    <IconButton icon={dropdown ? 'chevron-down' : 'chevron-up'} color="#7F43E1" size={30} style={{marginLeft : 57.5,}} onPress={dropdownhandler} />
                    </View>
            </View>
        </View>
        


        <View style={styles.daysContainer}>
            <View style={styles.days}>
                
            <LinearGradient
                    colors={['#A32CDF', '#106AD2' ]}
                    start={{x: 0.5, y: 0.5}} 
                    end={{x: 1, y: 1}}
                    style={{borderRadius: 8, width: 100, height: 33.5, justifyContent: 'center'}}
            >
                
                    <Text style={styles.DaybuttonHighText}>Day 1</Text>
                
            </LinearGradient>
                
                
                <DayHigh2/>
                <DayHigh3/>
                
            </View>
        </View>

        <View style={styles.TechO}>
            <View style={styles.TechOFlex}>
            <View style={{width: 320,height: 15,}}/>
                <View style={styles.techOHead}>
                    <View style={styles.Contentheading}>
                            <Text style={styles.techOHeadText}>Techolympics</Text>
                            <Image style={styles.info} source={require('../../assets/info.png')}/>
                    </View>
                </View>

                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <View style={styles.eventholder}>
                            <Text style={styles.techOText}>Mechanema</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>10:00am-11:30pm</Text>
                        </View>
                        
                        <CheckBox/>
                    </View>                                 
                </View>

                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <View style={styles.eventholder}>
                            <Text style={styles.techOText}>Codescape</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>9:00am-12:00pm</Text>
                        </View>
                        <CheckBox/>
                    </View>                                 
                </View>

                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <View style={styles.eventholder}>
                            <Text style={styles.techOText}>Crytophobia</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>2:00pm-3:00pm</Text>
                        </View>
                        <CheckBox/>
                    </View>                                 
                </View>

                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <View style={styles.eventholder}>
                            <Text style={styles.techOText}>Emulate</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>4:00pm-5:00pm</Text>
                        </View>
                        <CheckBox/>
                    </View>                                 
                </View>


            </View>
        </View>
        <View style={styles.TechE}>
            <View style={styles.TechOFlex}>
            <View style={{width: 320,height: 15,}}/>
                <View style={styles.techOHead}>
                    <View style={styles.Contentheading}>
                            <Text style={styles.techOHeadText}>TechExpo</Text>
                            <Image style={styles.info} source={require('../../assets/info.png')}/>
                    </View>
                </View>

                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <View style={styles.eventholder}>
                            <Text style={styles.techOText}>Inaugaration Ceremony</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>9:30am-10:30am</Text>
                        </View>
                        <CheckBox/>
                    </View>                                 
                </View>

                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <View style={styles.eventholder}>
                            <Text style={styles.techOText}>Expo</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>10:30am-5:00pm</Text>
                        </View>
                        <CheckBox/>
                    </View>                                 
                </View>
            </View>
        </View>

        <View style={styles.Corp}>
            <View style={styles.TechOFlex}>
            <View style={{width: 320,height: 15,}}/>
                <View style={styles.techOHead}>
                    <View style={styles.Contentheading}>
                            <Text style={styles.techOHeadText}>Corporate</Text>
                            <Image style={styles.info} source={require('../../assets/info.png')}/>
                    </View>
                </View>

                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <View style={styles.eventholder}>
                            <Text style={styles.techOText}>B-Plan</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>9:00am-12:00pm</Text>
                        </View>
                        <CheckBox/>
                    </View>                                 
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
eventScheduleWrapper: {
    flex: 1,
    flexDirection: 'row',
    width: 320,
    borderRadius: 8,
    marginTop:5,
    borderWidth: 1,
    borderColor: '#7F43E1',
    justifyContent: 'space-between',
},
scheduleflexcontainer: {
    width: 320,
    height: 44,
    borderRadius: 8,
    marginTop:5,
    },
searchflexcontainer: {
    width: 320,
    height: 44,
    borderRadius: 8,
    marginTop:5,
    },
searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    width: 320.51,
    height: 42,
    marginTop:5,
    backgroundColor:'#1E1E1E',
    borderRadius: 8,
    justifyContent: 'space-between',
    },
    input: {
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontSize: 12,
        paddingLeft: 17,
        color: '#979797',
        width: 100,
    },
    Contentheading: {
        flex: 1,
        flexDirection: 'row',
        width: 320.51,
        height: 42,
        marginTop:5,
        },
eventScheduleText: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 16.71,
    paddingLeft: 9,
    color:'#7F43E1',
    width: 150,
    height: 15,
},
searchbar: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 18.2,
    paddingLeft: 9,
    width: 100,
    height: 15,
    color:'white',
    },
daysContainer: {
    width: 320.51,
    height: 34,
    borderRadius: 8,
    marginTop:5,
    },

DaybuttonHighText: {
fontFamily: 'SF Pro Display',
fontStyle: 'normal',
fontSize: 14,
lineHeight: 16.71,
color: 'white',
textAlign: 'center',
},
DaybuttonText: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 16.71,
    color: '#7F43E1',
    textAlign: 'center',
    },
TechO: {
width: 320,
height: 195,
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
eventholder:{
    width: 100, 
    height: 34,
    justifyContent: 'center',
},
searchicon:{
    height: 34,
    justifyContent: 'center',
},
techOHead:{
    width: 320, 
    height: 34,
    borderRadius: 8, 
},
techOHeadText:{
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
    width: 200, 
    height: 18,
    fontSize:14,
    color:'#FFFFFF',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    paddingRight:20,
    textAlign: 'right',
},
techtextflex: {
    flex: 1, 
        flexDirection: 'row',
        width:320,
        marginTop:5,
},
TechE: {
width: 320,
height: 120,
borderRadius: 8,
marginTop:10,
},
Corp: {
    width: 320,
    height: 65,
    borderRadius: 8,
    marginTop:10,
    },
    plus: {
        width: 14, 
        height: 14,
        marginLeft: 95,
        marginTop: 1,
    
        },
    dropdown: {
        
        marginLeft: 72,
        marginTop: 1,
        },
    search: {
        width: 18,
        height: 18,
        marginLeft: 140,
        marginTop: 1,
            },
    info: {
        width: 18,
        height: 18,
        marginTop: 1,
        marginLeft: 11.5,
            },
    vertical: {
        width: 1.5,
        height: 18,
        marginTop: 1,
        left:68,
    },
    menu:{
        width: 18,
        height: 18,
        marginTop: 4,
    },
        bgblack: {
            width: 99, 
            height: 32.5,
            backgroundColor: 'black',
            justifyContent: 'center',
            borderRadius: 8,
        
            },
});

export default Schedule;