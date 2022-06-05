import axios from 'axios';

const SET_USER = 'SET_USER';
const CLEAR_USER = 'CLEAR_USER';

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};

export const postUser = (user, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/users', user);
      dispatch(setUser(data));
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUser = (formData, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/auth', formData);
      dispatch(setUser(data));
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
};

export const checkUser = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/auth', {
        headers: { Authorization: token },
      });
      dispatch(setUser(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = null;

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
}
