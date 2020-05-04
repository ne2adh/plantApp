import React, { Component } from 'react';
import {
	Animated,
	Dimensions,
	Image,
	FlatList,
	Modal,
	StyleSheet,
	ScrollView
  } from "react-native";
import { Button, Block, Text } from "../components";
import {theme} from '../constants';
const { width, height } = Dimensions.get("window");

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderIllustrations(){
    return (
        <Block >
            <Text>Image</Text>
        </Block>
    )
  }
  renderSteps(){
    return (
        <Block >
            <Text>* * *</Text>
        </Block>
    )
  }
  render() {
    return (
      <Block>
            <Block>
                <Text>
                    Your Home.
                    <Text>Greener.</Text>
                </Text>
                <Text>Empty the experience</Text>
            </Block>
            <Block>
                {this.renderIllustrations()}
                {this.renderSteps()}
            </Block>
            <Block>
                <Button onPress={()=>{}}>
                    <Text>Login</Text>
                </Button>
                <Button onPress={()=>{}}>
                    <Text>Signup</Text>
                </Button>
                <Button onPress={()=>{}}>
                    <Text>Terms of Service</Text>
                </Button>
            </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
    
});