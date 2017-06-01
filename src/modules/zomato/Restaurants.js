import React, { PropTypes, Component } from 'react';
import {
	RefreshControl,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
	Platform
} from 'react-native';


export default class Restaurants extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			isRefreshing: false
		};
	}

	render() {
		return (
			<View>
			<Text>Restaurants</Text>
		</View>
		);
	}
}

Restaurants.propTypes = {
	zomatoCategories: PropTypes.object,
	navigator: PropTypes.object
};
