import React  from 'react';
import {View} from 'react-native';
import TouchableImage from './TouchableImage';

function Header({navigation,scene}){
    return (
      <View style={{backgroundColor:'#1e1e1e', height:50, display: 'flex', alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
        {(['Home','Schedule','Map'].includes(scene.route.name))?
          <TouchableImage onPress={() => navigation.openDrawer() }
          source={require('../assets/icons/drawer.png')} imageStyle={{height:25,width:25, margin:10}}/> :
          <TouchableImage onPress={()=> {navigation?navigation.goBack():scene.descriptor.navigation.jumpTo('Tabs')}} 
          source={require('../assets/icons/hdr_back.png')} imageStyle={{height:20,width:20, margin:10}}/>
        }
        {(['Home','Schedule','Map'].includes(scene.route.name))?
          <TouchableImage onPress={() => {} }
          source={require('../assets/icons/hdr_notif.png')} imageStyle={{height:25,width:25, margin:10}}
          badge={scene.descriptor.options.headerNotification?<View style={{borderRadius:5, height:10, width:10, position:'absolute',top:0, right:0, backgroundColor:'#FF7388', borderWidth:1, borderColor:'#1e1e1e'}}/>:null}
          /> : null
        }
      </View>
    );
}

export default Header;