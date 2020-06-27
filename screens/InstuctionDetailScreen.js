import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { INSTRUCTIONS } from "../data/dummy-data";
import CustomHeaderButton from "../components/CustomHeaderButton";

const InstructionDetailScreen = (props) => {
  const instructionId = props.navigation.getParam("instructionId");

  const selectedInstructions = INSTRUCTIONS.find(
    (inst) => inst.id === instructionId
  );

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text>{selectedInstructions.description}</Text>
      </View>
    </ScrollView>
  );
};

InstructionDetailScreen.navigationOptions = (navData) => {
  const instructionId = navData.navigation.getParam("instructionId");
  const selectedInstruction = INSTRUCTIONS.find(
    (inst) => inst.id === instructionId
  );
  return {
    title: selectedInstruction.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Add Task"
          iconName={Platform.OS === "android" ? "md-star" : "ios-star"}
          iconSize={25}
          onPress={() => {
            alert("Favorite Button!");
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
  },
});

export default InstructionDetailScreen;
