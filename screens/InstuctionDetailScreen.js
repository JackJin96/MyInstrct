import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { INSTRUCTIONS } from "../data/dummy-data";
import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";

const InstructionDetailScreen = (props) => {
  const instructionId = props.navigation.getParam("instructionId");

  const selectedInstructions = INSTRUCTIONS.find(
    (inst) => inst.id === instructionId
  );

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.title}>Descriptions:</Text>
        <DefaultText>{selectedInstructions.description}</DefaultText>
        <Text style={styles.title}>Photos:</Text>
        <DefaultText>Add Photos Here...</DefaultText>
        <Text style={styles.title}>Videos:</Text>
        <DefaultText>Add Videos Here...</DefaultText>
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
  title: {
    marginTop: "10%",
    marginBottom: "3%",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default InstructionDetailScreen;
