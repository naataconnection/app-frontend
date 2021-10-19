import { Assets } from '@react-navigation/stack';
import { Button, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image, TouchableHighlight, ActivityIndicator, TouchableWithoutFeedback, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton, Colors } from 'react-native-paper';
import RectangleCard from '../../components/RectangleCard';
import SquareCard from '../../components/SquareCard';
import SearchBox from '../../components/SearchBox.js';
import { useSelector, connect } from 'react-redux';
import { setEvents } from '../../store/Action';
import { event } from 'react-native-reanimated';
import { orange, blue, red, green } from "../../constants/Color";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { tsNonNullExpression } from '@babel/types';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RectangleMoreCard = (props) => {
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={styles.rectmorecard}>
				<Text style={styles.rectmorecardtext}>+10 More</Text>
			</View>
		</TouchableWithoutFeedback>

	);
}

const SquareMoreCard = () => {
	return (
		<View style={styles.squamorecard}>
			<Text style={styles.squamorecardtext}>+10 More</Text>
		</View>
	);
}

const AllEvents = (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={{ flexDirection: 'column'}}>
				<View style={styles.scrollView}>
					<ImageBackground source={require('../../assets/naata_images/backgroundNotifications.png')} resizeMode="cover" style={styles.notificationsBackground}>
						<Text style={styles.heading}>Notifications</Text>
						<ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
							<RectangleCard
								key="1234"
								tag="Reg. Open"
								title="Demo"
								subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
								date="2020-01-01"
								imageUrl="../../assets/Techniche.png"
							// onPress={()=>{props.navigation.navigate('IndividualEvent',{e_id: event.e_id})}}
							/>
							<RectangleCard
								key="12345"
								tag="Reg. Open"
								title="Demo"
								subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
								date="2020-01-01"
								imageUrl="../../assets/Techniche.png"
							// onPress={()=>{props.navigation.navigate('IndividualEvent',{e_id: event.e_id})}}
							/>		
							<RectangleCard
								key="12346"
								tag="Reg. Open"
								title="Demo"
								subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
								date="2020-01-01"
								imageUrl="../../assets/Techniche.png"
							// onPress={()=>{props.navigation.navigate('IndividualEvent',{e_id: event.e_id})}}
							/>					
						</ScrollView>
					</ImageBackground>
				</View>

				<View style={styles.attendanceView}>
					<Text style={styles.attendanceText}>Attendance</Text>
					<View style={styles.innerAttendanceView}>
						<Text style={styles.attendanceDate}>
							10-10-2021
						</Text>
						<View style={styles.day}>
							<View style={styles.startDay}>
								<TouchableHighlight>
									<Text style={styles.startDayText}>
										Start Day
									</Text>
								</TouchableHighlight>
							</View>
							<View style={styles.endDay}>
								<TouchableHighlight>
									<Text style={styles.endDayText}>
										End Day
									</Text>
								</TouchableHighlight>
							</View>
						</View>
					</View>
				</View>
        <View style={styles.entryView}>
            <View style={styles.dieselView}>
              <View style={styles.innerDieselView}>
                <View style={{flex:1}}>
                  <Text style={styles.dieselText}>
                    Diesel Entry
                  </Text>
                </View>
                <View style={styles.dieselRow}>
                  <Text style={styles.newFormText}>
                    Fill new form
                  </Text>
                  <TouchableHighlight>
                        <Image source={require('../../assets/naata_images/nextButtonBlue.png')} style={styles.nextButton}></Image>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            <View style={[styles.dieselView, {backgroundColor:"#00B4D8"}]}>
              <View style={styles.innerDieselView}>
                <View style={{flex:1}}>
                  <Text style={styles.dieselText}>
                    Other Expenses
                  </Text>
                </View>
                <View style={styles.dieselRow}>
                  <Text style={styles.newFormText}>
                    Fill new form
                  </Text>
                  <TouchableHighlight>
                        <Image source={require('../../assets/naata_images/nextButtonOrange.png')} style={styles.nextButton}></Image>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
        </View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	notificationsBackground: {
		height: windowHeight * 0.35,
		width: windowWidth
	},
	container: {
		alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
	},
	heading: {
		color: '#FFFFFF',
		fontSize: 26,
		lineHeight: 43,
		fontWeight: "900",
		fontFamily: 'Sofia Pro',
		marginTop: windowHeight * 0.02,
		marginLeft: windowWidth * 0.06
	},
	attendanceView: {
		margin: windowWidth * 0.05,
		padding: windowWidth * 0.05,
		backgroundColor: "#CAF0F8",
		borderRadius: 24,
    width: windowWidth*0.9
	},
	innerAttendanceView: {
		margin: windowWidth * 0.05,
		padding: windowWidth * 0.02,
		backgroundColor: "#FFFFFF",
		flexDirection: "column",
		alignItems: "center"
	},
	attendanceText: {
		fontSize: 26,
		fontWeight: "700",
		fontFamily: "Sofia Pro"
	},
	attendanceDate: {
		fontFamily: "Sofia Pro",
		fontSize: 36,
		fontWeight: "300",
		marginBottom: windowHeight * 0.01
	},
	day: {
		height: windowHeight * 0.125,
		width: windowWidth * 0.65,
		// backgroundColor: "#00B4D8",
		flexDirection: "column",
	},
	startDay: {
		flex: 1,
		backgroundColor: "#00B4D8",
		flexDirection: "column",
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: windowHeight*0.005,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
	},
  endDay:{
    flex:1,
    backgroundColor: "#F3752B",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  startDayText:{
    color: "#FFFFFF",
    fontFamily: "Sofia Pro",
  },
  endDayText:{
    color:"#FFFFFF",
    fontFamily: "Sofia Pro"
  },
  entryView:{
		margin: windowWidth * 0.05,
		// backgroundColor: "#CAF0F8",
		borderRadius: 24,
    width: windowWidth*0.9,
    height: windowHeight*0.4
  },
  dieselView:{
    flex:1,
    backgroundColor: "#F3752B",
    marginBottom: windowHeight*0.028,
    borderRadius:18
  },
  innerDieselView:{
    margin: windowWidth*0.02,
    flexDirection: 'column',
    height: windowHeight*0.2,
    padding: windowWidth*0.01
  }, 
  dieselRow:{
    flexDirection:'row',
    flex: 3,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dieselText:{
    fontSize: 36,
    fontWeight: '700',
    fontFamily: "Sofia Pro",
    color: '#FFFFFF',
  },
  newFormText:{
    fontSize: 20,
    fontWeight: '300',
    fontFamily: "Sofia Pro",
    color: '#FFFFFF',
  },
  otherView: {
    flex:1,
    backgroundColor: "#00B4D8",
    marginBottom: windowHeight*0.028,
    borderRadius:18
  }
});

export default AllEvents;