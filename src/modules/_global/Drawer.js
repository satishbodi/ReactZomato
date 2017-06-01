import React, { Component, PropTypes } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles/Drawer';

class Drawer extends Component {
	constructor(props) {
		super(props);

		this._goToHome = this._goToHome.bind(this);
		this._goToRestaurants = this._goToRestaurants.bind(this);
	}

	_goToHome() {
		this._toggleDrawer();
		this.props.navigator.popToRoot({
			screen: 'zomato.Home',
			title: 'Zomato'
		});
	}

	_goToRestaurants() {
		this._toggleDrawer();
		this.props.navigator.showModal({
			screen: 'zomato.Restaurants',
			title: 'Restaurants'
		});
	}

	_toggleDrawer() {
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: true
		});
	}

	render() {
		const iconSearch = (<Icon name="md-search" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 2 }]} />);
		const iconMovies = (<Icon name="md-film" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 3 }]} />);
		const iconTV = (<Icon name="ios-desktop" size={26} color="#9F9F9F" style={styles.drawerListIcon} />);
		return (
			<LinearGradient colors={['rgba(0, 0, 0, 0.7)', 'rgba(0,0,0, 0.9)', 'rgba(0,0,0, 1)']} style={styles.linearGradient}>
				<View style={styles.container}>
					<View style={styles.drawerList}>
						<TouchableOpacity onPress={this._goToHome}>
							<View style={styles.drawerListItem}>
								{iconSearch}
								<Text style={styles.drawerListItemText}>
									Home
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={this._goToRestaurants}>
							<View style={styles.drawerListItem}>
								{iconMovies}
								<Text style={styles.drawerListItemText}>
									Restaurants
								</Text>
							</View>
						</TouchableOpacity>
						<View style={styles.drawerListItem}>
							{iconTV}
							<Text style={styles.drawerListItemText} onPress={() => ToastAndroid.show('Coming Soon!', ToastAndroid.SHORT)}>
								Nearby
							</Text>
						</View>
					</View>
				</View>
			</LinearGradient>
		);
	}
}

Drawer.propTypes = {
	navigator: PropTypes.object
};

export default Drawer;
