import React from "react";

import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import InstructionListScreen from "../screens/InstructionListScreen";
import InstructionDetailScreen from "../screens/InstuctionDetailScreen";
import SignInScreen from "../screens/SignInScreen";

import Colors from "../constants/Colors";

const MainStackNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: "Home",
        headerTitleStyle: { alignSelf: "center" },
      },
    },
    InstructionList: InstructionListScreen,
    InstructionDetail: InstructionDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTitleAlign: "center",
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

// create another stack navigator so the screen has a header
const SignInNavigator = createStackNavigator(
  {
    SignIn: SignInScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTitleAlign: "center",
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

const MainNavigator = createDrawerNavigator({
  Home: MainStackNavigator,
  SignIn: SignInNavigator,
});

export default createAppContainer(MainNavigator);
