import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
} from 'react-native';
import { Block } from "../components";
import AsyncStorage from "@react-native-community/async-storage";

const { width, height } = Dimensions.get("window");

export default class SplashScreen extends Component {  
    constructor(props) {
        super(props);
        this.state = {
        };
        AsyncStorage.removeItem('token')
      }  
    render(){
        return(
            <Block center middle color='white'>
               <StatusBar translucent backgroundColor='white' />
               <Image source={require("../assets/splash.png")} style={{width, height }} resizeMode="contain"/>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
	
});