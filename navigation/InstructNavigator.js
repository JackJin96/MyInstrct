import React from "react";

import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import InstructionListScreen from "../screens/InstructionListScreen";
import InstructionDetailScreen from "../screens/InstuctionDetailScreen";
import AddCategoryScreen from "../screens/AddCategoryScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import SignInScreen from "../screens/SignInScreen";

import Colors from "../constants/Colors";

const MainStackNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: "MyInstruct",
      },
    },
    InstructionList: InstructionListScreen,
    InstructionDetail: InstructionDetailScreen,
    AddCategory: {
      screen: AddCategoryScreen,
      navigationOptions: {
        title: "Add Category",
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTitleStyle: {
        alignSelf: "center",
        fontFamily: "open-sans-bold",
        fontSize: 18,
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
      title: "Sync With Cloud",
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTitleStyle: {
        alignSelf: "center",
        fontFamily: "open-sans-bold",
        fontSize: 18,
      },
      headerTitleAlign: "center",
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

const tabScreenConfig = {
  Instructions: {
    screen: MainStackNavigator,
    navigationOptions: {
      tabBarLabel: "Instructions",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-paper" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavoriteScreen,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const FavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primaryColor,
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    Home: FavTabNavigator,
    SignIn: {
      screen: SignInNavigator,
      navigationOptions: {
        drawerLabel: "Sync With Cloud",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.primaryColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
      },
    },
  }
);

export default createAppContainer(MainNavigator);
