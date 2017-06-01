import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	cardContainer: {
		height: 50,
		width: 135,
		backgroundColor: 'red',
		flexDirection: 'column',
		marginLeft: 10,
		marginTop: 10,
		borderRadius: 3
	},
	cardImage: {
		width: 135,
		height: 184,
		borderTopLeftRadius: 3,
		borderTopRightRadius: 3
	},
	cardTitleContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	cardTitle: {
		color: 'white',
		fontSize: 13,
		fontWeight: '500',
		textAlign: 'center',
		paddingHorizontal: 1
	}
});

export default styles;
