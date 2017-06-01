import axios from 'axios';
import * as types from '../../constants/actionTypes';
import { ZOMATO_URL, ZOMATO_API_KEY } from '../../constants/api';

// Cuisines
export function retrieveCuisinesSuccess(res) {
	return {
		type: types.RETRIEVE_CUISINES_SUCCESS,
		zomatoCuisines: res.data
	};
}

export function retrieveCuisines() {
	return function (dispatch) {
	  return axios({
	  	method: 'get',
	  	url: '/cuisines',
    	baseURL: ZOMATO_URL,
    	timeout: 5000,
    	headers: {'user-key': ZOMATO_API_KEY, 'Accept':'application/json'},
			params: { city_id: 4 }
  	}).then(res => {
			dispatch(retrieveCuisinesSuccess(res));
		}).catch(error => {
			console.log(error);
		});
	};
}

// Categories
export function retrieveCategoriesSuccess(res) {
	return {
		type: types.RETRIEVE_CATEGORIES_SUCCESS,
		zomatoCategories: res.data
	};
}

export function retrieveCategories() {
	return function (dispatch) {
	  return axios({
	  	method: 'get',
	  	url: '/categories',
    	baseURL: ZOMATO_URL,
    	timeout: 5000,
    	headers: {'user-key': ZOMATO_API_KEY, 'Accept':'application/json'}
  	}).then(res => {
			dispatch(retrieveCategoriesSuccess(res));
		}).catch(error => {
			console.log(error);
		});
	};
}
