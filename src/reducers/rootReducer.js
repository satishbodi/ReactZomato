import { combineReducers } from 'redux';
import zomatoReducer from '../modules/zomato/reducer';

const rootReducer = combineReducers({
	zomato: zomatoReducer
});

export default rootReducer;
