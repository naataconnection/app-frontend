import { Dimensions } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const _renderItem =  ({ item}, navigation) => {
    return (
        <View style={styles.carouselView}>
          <View style={styles.innerCarouselView}>
            <Text style={[styles.cardText, {flex: 3}]}>
                Service Code
            </Text>
            <Text style={[styles.cardText, {flex: 1}]}>
                :
            </Text>
            <Text style={[styles.cardText, {flex: 3}]}>
                {item.serviceCode}
            </Text>
          </View>
          <View style={styles.innerCarouselView}>
            <Text style={[styles.cardText, {flex: 3}]}>
                Service Code
            </Text>
            <Text style={[styles.cardText, {flex: 1}]}>
                :
            </Text>
            <Text style={[styles.cardText, {flex: 3}]}>
                {item.serviceCode}
            </Text>
          </View>
          <View style={styles.innerCarouselView}>
            <Text style={[styles.cardText, {flex: 3}]}>
                Service Code
            </Text>
            <Text style={[styles.cardText, {flex: 1}]}>
                :
            </Text>
            <Text style={[styles.cardText, {flex: 3}]}>
                {item.serviceCode}
            </Text>
          </View>
          <View style={styles.innerCarouselView}>
            <Text style={[styles.cardText, {flex: 3}]}>
                Service Code
            </Text>
            <Text style={[styles.cardText, {flex: 1}]}>
                :
            </Text>
            <Text style={[styles.cardText, {flex: 3}]}>
                {item.serviceCode}
            </Text>
          </View>
          <View style={styles.innerCarouselView}>
            <Text style={[styles.cardText, {flex: 3}]}>
                Service Code
            </Text>
            <Text style={[styles.cardText, {flex: 1}]}>
                :
            </Text>
            <Text style={[styles.cardText, {flex: 3}]}>
                {item.serviceCode}
            </Text>
          </View>
          <View style={styles.lastCarouselRow}>
              <TouchableHighlight onPress={item.mapping_func}>
                <View style={styles.CarouselButton}>
                    <Text>
                        View Request
                    </Text>
                </View>
              </TouchableHighlight>
          </View>
        </View>
      )
  }
    
const Schedule = ({ navigation }) => {

    const [activeIndex, setActiveIndex] = useState(4);

    const carouselItems = [
        {
            serviceCode:"serviceCode1",
            customer: "customer1",
            superUser:"superUser1",
            status:'Active',
            startDate:'2020-01-01',
            mapping_func : () => {
                navigation.navigate('GetOTP')
            }
        },
        {
            serviceCode:"serviceCode2",
            customer: "customer2",
            superUser:"superUser2",
            status:'Active',
            startDate:'2020-01-01'
        },
        {
            serviceCode:"serviceCode3",
            customer: "customer3",
            superUser:"superUser3",
            status:'Active',
            startDate:'2020-01-01'
        },
        {
            serviceCode:"serviceCode4",
            customer: "customer4",
            superUser:"superUser4",
            status:'Active',
            startDate:'2020-01-01'
        },
        {
            serviceCode:"serviceCode5",
            customer: "customer5",
            superUser:"superUser5",
            status:'Active',
            startDate:'2020-01-01'
        },
    ];

    return (
        <SafeAreaView style={styles.serviceContainer}>
            <ScrollView>
                <View style={styles.innerServiceContainer}>
                    <View style={styles.serviceRow}>
                        <Text style={styles.activeText}>
                            Active
                        </Text>
                        <Text style={styles.filterText}>
                            Fitler
                        </Text>
                    </View>
                    
                        <View style={styles.serviceCarousel}>
                            <Carousel
                            layout={"default"}
                            // ref={ref => this.carousel = ref}
                            data={carouselItems}
                            sliderWidth={windowWidth}
                            itemWidth={windowWidth*0.7}
                            renderItem={_renderItem}
                            onSnapToItem = { index => setActiveIndex(index) } 
                            />
                        </View>
                </View>
                <View style={styles.innerServiceContainer}>
                    <View style={styles.serviceRow}>
                        <Text style={styles.activeText}>
                            Active
                        </Text>
                        <Text style={styles.filterText}>
                            Fitler
                        </Text>
                    </View>
                    <View style={styles.serviceCarousel}>
                        <Carousel
                        layout={"default"}
                        // ref={ref => this.carousel = ref}
                        data={carouselItems}
                        sliderWidth={windowWidth}
                        itemWidth={windowWidth*0.7}
                        renderItem={_renderItem}
                        onSnapToItem = { index => setActiveIndex(index) } 
                        />
                    </View>
                </View>
                <View style={styles.innerServiceContainer}>
                    <View style={styles.serviceRow}>
                        <Text style={styles.activeText}>
                            Active
                        </Text>
                        <Text style={styles.filterText}>
                            Fitler
                        </Text>
                    </View>
                    <View style={styles.serviceCarousel}>
                        <Carousel
                        layout={"default"}
                        // ref={ref => this.carousel = ref}
                        data={carouselItems}
                        sliderWidth={windowWidth}
                        itemWidth={windowWidth*0.7}
                        renderItem={_renderItem}
                        onSnapToItem = { index => setActiveIndex(index) } 
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    serviceContainer: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#EFEFEF',
    },
    innerServiceContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: windowHeight * 0.025
    },
    serviceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: windowWidth*0.025
    },
    activeText: {
        fontFamily: 'Sofia Pro',
        fontSize: 24,
        fontWeight: '800',
        fontStyle: 'normal',
        color: '#000000'
    },
    filterText: {
        fontSize: 18,
        fontFamily: 'Sofia Pro',
        fontWeight: '700',
        fontStyle: 'normal',
        color: '#000000'
    },
    carouselView:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00B4D8',
        borderRadius: 16,
        width: windowWidth*0.8,
        height: windowHeight*0.25,
        padding: windowWidth*0.09,
    },
    innerCarouselView:{
        flexDirection: 'row',
        flex: 1,
        // margin: windowWidth*0.025,
        // justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center'
    },
    serviceCarousel: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardText:{
        // flex: 1,
        fontFamily: 'Sofia Pro',
        fontWeight: '700',
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 20
    },
    lastCarouselRow:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%'
    },
    CarouselButton:{
        backgroundColor: "#FFFFFF",
        flexDirection: 'column',
        justifyContent: 'center'
    }

});

export default Schedule;