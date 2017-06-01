import React, { PropTypes } from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import styles from './styles/CardTwo';

const CardTwo = ({ info, viewCategory }) => (
	<TouchableOpacity activeOpacity={0.5} onPress={viewCategory.bind(this, info.id)}>
		<View style={styles.cardContainer}>
			<View style={styles.cardTitleContainer}>
				<Text style={styles.cardTitle} numberOfLines={2}>
					{info.name}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
);

CardTwo.propTypes = {
	info: PropTypes.object.isRequired,
	viewCategory: PropTypes.func.isRequired
};

export default CardTwo;
