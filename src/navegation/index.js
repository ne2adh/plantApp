import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { checkLogin } from '../redux/actions/loginActions';
import { connect } from 'react-redux';

import createRootNavigation from './NavigationTree';
import SplashScreen from '../screens/SplashScreen';

class AppNavegation extends Component {

	constructor(props) {
		super(props);
		this.state = { isLoading: true }
		props.checkLogin();
	}

	performTimeConsumingTask = async () => {
		return new Promise((resolve) =>
			setTimeout(
				() => { resolve('result') },
				2000
			)
		);
	}

	async componentDidMount() {
		const data = await this.performTimeConsumingTask();
		if (data !== null) {
			this.setState({ isLoading: false });
		}
	}
	
	render() {
		if (this.state.isLoading) {
			return <SplashScreen />;
		}		
		// get Authentication Check and Authentication state from AppReducer.js
        const { already_logged, auth_checked } = this.props.appState;
		console.log(already_logged + '  '+ auth_checked);
        //Get base Component for render
        const BaseView = auth_checked ? createRootNavigation(already_logged) : renderLoader();
        return BaseView

	}
}



const renderLoader = () => <ActivityIndicator size="large" style={{flex: 1, alignItems:'center',justifyContent:'center'}} />

const mapStateToProps = (state) => ({
	appState: state.appState
});

AppNavegation.propTypes ={
    checkLogin: PropTypes.func.isRequired
};


export default connect(mapStateToProps,{ checkLogin })(AppNavegation);