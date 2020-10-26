import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './screens/IndexScreen';

const screens = createAppContainer({
  "Index screen":{
    screen: IndexScreen
  }

})
export default createStackNavigator(screens);