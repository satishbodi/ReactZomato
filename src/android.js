import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';

const store = configureStore(initialState);
registerScreens(store, Provider);

const navigatorStyle = {
	statusBarColor: 'red',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'red',
	navBarBackgroundColor: 'red',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: true,
	navBarHideOnScroll: true,
	tabBarHidden: true,
	drawUnderTabBar: true
};

	Navigation.startSingleScreenApp({
		screen: {
			screen: 'zomato.Home',
			title: 'Zomato',
			navigatorStyle,
			leftButtons: [
				{
					id: 'sideMenu'
				}
			]
		},
		drawer: {
			left: {
				screen: 'zomato.Drawer'
			}
		}
	});
