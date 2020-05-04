import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    StyleSheet,
    TextInput,
    TouchableOpacity,
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
            email: '',
            password: '',
            hidePassword: true,
            loader: false,
            errors: [],
        }
        this._login = this._login.bind(this);// you should bind this to the method that call the props        
    }


    setHidePassword = arg => {
        this.setState({ hidePassword: arg })
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
        const { hidePassword, email, password, loading, errors } = this.state;
        const { navigation } = this.props;
        const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

        return (
            <KeyboardAvoidingView style={styles.login} behavior="padding">
                <Block padding={[0, theme.sizes.base * 2]}>
                    <Text h1 bold>Login</Text>
                    <Block middle>
                        <Input
                            label="Email"
                            error={hasErrors("email")}
                            style={[styles.input, hasErrors("email")]}
                            defaultValue={email}
                            autoCapitalize='none'
                            keyboardType='email-address'
                            onChangeText={text => this.setState({ email: text })}
                        />
                        <Input
                            secure
                            label="Password"
                            error={hasErrors("password")}
                            style={[styles.input, hasErrors("password")]}
                            defaultValue={this.state.password}
                            onChangeText={text => this.setState({ password: text })}
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
                        <Button onPress={() => navigation.navigate("Forgot")}>
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
      backgroundColor: 'white'
    },
    input: {
      borderRadius: 0,
      borderWidth: 0,
      borderBottomColor: theme.colors.gray2,
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    hasErrors: {
      borderBottomColor: theme.colors.accent
    }
  });
  