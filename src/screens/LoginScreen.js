import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';


import { connect } from 'react-redux';
import { logIn } from '../redux/actions/loginActions';

class LoginScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            hidePassword: true,
            loader: false
        }
        this._login = this._login.bind(this);// you should bind this to the method that call the props        
    }


    setHidePassword = arg => {
        this.setState({ hidePassword: arg })
    }

    handleEmailChange = email => {
        this.setState({ email })
    }

    handlePasswordChange = password => {
        this.setState({ password })
    }

    _login() {
        this.setState({ loader: true });
        this.props.logIn(this.state).then(($result) => {
            this.setState({ loader: false });
            console.log('iniciaste session correctamente');
        }).catch((err) => {
            this.setState({ loader: false });
            Alert.alert('Error', err.message);
        })
    }

    render() {
        const { hidePassword, email, password } = this.state;

        return (
            <KeyboardAvoidingView behavior="padding">
                <View>
                    <TextInput
                        name='email'
                        value={email}
                        placeholder='E-mail'
                        autoCapitalize='none'
                        onChangeText={this.handleEmailChange}
                        iconNameLeft='user'
                        keyboardType='email-address'
                    />
                    <TextInput
                        name='password'
                        value={password}
                        placeholder='Contrasena'
                        autoCapitalize='none'
                        onChangeText={this.handlePasswordChange}
                        keyboardType={null}
                        secureTextEntry={hidePassword}
                        onPress={() => this.setHidePassword(!hidePassword)}
                    />
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text onPress={() => this._login()}>Login</Text>
                    </TouchableOpacity>
                </View>
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