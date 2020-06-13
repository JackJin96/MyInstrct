import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const InstructionListScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The InstructionList Screen</Text>
      <Button
        title="Go to Detail!"
        onPress={() => {
          props.navigation.navigate({ routeName: "InstructionDetail" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InstructionListScreen;
