export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, instId: id };
};

export const addInstruction = (categoryIds, title, description, imageUris) => {
  return {
    type: ADD_INSTRUCTION,
    catIds: categoryIds,
    instTitle: title,
    instDesc: description,
    instImageUris: imageUris,
  };
};
