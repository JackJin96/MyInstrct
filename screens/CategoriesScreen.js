import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ProgressViewIOSComponent,
} from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title="Go to List!"
        onPress={() => {
          props.navigation.navigate({ routeName: "InstructionList" });
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

export default CategoriesScreen;
