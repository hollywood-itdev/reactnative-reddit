export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => {
  return async dispatch => {
    const response = await fetch('https://api.reddit.com/r/pics/hot.json');
    const resData = await response.json();

    dispatch({
      type: FETCH_POSTS,
      posts: resData.data.children,
    });
  };
};
