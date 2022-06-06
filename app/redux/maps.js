import axios from 'axios';

const SET_MAPS = 'SET_MAPS';

export const setMaps = (maps) => {
  return {
    type: SET_MAPS,
    maps,
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

const initialState = [];

export default function mapsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MAPS:
      return action.maps;
    default:
      return state;
  }
}
