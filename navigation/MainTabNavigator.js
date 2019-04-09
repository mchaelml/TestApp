import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import ReturnScreen from "../screens/ReturnScreen";
import PlusMinusScreen from "../screens/PlusMinusScreen";
import NameScreen from "../screens/NameScreen";

const ReturnStack = createStackNavigator({
  Return: ReturnScreen
});

ReturnStack.navigationOptions = {
  tabBarLabel: "1",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const PlusMinusStack = createStackNavigator({
  PlusMinus: PlusMinusScreen
});

PlusMinusStack.navigationOptions = {
  tabBarLabel: "3",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const NameStack = createStackNavigator({
  Name: NameScreen
});

NameStack.navigationOptions = {
  tabBarLabel: "2",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

const IsTabBarShown = navigation => {
  const { routes } = navigation.state;

  let displayTab = true;
  routes.forEach(route => {
    if (route.routeName === "EnterName") {
      showTabbar = false;
    }
  });

  return displayTab;
};

export default createBottomTabNavigator(
  {
    ReturnStack,
    NameStack,
    PlusMinusStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: IsTabBarShown(navigation)
    }),
    initialRouteName: "NameStack"
  }
);
