import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store/Store';
import AppNavigator from './navigations/Navigator';

import { useNavigation } from '@react-navigation/native';


function App() {
  // const navigation = useNavigation();
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>  
  );
}

export default App;