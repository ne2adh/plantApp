import React, { Component } from 'react';
import {
    Alert,
    ActivityIndicator,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet
  } from "react-native";

import { Button, Block, Input, Text } from '../components';
import { theme } from '../constants';

export default class ForgotScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:'',
        errors: [],
        loading: false
    };
  }

  handleForgot() {
    const { navigation } = this.props;
    const { email } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!email.length) {
      errors.push("email");
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        "Password sent!",
        "Please check you email.",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("LoginScreen");
            }
          }
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Error",
        "Please check you Email address.",
        [{ text: "Try again" }],
        { cancelable: false }
      );
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors, email } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 10
    return (
        <KeyboardAvoidingView
            style={styles.forgot}
            behavior={Platform.OS === 'ios' ? "padding" : null}
            enabled 
            keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <Block padding={[0, theme.sizes.base * 2.8]}>
            <Text h1 bold>
              Forgot
            </Text>
            <Block middle>
              <Input
                label="Email"
                email
                error={hasErrors("email")}
                style={[styles.input, hasErrors("email")]}
                defaultValue={email}
                onChangeText={text => this.setState({ email: text })}
              />
              <Button gradient onPress={() => this.handleForgot()}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text bold white center>
                    Forgot
                  </Text>
                )}
              </Button>
  
              <Button onPress={() => navigation.navigate("LoginScreen")}>
                <Text
                  gray
                  caption
                  center
                  style={{ textDecorationLine: "underline" }}
                >
                  Back to Login
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      );
  }
}

const styles = StyleSheet.create({
    forgot: {
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