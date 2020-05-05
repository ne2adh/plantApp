import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    StyleSheet,
    Keyboard,
    View,
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
            loading: false,
            errors: [],
            showTheThing:true
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
        this.setState({ loading: true });
        this.props.logIn(this.state).then(($result) => {
            this.setState({ errors, loading: false });
            console.log('iniciaste session correctamente');
        }).catch((err) => {
            errors.push('email');
            errors.push('password');
            this.setState({ errors, loading: false });
            Alert.alert('Error', err.message);
        })
    }

    _keyboardDidShow = () => {
        this.setState({showTheThing:false});
      }
    
      _keyboardDidHide = () => {
        this.setState({showTheThing:true});
      }
    

    render() {
        const { email, password, loading, errors } = this.state;
        const { navigation } = this.props;
        const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
        const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0
        return (
            <KeyboardAvoidingView 
                style={styles.login} 
                behavior={Platform.OS === 'ios' ? "padding" : null}
                enabled 
                keyboardVerticalOffset={keyboardVerticalOffset}
            >
            <Block padding={[0, theme.sizes.base * 2.8]}>
            { 
               this.state.showTheThing && 
               <Text h1 bold>Login</Text>
            }
                

            <Block middle>
                <Input
                  label="Email"
                  error={hasErrors("email")}
                  style={[styles.input, hasErrors("email")]}
                  defaultValue={this.state.email}
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
                <Button gradient onPress={() => this.handleLogin()}>
                  {loading ? (
                    <ActivityIndicator size="small" color="white" />
                  ) : (
                    <Text bold white center>
                      Login
                    </Text>
                  )}
                </Button>
    
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
    },    
  });
  