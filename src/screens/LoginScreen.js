import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    StyleSheet,
    Keyboard,
    Platform,
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
            showTheThing:true  //ingenuity title Login
        }
    }
    componentDidMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
      }
    componentWillUnmount(){
        this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
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

	_keyboardDidShow = () => {
		this.setState({ showTheThing: false }); //ingenuity title Login
	}

	_keyboardDidHide = () => {
		this.setState({ showTheThing: true }); //ingenuity title Login
	}


    render() {
        const { email, password, isloading, errors, showTheThing } = this.state;
        const { navigation } = this.props;
        const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
        const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 10
        return (
            <KeyboardAvoidingView 
                style={styles.login} 
                behavior={Platform.OS === 'ios' ? "padding" : null}
                enabled 
                keyboardVerticalOffset={keyboardVerticalOffset}
            >
            <Block padding={[0, theme.sizes.base * 2.8]}>
               <Text h1 bold color={showTheThing?'black':'white'} >Login</Text>
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
    },    
  });
  