import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import InstructionItem from "../components/InstructionItem";
import CustomHeaderButton from "../components/CustomHeaderButton";

import { CATEGORIES, INSTRUCTIONS } from "../data/dummy-data";

const InstructionListScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedInstructions = INSTRUCTIONS.filter(
    (instruction) => instruction.categoryIds.indexOf(catId) >= 0
  );

  const renderInstructionItem = (itemData) => {
    return (
      <InstructionItem
        title={itemData.item.title}
        desc={itemData.item.description}
        onSelectInstruction={() => {
          props.navigation.navigate({
            routeName: "InstructionDetail",
            params: {
              instructionId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedInstructions}
        keyExtractor={(item, index) => item.id}
        renderItem={renderInstructionItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

InstructionListScreen.navigationOptions = (navData) => {
  const catId = navData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default InstructionListScreen;
