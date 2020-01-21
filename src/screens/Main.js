import React, {useEffect, useCallback, useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import * as postsActions from '../actions/posts';

import Colors from '../constants/Colors';
import Post from '../components/Post';
import LoadSpinner from '../components/LoadSpinner';

const Main = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  var posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  const loadPosts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(postsActions.fetchPosts());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadPosts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadPosts]);

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Button title="Try again" onPress={loadPosts} color={Colors.primary} />
      </View>
    );
  }

  if (isLoading) {
    return <LoadSpinner />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        onRefresh={loadPosts}
        refreshing={isRefreshing}
        data={posts}
        renderItem={({item}) => (
          <Post
            id={item.data.id}
            title={item.data.title}
            author={item.data.author}
            score={item.data.score}
            nbComments={item.data.num_comments}
            uri={item.data.url}
            date={item.data.created_utc}
            action={() => {
              props.navigation.navigate({
                routeName: 'Detail',
                params: {
                  permalink: item.data.permalink,
                },
              });
            }}
          />
        )}
        keyExtractor={item => item.data.id}
      />
    </View>
  );
};

Main.navigationOptions = {
  headerTitle: 'Hot Posts',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});

export default Main;
