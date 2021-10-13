import * as React from 'react';
import { StyleSheet, View, Text,TextInput, Image, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IconButton } from 'react-native-paper';

const SearchBox = () =>{

  return(
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
</View>);
};

const styles = StyleSheet.create({
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
    eventholder:{
      width: 100, 
      height: 34,
      justifyContent: 'center',
    },
    input: {
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontSize: 14,
      paddingLeft: 9,
      color: '#979797',
      width: 100,
    },
    searchicon:{
        height: 34,
        justifyContent: 'center',
    },
      
  },
);

export default SearchBox;