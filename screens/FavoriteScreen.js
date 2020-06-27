import React from "react";

import InstructionList from "../components/InstructionList";
import { INSTRUCTIONS } from "../data/dummy-data";

const FavoriteScreen = (props) => {
  const favInstructions = INSTRUCTIONS.filter(
    (inst) => inst.id === "i1" || inst.id === "i2"
  );

  return (
    <InstructionList listData={favInstructions} navigation={props.navigation} />
  );
};

FavoriteScreen.navigationOptions = {
  title: "Favorites",
};

export default FavoriteScreen;
