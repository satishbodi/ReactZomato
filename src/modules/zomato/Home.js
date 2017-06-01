import React, { PropTypes, Component } from 'react';
import {
	RefreshControl,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
	Platform
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as zomatoActions from './actions';
import styles from './styles/Home';
import CardTwo from './components/CardTwo';
import ProgressBar from '../_global/ProgressBar';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			isRefreshing: false
		};
		this._viewCategory = this._viewCategory.bind(this);
  }

	componentWillMount() {
		this._retrieveCategories();
		this._retrieveCuisines();
	}

	componentWillReceiveProps(nextProps) {
		//console.log('satish - componentWillReceiveProps', nextProps);
		//if (nextProps.zomatoCategories) {
			this.setState({ isLoading: false });
		//}
	}

	_retrieveCategories() {
		this.props.actions.retrieveCategories();
	}

	_retrieveCuisines() {
		this.props.actions.retrieveCuisines();
	}

	_viewCategory(categoryId) {
		console.log('satish: category clicked', categoryId);
	}

	render() {
		const { zomatoCategories, zomatoCuisines } = this.props;
		console.log('satish render - zomatoCategories', zomatoCategories);
		console.log('satish render - zomatoCuisines', zomatoCuisines);
		return (
			this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
			<View>
			  <Text >Categories</Text>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{zomatoCategories.categories.map(info => (
						<CardTwo key={info.categories.id} info={info.categories} viewCategory={this._viewCategory} />
					))}
				</ScrollView>
      </View>
		);
	}
}

HomePropTypes = {
	zomatoCategories: PropTypes.object,
	zomatoCuisines: PropTypes.object,
	navigator: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	//console.log('satish - mapStateToProps', state.zomato.zomatoCategories);
	return {
		zomatoCategories: state.zomato.zomatoCategories,
		zomatoCuisines: state.zomato.zomatoCuisines
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(zomatoActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
