import React  from 'react';
import {Text, ImageBackground, TouchableHighlight} from 'react-native';
/** 
 * TouchableHighlight > ImageBackground > label?Text + badge?badge
 * @param props.touchableStyle Style prop of TouchableHighlight wrapper
 * @param props.onPress onPress callback
 * @param props.source Source of image
 * @param props.label (string) Text inside ImageBackground
 * @param props.badge (component) Badge component inside ImageBackground
 * @param props.imageStyle Style prop of ImageBacground
 * @param props.textStyle Style prop of Text
*/
function TouchableImage(props){
    return(
      <TouchableHighlight style={props.touchableStyle} onPress={props.onPress}>
        <ImageBackground source={props.source} style={props.imageStyle}>
          {props.label?<Text style={props.textStyle}>{props.label}</Text>:null}
          {props.badge}
        </ImageBackground>
      </TouchableHighlight>
    )
  }

export default TouchableImage;