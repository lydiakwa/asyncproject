import axios from 'axios';

const SET_MAPS = 'SET_MAPS';
const CREATE_MAP = 'CREATE_MAP';

export const setMaps = (maps) => {
  return {
    type: SET_MAPS,
    maps,
  };
};

export const createMap = (map) => {
  return {
    type: CREATE_MAP,
    map,
  };
};

export const getMaps = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/maps', {
        headers: { Authorization: token },
      });
      dispatch(setMaps(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const postMap = (formData, token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/maps', formData, {
        headers: { Authorization: token },
      });
      dispatch(createMap(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = [];

export default function mapsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MAPS:
      return action.maps;
    case CREATE_MAP:
      return [...state, action.map];
    default:
      return state;
  }
}
