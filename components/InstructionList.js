import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import InstructionItem from "./InstructionItem";

const InstructionList = (props) => {
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
              instructionTitle: itemData.item.title,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderInstructionItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default InstructionList;
