import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

import Moment from 'react-moment';

const Post = props => (
  <TouchableOpacity onPress={props.action}>
    <View style={styles.outerWrapper}>
      <View style={styles.postWrapper}>
        <View style={styles.leftWrapper}>
          <Image style={{height: 80}} source={{uri: props.uri}} />
        </View>
        <View style={styles.rightWrapper}>
          <View style={styles.dateWrapper}>
            <Moment element={Text} fromNow unix>
              {props.date}
            </Moment>
          </View>
          <View style={styles.titleWrapper}>
            <Text numberOfLines={1}>{props.title}</Text>
          </View>
          <View style={styles.detailsWrapper}>
            <View style={styles.authorWrapper}>
              <Text>{props.author}</Text>
            </View>
            <View style={styles.textSmallWrapper}>
              <Text>{props.score}</Text>
            </View>
            <View style={styles.textSmallWrapper}>
              <Text>{props.nbComments}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  postWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 2,
  },
  outerWrapper: {
    padding: 7,
  },
  leftWrapper: {
    width: '25%',
    padding: 15,
  },
  rightWrapper: {
    width: '75%',
    padding: 15,
    alignItems: 'center',
  },
  detailsWrapper: {
    flexDirection: 'row',
  },
  dateWrapper: {
    width: '50%',
    marginLeft: '50%',
    alignItems: 'center',
  },
  authorWrapper: {
    width: '50%',
    alignItems: 'center',
  },
  textSmallWrapper: {
    width: '25%',
    alignItems: 'center',
  },
  titleWrapper: {
    marginVertical: 10,
  },
});

export default Post;
