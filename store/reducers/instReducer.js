import { INSTRUCTIONS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, ADD_INSTRUCTION } from "../actions/instActions";
import Instruction from "../../models/instruction";

const initialState = {
  instructions: INSTRUCTIONS,
  favoriteInstructions: [],
};

const instructionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteInstructions.findIndex(
        (inst) => inst.id === action.instId
      );
      if (existingIndex >= 0) {
        let updatedFavInstructions = [...state.favoriteInstructions];
        updatedFavInstructions.splice(existingIndex, 1);
        return { ...state, favoriteInstructions: updatedFavInstructions };
      } else {
        const instToAdd = state.instructions.find(
          (inst) => inst.id === action.instId
        );
        return {
          ...state,
          favoriteInstructions: state.favoriteInstructions.concat(instToAdd),
        };
      }
    case ADD_INSTRUCTION:
      const newInstId = "i" + (state.instructions.length + 1).toString();
      const instToAdd = new Instruction(
        newInstId,
        action.catIds,
        action.instTitle,
        action.instDesc,
        action.instImageUris
      );
      return {
        ...state,
        instructions: state.instructions.concat(instToAdd),
      };
    default:
      return state;
  }
};

export default instructionsReducer;
