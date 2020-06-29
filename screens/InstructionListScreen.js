import React from "react";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import InstructionList from "../components/InstructionList";

const InstructionListScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableInstructions = useSelector(
    (state) => state.instructions.instructions
  );

  const displayedInstructions = availableInstructions.filter(
    (inst) => inst.categoryIds.indexOf(catId) >= 0
  );

  return (
    <InstructionList
      listData={displayedInstructions}
      navigation={props.navigation}
    />
  );
};

InstructionListScreen.navigationOptions = (navData) => {
  const catTitle = navData.navigation.getParam("categoryTitle");
  return {
    headerTitle: catTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Add Instruction"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          iconSize={30}
          onPress={() => {
            navData.navigation.navigate("AddInstruction");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default InstructionListScreen;
