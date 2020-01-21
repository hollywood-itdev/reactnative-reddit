import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import Colors from '../constants/Colors';

const LoadSpinner = () => (
  <View style={styles.activityIndicatorStyle}>
    <ActivityIndicator size="large" color={Colors.primaryColor} />
  </View>
);

const styles = StyleSheet.create({
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadSpinner;
