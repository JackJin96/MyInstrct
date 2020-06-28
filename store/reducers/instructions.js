import { INSTRUCTIONS } from "../../data/dummy-data";

const initialState = {
  instructions: INSTRUCTIONS,
  favoriteInstructions: []
};

const instructionsReducer = (state = initialState, action) => {
  return state;
};

export default instructionsReducer;