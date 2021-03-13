// import Cookies from 'js-cookie';

const SET_POSTS = 'posts/SET_POSTS';


export const setPosts = posts => {
  return {
    type: SET_POSTS,
    posts
  }
}

export const getPosts = () => {
  return async dispatch => {
    const res = await fetch('/api/posts');
    res.data = await res.json();
    if(res.ok) {
      dispatch(setPosts(res.data.posts));
    }
    return res;
  }
}

export default function postsReducer(state={}, action) {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;
    default:
      return state;
  }
}