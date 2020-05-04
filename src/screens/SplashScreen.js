import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
} from 'react-native';
import { Block } from "../components";
const { width, height } = Dimensions.get("window");

export default class SplashScreen extends Component {  
    constructor(props) {
        super(props);
        this.state = {
        };
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