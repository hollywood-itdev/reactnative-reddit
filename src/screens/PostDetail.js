import React from 'react';
import {WebView} from 'react-native-webview';

const PostDetail = props => {
  var permalink = props.navigation.getParam('permalink');

  return <WebView source={{uri: 'https://www.reddit.com/' + permalink}} />;
};

PostDetail.navigationOptions = {
  headerTitle: 'Post details',
};

export default PostDetail;
