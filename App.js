import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  createBottomTabNavigator,
  createTabNavigator,
} from "react-navigation-tabs";
import FB from "./screens/FB";
import IG from "./screens/IG";
import { createAppContainer } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

var tabNav = createBottomTabNavigator({
  FB: {
    screen: FB,
  },
  IG: {
    screen: IG,
  
  },
});
var AppContainer = createAppContainer(tabNav);
const styles = StyleSheet.create({});
