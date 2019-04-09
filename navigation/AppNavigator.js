import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import EnterNameScreen from "../screens/EnterNameScreen";

const EnterNameStack = createStackNavigator({
  EnterName: EnterNameScreen
});

export default createAppContainer(
  createSwitchNavigator({
    EnterName: EnterNameStack,
    Main: MainTabNavigator
  })
);
