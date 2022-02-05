import { Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SERVER_HOSTNAME, API_ENDPOINT } from "../../config";
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import axios from 'axios';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Profile = (props) => {
    const user = props.user;
    const [additionalInfo, setAdditionalInfo] = useState(null);
    const [updateInfo, setUpdateInfo] = useState(false);
    const [companyName, setCompanyName] = useState(user.companyName ? user.companyName : "");
    const [address, setAddress] = useState(user.address ? user.address : "");
    const [city, setCity] = useState(user.city ? user.city : "");
    const [state, setState] = useState(user.state ? user.state : "");
    const [department, setDepartment] = useState(user.department ? user.department : "");
    const [gst, setGst] = useState(user.gst ? user.gst : "");
    const [secondarycontact, setSecondaryContact] = useState(user.secondaryContact ? user.secondaryContact : "");

    const updateProfileAPI = async () => {
        const body = {
            companyName,
            address,
            city,
            state,
            department,
            gst,
            secondarycontact,
            isProfileImage:0
        }

        const data = new FormData();

        Object.keys(body).forEach(key => {
            data.append(key, body[key]);
        });

        try {
            const response = await axios.post(`${API_ENDPOINT}/user/registerCustomer`, body);

            console.log("response from register API:", response);
        }
        catch(err){
            console.log("Error:", err);
        }
    }

    useEffect(() => {
        const getAdditionalInfo = async () => {
            try {
                // console.log("UserCode", user.userCode);
                var response = null;

                if (user.role == 'CUSTOMER') {
                    response = await axios.post(`${API_ENDPOINT}/users/customer`, {
                        userCode: user.userCode
                    });
                }
                else if (user.role == 'MANAGER') {
                    response = await axios.post(`${API_ENDPOINT}/users/manager`, {
                        userCode: user.userCode
                    });
                }
                else if (user.role == 'DRIVER') {
                    response = await axios.post(`${API_ENDPOINT}/users/driver`, {
                        userCode: user.userCode
                    })
                }
                else if (user.role == 'DELIVERY BOY') {
                    response = await axios.post(`${API_ENDPOINT}/users/deliveryBoy`, {
                        userCode: user.userCode
                    })
                }


                if (response != null && response.status == 200) {
                    console.log('Response from additional info', response.data.data);
                    setAdditionalInfo(response.data.data);
                }
                else {
                    console.log('Response from failed request:', response.data);
                }

            }
            catch (err) {
                console.log(err);
            }
        }
        getAdditionalInfo();
    }, []);

    return (
        <SafeAreaView style={styles.orderContainer}>
            <ScrollView style={styles.scrollOrderContainer}>
                <View style={styles.innerOrderContainer}>
                    <View style={styles.orderHeader}>
                        <Text style={styles.heading}>
                            User
                        </Text>
                    </View>
                    <View style={styles.carouselView}>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8 }]}>
                                First Name
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10 }]}>
                                {user.firstName ? user.firstName : '-'}
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8 }]}>
                                Last Name
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10 }]}>
                                {user.lastName ? user.lastName : '-'}
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8 }]}>
                                Email Id
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10 }]}>
                                {user.emailId ? user.emailId : '-'}
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8 }]}>
                                Contact
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10 }]}>
                                {user.contact ? user.contact : '-'}
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8 }]}>
                                User Code
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10 }]}>
                                {user.userCode ? user.userCode : '-'}
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8 }]}>
                                Role
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10 }]}>
                                {user.role ? user.role : '-'}
                            </Text>
                        </View>
                        <View style={styles.innerCarouselView}>
                            <Text style={[styles.cardText, { flex: 8 }]}>
                                Active
                            </Text>
                            <Text style={[styles.cardText, { flex: 1 }]}>
                                :
                            </Text>
                            <Text style={[styles.cardText, { flex: 10 }]}>
                                {user.active ? 'YES' : 'NO'}
                            </Text>
                        </View>
                    </View>


                </View>
                {user.role == 'CUSTOMER' &&
                    <View style={styles.innerOrderContainer}>
                        <View style={styles.orderHeader}>
                            <Text style={styles.heading}>
                                {user.role}
                            </Text>
                        </View>
                        {additionalInfo != null &&
                            <View style={[styles.carouselView, { backgroundColor: '#E3E3E1' }]}>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Company Name
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    {updateInfo ?
                                        <TextInput
                                            placeholder={'Enter Company Name'}
                                            placeholderTextColor='#00B4D8'
                                            onChangeText={(text) => {
                                                setCompanyName(text);
                                            }}
                                            clearTextOnFocus={true}
                                            style={[styles.input, { flex: 10, }]}
                                        /> :
                                        <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                            {additionalInfo.companyName ? additionalInfo.companyName : '-'}
                                        </Text>
                                    }
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Address
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    {updateInfo ?
                                        <TextInput
                                            placeholder='Enter Address'
                                            placeholderTextColor='#00B4D8'
                                            onChangeText={(text) => {
                                                setAddress(text);
                                            }}
                                            clearTextOnFocus={true}
                                            style={[styles.input, { flex: 10, }]}
                                        /> :
                                        <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                            {additionalInfo.address ? additionalInfo.address : '-'}
                                        </Text>
                                    }
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        City
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    {updateInfo ?
                                        <TextInput
                                            placeholder='Enter City'
                                            placeholderTextColor='#00B4D8'
                                            onChangeText={(text) => {
                                                setCity(text);
                                            }}
                                            clearTextOnFocus={true}
                                            style={[styles.input, { flex: 10 }]}
                                        />
                                        :
                                        <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                            {additionalInfo.city ? additionalInfo.city : '-'}
                                        </Text>
                                    }

                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        State
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    {updateInfo ?
                                        <TextInput
                                            placeholder='Enter State'
                                            placeholderTextColor='#00B4D8'
                                            onChangeText={(text) => {
                                                setState(text);
                                            }}
                                            clearTextOnFocus={true}
                                            style={[styles.input, { flex: 10 }]}
                                        />
                                        :
                                        <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                            {additionalInfo.state ? additionalInfo.state : '-'}
                                        </Text>
                                    }
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Department
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    {updateInfo ?
                                        <TextInput
                                            placeholder='Enter Department'
                                            placeholderTextColor='#00B4D8'
                                            onChangeText={(text) => {
                                                setDepartment(text);
                                            }}
                                            clearTextOnFocus={true}
                                            style={[styles.input, { flex: 10 }]}
                                        />
                                        :
                                        <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                            {additionalInfo.department ? additionalInfo.department : '-'}
                                        </Text>
                                    }

                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        GST
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    {updateInfo ?
                                        <TextInput
                                            placeholder='Enter GST'
                                            placeholderTextColor='#00B4D8'
                                            onChangeText={(text) => {
                                                setGst(text);
                                            }}
                                            clearTextOnFocus={true}
                                            style={[styles.input, { flex: 10 }]}
                                        />
                                        :
                                        <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                            {additionalInfo.gst ? additionalInfo.gst : '-'}
                                        </Text>
                                    }
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Secondary Contact
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    {updateInfo ?
                                        <TextInput
                                            placeholder='Enter Contact'
                                            placeholderTextColor='#00B4D8'
                                            onChangeText={(text) => {
                                                setSecondaryContact(text);
                                            }}
                                            clearTextOnFocus={true}
                                            style={[styles.input, { flex: 10 }]}
                                        />
                                        :
                                        <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                            {additionalInfo.secondaryContact ? additionalInfo.secondaryContact : '-'}
                                        </Text>
                                    }
                                </View>
                                <View style={styles.lastCarouselRow}>
                                    {updateInfo ?
                                        <TouchableHighlight onPress={() => {
                                            setUpdateInfo(false);
                                            updateProfileAPI();
                                        }}>
                                            <View style={styles.CarouselButton}>
                                                <Text style={styles.requestButton}>
                                                    Save Details
                                                </Text>
                                            </View>
                                        </TouchableHighlight>
                                        :
                                        <TouchableHighlight onPress={() => {
                                            setUpdateInfo(true);
                                        }}>
                                            <View style={styles.CarouselButton}>
                                                <Text style={styles.requestButton}>
                                                    Update Details
                                                </Text>
                                            </View>
                                        </TouchableHighlight>
                                    }

                                </View>
                            </View>}
                    </View>}

                {user.role == 'DRIVER' &&
                    <View style={styles.innerOrderContainer}>
                        <View style={styles.orderHeader}>
                            <Text style={styles.heading}>
                                {user.role}
                            </Text>
                        </View>
                        {additionalInfo != null &&
                            <View style={[styles.carouselView, { backgroundColor: '#E3E3E1' }]}>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Address
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {additionalInfo.address ? additionalInfo.address : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        City
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {additionalInfo.city ? additionalInfo.city : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        State
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {additionalInfo.state ? additionalInfo.state : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Contact
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {additionalInfo.secondaryContact ? additionalInfo.secondaryContact : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Date of Joining
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {additionalInfo.dateOfJoining ? additionalInfo.dateOfJoining : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Date of Termination
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {additionalInfo.dateOfTermination ? additionalInfo.dateOfTermination : '-'}
                                    </Text>
                                </View>
                            </View>}
                    </View>}

                {user.role == 'DELIVERY BOY' &&
                    <View style={[styles.innerOrderContainer]}>
                        <View style={styles.orderHeader}>
                            <Text style={styles.heading}>
                                {user.role}
                            </Text>
                        </View>
                        {additionalInfo != null &&
                            <View style={[styles.carouselView, { backgroundColor: '#E3E3E1', height: windowHeight * 0.5 }]}>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Age
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {additionalInfo.age ? additionalInfo.age : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Blood Group
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {additionalInfo.bloodGroup ? additionalInfo.bloodGroup : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Address
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {additionalInfo.address ? additionalInfo.address : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        City
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {additionalInfo.city ? additionalInfo.city : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        State
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {additionalInfo.state ? additionalInfo.state : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Secondary Contact
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {additionalInfo.secondaryContact ? additionalInfo.secondaryContact : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Date of Joining
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {additionalInfo.dateOfJoining ? additionalInfo.dateOfJoining : '-'}
                                    </Text>
                                </View>
                                <View style={styles.innerCarouselView}>
                                    <Text style={[styles.cardText, { flex: 8, color: '#4E4E4E' }]}>
                                        Date of Termination
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 1, color: '#4E4E4E' }]}>
                                        :
                                    </Text>
                                    <Text style={[styles.cardText, { flex: 10, color: '#4E4E4E' }]}>
                                        {additionalInfo.dateOfTermination ? additionalInfo.dateOfTermination : '-'}
                                    </Text>
                                </View>
                            </View>}
                    </View>}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    orderContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    scrollOrderContainer: {
        flex: 1
    },
    innerOrderContainer: {
        flexDirection: 'column',
        flex: 1,
        margin: windowWidth * 0.05,
    },
    orderHeader: {
        flex: 1,
        marginBottom: windowHeight * 0.025,
    },
    orderCard: {
        flex: 5,
        backgroundColor: "#00B4D8",
    },
    innerOrderCard: {
        flex: 1,
        margin: windowWidth * 0.05,
    },
    groupTextView: {
        flexDirection: 'column',
        flex: 2,
    },
    infoCard: {
        flexDirection: 'column',
        flex: 4,
    },
    heading: {
        fontSize: 26,
        fontWeight: '700',
        color: "#000000",
        fontFamily: "Sofia Pro"
    },
    groupText: {
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Sofia Pro',
        color: "#FFFFFF",
    },
    cardRows: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: windowHeight * 0.2
    },
    normalText: {
        fontFamily: 'Sofia Pro',
        fontSize: 14,
        fontWeight: '700'
    },
    carouselView: {
        flexDirection: 'column',
        backgroundColor: '#00B4D8',
        borderRadius: 16,
        width: windowWidth * 0.90,
        height: windowHeight * 0.4,
        padding: windowWidth * 0.05,
        marginRight: windowWidth * 0.04,
        marginBottom: windowHeight * 0.04,
    },
    lastCarouselView: {
        flexDirection: 'column',
        backgroundColor: '#52B788',
        borderRadius: 16,
        width: windowWidth * 0.90,
        height: windowHeight * 0.15,
        padding: windowWidth * 0.05,
        marginBottom: windowHeight * 0.08
    },
    innerCarouselView: {
        flexDirection: 'row',
        flex: 1,
        alignContent: 'space-around'
    },
    cardText: {
        // flex: 1,
        fontFamily: 'Sofia Pro',
        fontWeight: '700',
        color: '#FFFFFF',
        fontSize: 20,
        // lineHeight: 20
    },
    groupHeader: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        marginBottom: windowHeight * 0.02
    },
    lastGroupHeader: {
        flexDirection: 'row',
        alignContent: 'flex-start',
    },
    groupHeaderText: {
        fontSize: 26,
        fontWeight: '700',
        fontFamily: 'Sofia Pro',
        color: '#FFFFFF'
    },
    viewOrder: {
        backgroundColor: "#FFFFFF",
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: windowWidth * 0.01,
        borderRadius: 8,
        width: windowWidth * 0.20,
        height: windowHeight * 0.04
    },
    orderText: {
        fontSize: 18,
        fontFamily: 'Sofia Pro',
        fontWeight: '700',
        color: "#F3752B"
    },
    input: {
        // flex: 1,
        fontFamily: 'Sofia Pro',
        color: '#00B4D8',
        fontWeight: '700',
        fontSize: 20,
        // lineHeight: 20
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 0,
        paddingLeft: 5,
        marginBottom: windowHeight * 0.01
    },
    lastCarouselRow: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%'
    },
    CarouselButton: {
        backgroundColor: "#FFFFFF",
        flexDirection: 'column',
        justifyContent: 'center',
        padding: windowWidth * 0.01,
        borderRadius: 12
    },
    requestButton: {
        fontFamily: 'Sofia Pro',
        fontWeight: '700',
        fontSize: 18

    }
});

export default Profile;