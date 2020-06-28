import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import InstructionList from "../components/InstructionList";

const FavoriteScreen = (props) => {
  const favInstructions = useSelector(
    (state) => state.instructions.favoriteInstructions
  );

  if (favInstructions.length === 0 || !favInstructions) {
    return (
      <View style={styles.emptyContentContainer}>
        <Text style={styles.title}>No Favorite Instructions Found!</Text>
      </View>
    );
  }

  return (
    <InstructionList listData={favInstructions} navigation={props.navigation} />
  );
};

FavoriteScreen.navigationOptions = {
  title: "Favorites",
};

const styles = StyleSheet.create({
  emptyContentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
});

export default FavoriteScreen;
