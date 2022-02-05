import { Dimensions } from 'react-native';
import React  from 'react';
import {View} from 'react-native';
import TouchableImage from './TouchableImage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Header({navigation,scene}){
    return (
      <View style={{backgroundColor:'#FFFFFF', height:windowHeight*0.06, display: 'flex', alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
        {(['Home','Schedule','Map'].includes(scene.route.name))?
          // <TouchableImage onPress={() => navigation.openDrawer() }
          // source={require('../assets/icons/drawer.png')} imageStyle={{height:25,width:25, margin:10}}/> :
          <></>:
          <TouchableImage onPress={()=> {navigation?navigation.goBack():scene.descriptor.navigation.jumpTo('Tabs')}} 
          source={require('../assets/icons/hdr_back.png')} imageStyle={{height:20,width:20, margin:10}}/>
        }
      </View>
    );
}

export default Header;