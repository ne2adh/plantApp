import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Alert,
	StyleSheet,
	Keyboard,
	Platform,
	ScrollView,
	ActivityIndicator,
	KeyboardAvoidingView
} from 'react-native';

import { Button, Block, Text, Input } from "../components";
import { theme } from '../constants';

import { connect } from 'react-redux';
import { logIn } from '../redux/actions/loginActions';

class LoginScreen extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: 'eve.holt@reqres.in',
			password: 'cityslicka',
			isloading: false,
			errors: [],
		}
	}
	
	handleLogin() {
		const errors = [];
		Keyboard.dismiss();
		this.setState({ isloading: true });
		this.props.logIn(this.state).then(($result) => {
			this.setState({ errors, isloading: false });
			console.log('iniciaste session correctamente');
		}).catch((err) => {
			errors.push('email');
			errors.push('password');
			this.setState({ errors, isloading: false });
			Alert.alert('Error', err.message);
		})
	}

	render() {
		const { email, password, isloading, errors, showTheThing } = this.state;
		const { navigation } = this.props;
		const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
		return (
			<KeyboardAvoidingView
				style={styles.login}
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				enabled
				keyboardVerticalOffset={80}
			>
				<ScrollView style={{ flex: 1 }}>
					<Block padding={[0, theme.sizes.base * 2.8]}>
						<Text h1 bold>Login</Text>
						<Block middle>
							<Input
								label="Email"
								email
								error={hasErrors("email")}
								style={[styles.input, hasErrors("email")]}
								defaultValue={email}
								onChangeText={text => this.setState({ email: text })}
							/>
							<Input
								secure
								label="Password"
								error={hasErrors("password")}
								style={[styles.input, hasErrors("password")]}
								defaultValue={password}
								onChangeText={text => this.setState({ password: text })}
							/>
							<Button gradient onPress={() => this.handleLogin()}>
								{isloading ? (
									<ActivityIndicator size="small" color="white" />
								) : (
										<Text bold white center>
											Login
										</Text>
									)}
							</Button>

							<Button onPress={() => navigation.navigate("ForgotScreen")}>
								<Text
									gray
									caption
									center
									style={{ textDecorationLine: "underline" }}
								>
									Forgot your password?
								</Text>
							</Button>
						</Block>
					</Block>
                </ScrollView>
			</KeyboardAvoidingView>
		)
	}
}

LoginScreen.propTypes = {
	logIn: PropTypes.func.isRequired,

};
/* function MapStateToProps(state){
    return {
        user : state.session && state.session.user ? state.session.user : false
    }
} */

export default connect(null, { logIn })(LoginScreen);


const styles = StyleSheet.create({
	login: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',		
	},
	input: {
		borderRadius: 0,
		borderWidth: 0,
		borderBottomColor: theme.colors.gray2,
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	hasErrors: {
		borderBottomColor: theme.colors.accent
	},
});
