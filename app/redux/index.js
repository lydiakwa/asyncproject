import { combineReducers } from 'redux';
import user from './user';
import maps from './maps';

const appReducer = combineReducers({
  user: user,
  maps: maps,
});

export default appReducer;
