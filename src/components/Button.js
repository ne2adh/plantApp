import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../constants";

class Button extends Component {
  render() {
    const {
        children,
        ...props
      } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, styles.shadow]}
        activeOpacity={0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.sizes.radius,
    height: theme.sizes.base * 3,
    justifyContent: "center",
    marginVertical: theme.sizes.padding / 3
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },  
});
