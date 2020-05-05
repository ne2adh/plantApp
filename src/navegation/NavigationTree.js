import React from 'react';
import { Image } from "react-native";
import {
    createStackNavigator
} from '@react-navigation/stack';
import { theme }  from '../constants';
import ForgotScreen from '../screens/ForgotScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();
const screenOptions = {
    headerStyle: {
        height: theme.sizes.base * 3,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
    },
    headerBackImage: ()=>(<Image source={require("../assets/icons/back.png")}/>),
    headerBackTitle: false,
    headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
    },
    headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
    }
}



const AppStack = (isLoggedIn) => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            {
                isLoggedIn ?
                (
                    <Stack.Screen name="MainScreen" component={MainScreen} />
                ) : (
                    <>
                        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: null }} />
                        <Stack.Screen name="ForgotScreen" component={ForgotScreen} options={{ title: null }} />
                    </>
                )
            }
        </Stack.Navigator>
    );
}


export default createRootNavigation = (isLoggedIn) => AppStack(isLoggedIn);