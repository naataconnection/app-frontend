import * as React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Schedule = () => {
return (
    <View style={styles.container}>
        <View style={styles.TechO}>
            <View style={styles.TechOFlex}>
            <View style={{width: 320,height: 24,}}/>
                <View style={styles.techOHead}>
                    <Text style={styles.techOHeadText}>25th September 2020</Text>
                </View>
            <View style={styles.Eventsondate}>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                    
                        <View style={styles.eventholder}>
                            <Text style={styles.speceventTime}>Robocalypse: Starting in 5 hours</Text>
                        </View>
                        <View style={styles.eventholder}>
                            <View style={styles.notifcircle}/>
                        </View>
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        
                        <View style={styles.eventholder}>
                            <Text style={styles.speceventTime}>Robocalypse: Postponed until further notice</Text>
                        </View>
                        <View style={styles.eventholder}>
                        <View style={styles.notifcircle}/>  
                        </View>
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        
                        <View style={styles.eventholder}>
                            <Text style={styles.speceventTime}> Robocalypse: Delayed by 1 hour</Text>
                        </View>
                        <View style={styles.eventholder}>
                        <View style={styles.notifcircle}/> 
                        </View>
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>Robocalypse: Cancelled</Text>
                        </View>

                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>Robocalypse: Venue changed, refer event page</Text>
                        </View>
                        
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>Robocalypse: Results posted, refer event page</Text>
                        </View>
                        
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>Robocalypse: Starting in 5 hours</Text>
                        </View>
                        
                    </View>                                 
                </View>
                <Image style={styles.line} source={require('../../assets/icons/LongHorLine.png')}/>
                <View style={styles.techOHead}>
                    <View style={styles.techtextflex}>
                        
                        <View style={styles.eventholder}>
                            <Text style={styles.eventTime}>Robocalypse: Starting in 5 hours</Text>
                        </View>
                        
                    </View>                                 
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
Eventsondate: {
    width: 320,
    height: 320,
    borderRadius: 8,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
},
searchWrapper: {
    width: 320.51,
    height: 15,
    marginTop:16,
/*top:16*/
},
searchbar: {
fontFamily: 'SF Pro Display',
fontStyle: 'normal',
fontSize: 12,
lineHeight: 18.2,
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
fontWeight: 'normal',
fontSize: 14,
lineHeight: 16.71,
color: '#ffffff',
opacity: 0.6 ,
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
},
techOHeadText:{
    width: 300, 
    height: 24,
    fontSize:14,
    color:'#FFFFFF',
    opacity: 0.87,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
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
    width: 300, 
    height: 18,
    fontSize:14,
    color:'#FFFFFF',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    paddingRight:20,
    textAlign: 'left',
    color: '#ffffff',
    opacity: 0.3 ,
    left: 17,
},
speceventTime:{
    width: 300, 
    height: 18,
    fontSize:14,
    color:'#FFFFFF',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    paddingRight:20,
    textAlign: 'left',
    color: '#ffffff',
    opacity: 0.6 ,
    left: 17,
},
techtextflex: {
    flex: 1, 
        flexDirection: 'row',
        width:320,
        height: 40,
        marginTop:5,
},
    plus: {
        width: 14, 
        height: 14,
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
            paddingRight:1,
            textAlign: 'right',
            },
        line: {
            width: 320,
            height: 0.5,
            backgroundColor: 'rgba(151, 151, 151, 0.1)',
            marginTop: 3,
            },
        scroller: {
            width: 284,
            height: 1,
            backgroundColor: 'rgba(151, 151, 151, 0.1)',
            marginTop: 10,
            },
        highlightscroller: {
            width: 165,
            height: 1,
            backgroundColor: '#7F43E1',
            marginTop: 5,
            },
        box: {
            width: 17, 
           height: 17,
            marginLeft: 10,
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
        vertical: {
            width: 1.5,
            height: 44,
            marginTop: 1,
            backgroundColor: '#7F43E1',
        },
    filterflex: {
        flex: 1, 
        flexDirection: 'row',
        width:320,
        marginTop:5,},
        scrollerpanel: {
        flex: 1,
        flexDirection: 'row',
    },
    notifcircle: {
        width: 6, 
        height: 6, 
        backgroundColor: '#FF7388' ,
        borderRadius: 3,
        marginLeft: 250,
    }
});

export default Notification;