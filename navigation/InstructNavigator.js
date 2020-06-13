import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import InstructionListScreen from "../screens/InstructionListScreen";
import InstructionDetailScreen from "../screens/InstuctionDetailScreen";

const InstructNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  InstructionList: InstructionListScreen,
  InstructionDetail: InstructionDetailScreen,
});

export default createAppContainer(InstructNavigator);
