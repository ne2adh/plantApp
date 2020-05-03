import React from 'react';
import { Image } from "react-native";
import {
    createStackNavigator
} from '@react-navigation/stack';
import { theme } from '../constants';
import LoginScreen from '../screens/LoginScreen';


const Stack = createStackNavigator();
const screenOptions = {
    headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
    },
    headerBackImage: <Image source={require("../assets/icons/back.png")} />,
    headerBackTitle: null,
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
            {isLoggedIn ?
                (
                    <Stack.Screen name="MainScreen" component={MainScreen} />
                ) : (
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                )}
        </Stack.Navigator>
    );
}


export default createRootNavigation = (isLoggedIn) => AppStack(isLoggedIn);