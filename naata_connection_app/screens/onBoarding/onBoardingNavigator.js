import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import {View, Animated,Easing} from 'react-native'
import OnBoarding from './onBoarding';


const stack = createStackNavigator();
const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0,1, 2],
              outputRange: [screen.width - 10, 0, -screen.width ],
              extrapolate: 'clamp',
            }),
            inverted
          ),
        },
      ],
    },
  };
};


const OnBoardingNavigator = () => {
    return(
        <NavigationContainer style={{backgroundColor: 'black'}} independent={true}>
            <stack.Navigator 
            screenOptions={{headerShown: false}}
            >
                <stack.Screen name="OnBoarding0" component={OnBoarding} options={{  cardStyleInterpolator: forSlide, }} initialParams={{pageIndex : 0,  }}/>
                <stack.Screen name="OnBoarding1" component={OnBoarding} options={{  cardStyleInterpolator: forSlide, }} initialParams={{pageIndex : 1,  }} />
                <stack.Screen name="OnBoarding2" component={OnBoarding} options={{ cardStyleInterpolator: forSlide, }} initialParams={{pageIndex : 2, }} />
            </stack.Navigator>
        </NavigationContainer>
    )
    
}
export default OnBoardingNavigator