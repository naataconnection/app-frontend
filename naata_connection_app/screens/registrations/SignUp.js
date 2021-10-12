import React from 'react';
import { StyleSheet, Text, View , Image, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton =(props) => {
  return(
  <View style={styles.buttonContainer}>
    <LinearGradient 
      start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#A32CDF' , '#106AD2']} 
      style={styles.buttonGradient}>
          <Text style={styles.buttonText}>{props.content} </Text>
    </LinearGradient>
  </View>
  )
}

const SignUp = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image source={require('../../assets/Techniche_logo.png')} style={styles.image1} />
        <Image source={require('../../assets/Techniche.png')} style={styles.image2}/>
        <GradientButton content="Sign Up"/>
        <GradientButton content="Enter As Guest"/>
        <Text style={styles.loginLabel}>Already have an account?</Text>
      <GradientButton content="Log In"/>

      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  image1: {
    marginTop: 170,
    marginLeft: 117,
    marginRight: 118,
    width: 125,
    height: 125,
  },
  image2: {
    width: 236,
    height: 91,
    marginHorizontal: 62,
    marginTop: 9,
    marginBottom: 70,
  },
  buttonContainer: {
    width: 275,
    height: 44,
    marginBottom: 16,
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'SF Pro Display',
  },
  loginLabel: {
    color: 'white',
    paddingHorizontal: 100,
    marginTop: 38,
    marginBottom: 15,
  },
});

export default SignUp