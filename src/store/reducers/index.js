import { combineReducers } from 'redux';
import session from './session.reducer';
import category from './category.reducer';

const reducers = combineReducers({ session, category });

export default reducers;
