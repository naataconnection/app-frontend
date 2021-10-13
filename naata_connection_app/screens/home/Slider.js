import React from "react";
import {View, Text, StyleSheet, Animated, TouchableOpacity, Image} from "react-native";

export default class SliderButton extends React.Component {
  state ={
    len: "10%",
    slidelen: "100%",
    // otherlen: "25%",
  }
  animation = new Animated.Value(1);

  toggleMenu = () =>{
    const toValue = this.open ? 1: 0;
    Animated.spring(this.animation,{
      toValue,
      friction: 5,
      duration: 5000,
      useNativeDriver: true,
    }).start()
    this.setState({len: this.open?"10%":"50%", slidelen:this.open?"100%":"25%", 
    // otherlen:this.open?"0%":"25%"
  })
    this.open = !this.open;
  };

  render(){
    const slideSchedule = {
      transform:[
        {
          translateX:this.animation.interpolate({
            inputRange:[0,1],
            outputRange:[0,100]
          })
        }
      ]
    };

    const slideLocation = {
      transform:[
        {
          translateX:this.animation.interpolate({
            inputRange:[0,1],
            outputRange:[0,100]
          })
        }
      ]
    };

    const slideShare = {
      transform:[
        {
          translateX:this.animation.interpolate({
            inputRange:[0,1],
            outputRange:[0,100]
          })
        }
      ]
    };

    const slide = {
      transform:[
        {
          translateX:this.animation.interpolate({
            inputRange:[0,1],
            outputRange:[0,-50]
          })
        }
      ]
    };

    const rotation = {
    transform: [
       {
          translateX:this.animation.interpolate({
            inputRange:[0,1],
            outputRange:[0,0]
          })
        },
      {
          rotate: this.animation.interpolate({
            inputRange:[0,1],
            outputRange:["0deg","180deg"]
        })
      }
      ]
    }

  return (
        <View style={styles.container,{width:this.state.len}}>
        <TouchableOpacity style={{width:this.state.slidelen},styles.slider} activeOpacity={0.95} onPress={this.toggleMenu}>
          <Animated.View style={{
            flex:1,
            flexDirection:"row",
            alignSelf:"center",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#242424",
      },rotation} >
            <Image style={styles.sliderActionBtn} source={require('../../assets/swipein.png')}/>
          </Animated.View>
        </TouchableOpacity >

        <TouchableOpacity style={styles.oneslide} activeOpacity={0.95}>
          <Animated.View style={slideSchedule,{
            flex:1,
            flexDirection:"row",
            alignSelf:"center",
            justifyContent:"center",
            alignItems:"center",
      }} >
            <Image style={styles.sliderBtn} source={require('../../assets/eventSchedule.png')}/>
          </Animated.View>
        </TouchableOpacity >

        <TouchableOpacity style={styles.twoslide} activeOpacity={0.95}>
          <Animated.View style={slideLocation,{
            flex:1,
            flexDirection:"row",
            alignSelf:"center",
            justifyContent:"center",
            alignItems:"center",
      }} >
            <Image style={styles.sliderBtn} source={require('../../assets/eventLocation.png')}/>
          </Animated.View>
        </TouchableOpacity >

        <TouchableOpacity style={styles.threeslide} activeOpacity={0.95}>
          <Animated.View style={slideShare,{
            flex:1,
            flexDirection:"row",
            alignSelf:"center",
            justifyContent:"center",
            alignItems:"center",
      }}>
            <Image style={styles.sliderBtn} source={require('../../assets/share.png')}/>
          </Animated.View>
        </TouchableOpacity >
        </View>
  );
  };
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:"row",
      alignItems:"center",
      // justifyContent:"space-around",
      // position:"absolute",
      // top:"20%",
      // right:"-10%",
      height:"10%",
      // width:"50%",
    },
    slider:{
      position:"absolute",
      backgroundColor:"#242424",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      height:"10%",
      overflow: "hidden",
      zIndex:400,
    },
    oneslide:{
      position:"absolute",
      left:"25%",
      height:"10%",
      width:"25%",
      backgroundColor:"#242424",
    },
    twoslide:{
      position:"absolute",
      left:"50%",
      height:"10%",
      width:"25%",
      backgroundColor:"#242424",
    },
    threeslide:{
      position:"absolute",
      left:"75%",
      height:"10%",
       width:"25%",
      backgroundColor:"#242424",
    },
    sliderActionBtn:{
      marginVertical:10,
      marginHorizontal:21,
      zIndex:400,
      backgroundColor:"#242424",
      // borderTopLeftRadius: 25,
      // borderBottomLeftRadius: 25,
    },
    sliderBtn:{
      // position:"absolute",
      // top:0,
      // bottom:0,
      zIndex:100,
      backgroundColor:"#242424",
    }
});