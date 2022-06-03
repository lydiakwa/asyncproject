import axios from 'axios';

const CREATE_USER = 'CREATE_USER';

export const createUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

export const postUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/users', user);
      dispatch(createUser(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return user;
    default:
      return state;
  }
}
