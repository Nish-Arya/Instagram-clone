import Cookies from 'js-cookie';

const SET_POSTS = 'posts/SET_POSTS';
const POST_COMMENT = 'posts/POST_COMMENT';

export const setPosts = posts => {
  return {
    type: SET_POSTS,
    posts
  }
}

export const postComment = posts => {
  return {
    type: POST_COMMENT,
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

export const sendComment = (postId, userId, username, body) => {
  return async dispatch => {
    const res = await fetch(`/api/posts/${postId}/comments`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
      },
      body: JSON.stringify({ postId, userId, username, body })
    });
    res.data = await res.json();
    if (res.ok) {
      dispatch(postComment());
    }
    return res;
  }
}

export default function postsReducer(state={}, action) {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;
    case POST_COMMENT:
      return state;
    default:
      return state;
  }
}