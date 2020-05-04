import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    StatusBar,
} from 'react-native';
import { Block } from "../components";

export default class SplashScreen extends Component {  
    constructor(props) {
        super(props);
        this.state = {
        };
      }  
    render(){
        return(
            <Block center middle>
               <StatusBar translucent backgroundColor='rgba(0,0,0,0.3)' />
               <Image source={require("../assets/splash.png")} style={{height: 300, width: 300}} resizeMode="cover"/>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
	
});