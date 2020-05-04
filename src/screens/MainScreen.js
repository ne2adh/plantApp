import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import {
    View,
    Text,
} from 'react-native';
import { theme } from '../constants';
import { connect } from 'react-redux';

class MainScreen extends Component {
 
      render() {        
        return (
			<View style={theme.container}>
				<Text>

                APP
                </Text>
			</View>
		);
      }
}
/* 
MainScreen.propTypes ={
    
};

const mapStateToProps = (state) => ({
	
}); */
/* const mapStateToProps = (state) => {
    return {
        randomPeople: state.peopleState
    };
} */

export default connect(null, null)(MainScreen);