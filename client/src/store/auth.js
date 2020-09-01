import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';
const REMOVE_USER = 'auth/REMOVE_USER';

export const setUser = user => {
  return {
    type: SET_USER,
    user
  }
}

export const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};

export const login = (username, password) => {
  return async dispatch => {
    const res = await fetch('/api/session', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
      },
      body: JSON.stringify({ username, password })
    });
    res.data = await res.json();
    if (res.ok) {
      dispatch(setUser(res.data.user));
    }
    return res;
  };
};

export const logout = () => {
  return async (dispatch) => {
    const res = await fetch('/api/session', {
      method: "delete"
    });
    dispatch(removeUser());
    res.data = await res.json();
    return res;
  };
};

export default function authReducer(state={}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
}