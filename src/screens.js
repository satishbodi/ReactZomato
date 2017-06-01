/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Drawer from './modules/_global/Drawer';
import Restaurants from './modules/zomato/Restaurants';
//import RestaurantsList from './modules/zomato/RestaurantsList';
//import Restaurant from './modules/zomato/Restaurant';
import Home from './modules/zomato/Home';

export function registerScreens(store, Provider) {
	//Navigation.registerComponent('zomato.Restaurant', () => Restaurant, store, Provider);
	Navigation.registerComponent('zomato.Restaurants', () => Restaurants, store, Provider);
	//Navigation.registerComponent('zomato.RestaurantsList', () => RestaurantsList, store, Provider);
	Navigation.registerComponent('zomato.Home', () => Home, store, Provider);
	Navigation.registerComponent('zomato.Drawer', () => Drawer);
}
