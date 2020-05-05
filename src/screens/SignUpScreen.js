import React, { Component } from "react";
import {
    Alert,
    ActivityIndicator,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'gianmet@hotmail.com',
            username: 'giancarlo  delgadillo',
            password: '123456',
            errors: [],
            loading: false
        };
        
    }  

    handleSignUp() {
        const { navigation } = this.props;
        const { email, username, password } = this.state;
        const errors = [];

        Keyboard.dismiss();
        this.setState({ loading: true });

        // check with backend API or with some static data
        if (!email) errors.push("email");
        if (!username) errors.push("username");
        if (!password) errors.push("password");

        this.setState({ errors, loading: false });

        if (!errors.length) {
            Alert.alert(
                "Success!",
                "Your account has been created",
                [
                    {
                        text: "Continue",
                        onPress: () => {
                            navigation.navigate("BrowseScreen");
                        }
                    }
                ],
                { cancelable: false }
            );
        }
    }

    render() {
        const { navigation } = this.props;
        const { loading, errors, email, username, password } = this.state;
        const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);        
        return (

            <KeyboardAvoidingView
                style={styles.signup}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                enabled
                keyboardVerticalOffset={80}
            >
                <ScrollView style={{ flex: 1 }}>
                    <Block padding={[0, theme.sizes.base * 2.8]}>
                        <Text h1 bold>Signup</Text>
                        <Block middle>
                            <Input
                                email
                                label="Email"
                                error={hasErrors("email")}
                                style={[styles.input, hasErrors("email")]}
                                defaultValue={email}
                                onChangeText={text => this.setState({ email: text })}
                            />
                            <Input
                                label="Username"
                                error={hasErrors("username")}
                                style={[styles.input, hasErrors("username")]}
                                defaultValue={username}
                                onChangeText={text => this.setState({ username: text })}
                            />
                            <Input
                                secure
                                label="Password"
                                error={hasErrors("password")}
                                style={[styles.input, hasErrors("password")]}
                                defaultValue={password}
                                onChangeText={text => this.setState({ password: text })}
                            />
                            <Button gradient onPress={() => this.handleSignUp()}>
                                {loading ? (
                                    <ActivityIndicator size="small" color="white" />
                                ) : (
                                        <Text bold white center>
                                            Sign Up
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
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    signup: {
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center',        
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