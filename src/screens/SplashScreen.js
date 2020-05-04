import React, { Component } from 'react';
import {
    View, 
    StatusBar,
} from 'react-native';
import {theme} from '../constants';

export default class SplashScreen extends Component {    
    render(){
        return(
            <View style={theme.container}>
               <StatusBar translucent backgroundColor='rgba(0,0,0,0.3)' />
               <Image 
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={{width: 140, height: 140}}
                    source={require("../assets/splash.png")}
               />
            </View>
        )
    }
}