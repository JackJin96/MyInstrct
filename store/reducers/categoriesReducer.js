import { CATEGORIES } from "../../data/dummy-data";
import { ADD_CATEGORY } from "../actions/categoryActions";

import Category from "../../models/category";

const initialState = {
  categories: CATEGORIES,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      const newCatNum = state.categories.length + 1;
      const newCatId = "c" + newCatNum.toString();
      const categoryToAdd = new Category(
        newCatId,
        action.catTitle,
        action.catColor
      );
      return {
        ...state,
        categories: state.categories.concat(categoryToAdd),
      };
    default:
      return state;
  }
};

export default categoriesReducer;
