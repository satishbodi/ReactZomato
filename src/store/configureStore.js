/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
const logger = require('redux-logger');
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

//let middleware = [thunk];

// if (__DEV__) {
// 	//const reduxImmutableStateInvariant = require('redux-immutable-state-invariant')();
// 	const logger = createLogger({ collapsed: false });
// 	middleware = [...middleware, reduxImmutableStateInvariant, logger];
// } else {
// 	middleware = [...middleware];
// }

const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default(), thunk, logger()] :
  [thunk];

export default function configureStore(initialState) {
	return  createStore(
		rootReducer,
		initialState,
    applyMiddleware(...middleware)
	);
}
