import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import InstructionListScreen from "../screens/InstructionListScreen";
import InstructionDetailScreen from "../screens/InstuctionDetailScreen";
import Colors from "../constants/Colors";

const InstructNavigator = createStackNavigator(
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
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(InstructNavigator);
