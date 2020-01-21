import React from 'react';
import PostList from './containers/PostList';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import postsReducer from './reducers/posts';

const rootReducer = combineReducers({
  posts: postsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => (
  <Provider store={store}>
    <PostList />
  </Provider>
);

export default App;
