import React, { Component } from 'react';
import { View,   StyleSheet, Text  } from 'react-native';
import {theme} from '../constants';
import Button from '../components/Button';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderIllustrations(){
    return (
        <View style={styles.illustration}>
            <Text>Image</Text>
        </View>
    )
  }
  renderSteps(){
    return (
        <View style={styles.steps}>
            <Text>* * *</Text>
        </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Your Home.
                    <Text style={styles.subtitle}>Greener.</Text>
                </Text>
                <Text style={styles.paragraph}>Empty the experience</Text>
            </View>
            <View>
                {this.renderIllustrations()}
                {this.renderSteps()}
            </View>
            <View style={styles.buttons}>
                <Button style={styles.gradient} onPress={()=>{}}>
                    <Text>Login</Text>
                </Button>
                <Button style={styles.shadow} onPress={()=>{}}>
                    <Text>Signup</Text>
                </Button>
                <Button onPress={()=>{}}>
                    <Text>Terms of Service</Text>
                </Button>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container :{
        flex: 1,      
    },
    header:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: theme.sizes.h1,
        alignItems: 'center',
        fontWeight:'bold',        
        color: theme.colors.black        
    },
    subtitle: {
        color: theme.colors.primary
    },
    paragraph:{
        fontSize: theme.sizes.h3,
        color: theme.colors.gray2,
        marginTop: theme.sizes.padding / 2
    },
    buttons:{
        flex: 0.5,
        marginTop: 0,
        marginRight: theme.sizes.padding * 2,
        justifyContent: 'center',
    },
    illustration:{
        
    },
    step: {
               
    },
    gradient:{

    },
    shadow:{
        
    }
});