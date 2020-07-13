export const ADD_CATEGORY = "ADD_CATEGORY";

export const addCategory = (name, color) => {
  return { type: ADD_CATEGORY, catTitle: name, catColor: color };
};
