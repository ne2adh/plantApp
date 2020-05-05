import React from 'react';
import { Image } from "react-native";
import {
    createStackNavigator
} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';
import { theme }  from '../constants';
import { Button } from "../components";

import ProductScreen from '../screens/ProductScreen';
import ExploreScreen from '../screens/ExploreScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BrowseScreen from '../screens/BrowseScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotScreen from '../screens/ForgotScreen';
import LoginScreen from '../screens/LoginScreen';
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
                    <>
                        <Stack.Screen name="BrowseScreen" component={BrowseScreen} options={{ title: null }} />
                        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: null }} />
                        <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{ title: null }} />
                        <Stack.Screen name="ProductScreen" component={ProductScreen} options={{
                            title: null,
                            headerRight: () => (
                                <Button onPress={() => {}}>
                                <Icon name="dots-three-horizontal" color={theme.colors.gray} />
                              </Button>
                            ),
                            }} 
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: null }} />
                        <Stack.Screen name="ForgotScreen" component={ForgotScreen} options={{ title: null }} />
                        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: null }} />
                    </>
                )
            }
        </Stack.Navigator>
    );
}


export default createRootNavigation = (isLoggedIn) => AppStack(isLoggedIn);