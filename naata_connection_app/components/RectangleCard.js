import { Dimensions } from 'react-native';
import { Assets } from '@react-navigation/stack';
import React, { useState } from 'react';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { IconButton, Colors } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var tag = "";
var iconSwapR = false;

styleTag = function () {
  if (tag == "Live") {
    return (
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FF7388',
        borderRadius: 4,
        position: 'absolute',
        top: 5,
        left: 5,
        paddingTop: 0,
        paddingLeft: 4,
        paddingRight: 4,
        textTransform: 'uppercase',
      }
    );
  }
  else if (tag == "Reg. Open") {
    return (
      {
        backgroundColor: '#13BD8A',
        borderRadius: 4,
        position: 'absolute',
        top: 5,
        left: 5,
        padding: 5,
      }
    );
  }
  else if (tag == "Reg. Closed") {
    return (
      {
        backgroundColor: '#FF7388',
        borderRadius: 4,
        position: 'absolute',
        top: 5,
        left: 5,
        padding: 5,
      }
    );
  }
  else if (tag != null) {
    return (
      {
        backgroundColor: '#FFC716',
        borderRadius: 4,
        position: 'absolute',
        top: 5,
        left: 5,
        padding: 5,
      }
    );
  }
};

const RectangleCard = (props) => {
  const imageUrl = require('../assets/bg.png');
  const [icon, setIcon] = useState("heart-outline");
  tag = props.tag;
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.rectanglecard} >
        <ImageBackground source={imageUrl} style={styles.cardimage} imageStyle={{ borderRadius: 32 }}>
          <View style={styles.cardcontainer}>
            <Image blurRadius={10} source={require('../assets/bg.png')} style={styles.cardcontainerimage} />
            {/* <Icon name="close" size={36} style={styles.like} color="#000000" /> */}
            <View style={styles.cardContent}>
              <Text style={styles.cardtitle}>{props.title}</Text>
              <Text style={styles.cardsubtitle}>{props.subtitle}</Text>
            </View>

          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  cardcontainer: {
    flex: 3,
    flexDirection: 'column-reverse',
    overflow: 'hidden',
  },
  cardcontainerimage: {
    overflow: 'hidden',
    height: '48%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    borderRadius: 32,
  },
  cardContent: {
    marginBottom: windowHeight * 0.04
  },
  cardimage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 32,
  },
  cardtitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    paddingLeft: 10,
    paddingTop: 5,
  },
  cardsubtitle: {
    color: '#FFFFFF',
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: '600'
  },
  scrollView: {
    marginHorizontal: 20,
  },
  rectanglecard: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.25,
    borderRadius: 32,
    margin: windowWidth * 0.03,
  },
  like: {
    position: 'absolute',
    top: 0,
    right: 2,
  },
  tag: {
    color: "white",
    fontFamily: 'SF Pro Display',
  }
});
export default RectangleCard;