import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function (state = initialState.zomato, action) {
	switch (action.type) {
		case types.RETRIEVE_CATEGORIES_SUCCESS:
			return {
				...state,
				zomatoCategories: action.zomatoCategories
			};
			case types.RETRIEVE_CUISINES_SUCCESS:
				return {
					...state,
					zomatoCuisines: action.zomatoCuisines
				};

		default:
			return state;
	}
}
