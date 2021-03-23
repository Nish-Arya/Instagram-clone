import Cookies from "js-cookie";

const POST_COMMENT = "posts/POST_COMMENT";

export const postComment = (comment) => {
  return {
    type: POST_COMMENT,
    comment
  };
};

export const sendComment = (postId, userId, username, body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/comments`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify({ postId, userId, body, username }),
    });
    res.data = await res.json();
    if (res.ok) {
      console.log(res.data.comment);
      dispatch(postComment(res.data.comment));
    }
    return res;
  };
};

export default function commentsReducer(state = {}, action) {
  switch (action.type) {
    case POST_COMMENT:
      return { ...state, [action.comment.id]: action.comment };
    default:
      return state;
  }
}