import {Platform} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '../screens/Main';
import PostDetail from '../screens/PostDetail';
import Colors from '../constants/Colors';

const headerStyling = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const PostList = createStackNavigator(
  {
    Main: {
      screen: Main,
    },
    Detail: {
      screen: PostDetail,
    },
  },
  {
    defaultNavigationOptions: headerStyling,
  },
);

export default createAppContainer(PostList);
