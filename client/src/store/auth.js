import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';

const setUser = user => {
  return {
    type: SET_USER,
    user
  }
}

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
    if (res.ok) {
      const data = await res.json();
      dispatch(setUser(data));
    }
  }
}