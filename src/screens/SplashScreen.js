import React, { Component } from 'react';
import {
    View, 
    Image,
    StyleSheet,
    StatusBar,
} from 'react-native';
import {theme} from '../constants';

export default class SplashScreen extends Component {  
    constructor(props) {
        super(props);
        this.state = {
        };
      }  
    render(){
        return(
            <View style={styles.container}>
               <StatusBar translucent backgroundColor='rgba(0,0,0,0.3)' />
               <Image source={require("../assets/splash.png")} style={styles.image} resizeMode="cover"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image:{
		height: 300,
		width: 300,
	}
});