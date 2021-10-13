import { DefaultTheme, DarkTheme } from '@react-navigation/native';
export const customLightTheme = {
  dark: false,
  colors: {
    primary: '#FFF',
    secondary: '#EEE',
    accent: '#A32CDF',
    background: 'rgb(248, 248, 248)',
    highlight: '#CCCCCC' , 
    card: 'rgba(255, 255, 255, 1)',
    normalText: 'rgba(0, 0, 0, 0.6)',
    headerText: 'rgba(0, 0, 0, 0.87)',
    text: 'rgba(0, 0, 0, 0.87)',
    link: '#9262E4',
  },
};


export const customDarkTheme = {
  dark: true,
  colors: {
    primary: '#1E1E1E',
    secondary: '#1E1E1E',
    accent: '#A32CDF',
    background: '#121212',
    highlight: '#121212',
    card: 'rgb(30, 30, 30)',
    normalText: 'rgba(201, 201, 201, 1)',
    headerText: 'rgba(255, 255, 255, 0.87)',
    text: 'rgba(255, 255, 255, 0.87)',
    link: '#7F43E1',
  },
};

export const tagColors = {
  'LIVE':'#FF7388', 
  'Reg. Open':'#13BD8A',
  'Reg. Closed':'#FF7388',
  'default':'#FFC716'
}; 