import React, { useEffect, useCallback } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/instActions";

const InstructionDetailScreen = (props) => {
  const instructionId = props.navigation.getParam("instructionId");

  const availableInstructions = useSelector(
    (state) => state.instructions.instructions
  );
  const curInstIsFavorite = useSelector((state) =>
    state.instructions.favoriteInstructions.some(
      (inst) => inst.id === instructionId
    )
  );

  const selectedInstruction = availableInstructions.find(
    (inst) => inst.id === instructionId
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(instructionId));
  }, [dispatch, instructionId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: curInstIsFavorite });
  }, [curInstIsFavorite]);

  const renderedImages = selectedInstruction.imageUris.map((imageUri) => {
    return (
      <Image
        resizeMode={"contain"}
        style={styles.image}
        source={{ uri: imageUri }}
      />
    );
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.title}>Descriptions:</Text>
        <DefaultText>{selectedInstruction.description}</DefaultText>
        <Text style={styles.title}>Images:</Text>
        {selectedInstruction.imageUris.length === 0 ? (
          <DefaultText>No photos for this instruction.</DefaultText>
        ) : (
          renderedImages
        )}
        <Text style={styles.title}>Videos:</Text>
        <DefaultText>No photos for this instruction.</DefaultText>
      </View>
    </ScrollView>
  );
};

InstructionDetailScreen.navigationOptions = (navData) => {
  const instructionTitle = navData.navigation.getParam("instructionTitle");
  const toggleFav = navData.navigation.getParam("toggleFav");
  const isFavorite = navData.navigation.getParam("isFav");
  return {
    title: instructionTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Add Task"
          iconName={
            Platform.OS === "android"
              ? isFavorite
                ? "md-star"
                : "md-star-outline"
              : isFavorite
              ? "ios-star"
              : "ios-star-outline"
          }
          iconSize={25}
          onPress={toggleFav}
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
  image: {
    width: "100%",
    height: 200,
    marginTop: "1%",
    marginBottom: "1%",
  },
});

export default InstructionDetailScreen;
