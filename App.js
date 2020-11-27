import React from 'react';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderBackground } from 'react-navigation-stack';
import {Provider } from './context/BlogContext';
import CreateScreen from './screens/CreateScreen';
import EditScreen from './screens/EditScreen';

import IndexScreen from './screens/IndexScreen';
import ShowScreen from './screens/ShowScreen';

const screens = createStackNavigator({
  
  "Index screen":{
   screen:IndexScreen
  },
  "Show Screen":{
    screen:ShowScreen,
  },
  "Create Screen":
  {
    screen:CreateScreen
  },
  "Edit Screen":{
    screen:EditScreen
  }

})
const App =createAppContainer(screens);
export default()=>{
  
  return(
  <Provider>
  <App/>
  </Provider>
    
    

);
}