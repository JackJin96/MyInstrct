import React from "react";
import { useSelect } from "react-redux";

import InstructionList from "../components/InstructionList";

const FavoriteScreen = (props) => {
  const favInstructions = useSelect(
    (state) => state.instructions.favoriteInstructions
  );

  return (
    <InstructionList listData={favInstructions} navigation={props.navigation} />
  );
};

FavoriteScreen.navigationOptions = {
  title: "Favorites",
};

export default FavoriteScreen;
