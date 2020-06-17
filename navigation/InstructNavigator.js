import React from "react";

import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CategoriesScreen from "../screens/CategoriesScreen";
import InstructionListScreen from "../screens/InstructionListScreen";
import InstructionDetailScreen from "../screens/InstuctionDetailScreen";
import PlusHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";

const InstructNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: "Home",
        headerTitleStyle: { alignSelf: "center" },
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={PlusHeaderButton}>
            <Item
              title="Add Task"
              iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
              onPress={() => {
                // navData.navigation.navigate("NewTask");
                alert("PLus button!");
              }}
            />
            <Item
              title="Delete Task"
              iconName={Platform.OS === "android" ? "md-trash" : "ios-trash"}
              onPress={() => {
                // navData.navigation.navigate("NewTask");
                alert("Delete button!");
              }}
            />
          </HeaderButtons>
        ),
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
      headerTitleAlign: 'center',
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(InstructNavigator);
