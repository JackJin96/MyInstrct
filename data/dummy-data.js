/*
All available card colors:
export const CATEGORIES = [
  new Category('c1', 'Italian', '#f5428d'),
  new Category('c2', 'Quick & Easy', '#f54242'),
  new Category('c3', 'Hamburgers', '#f5a442'),
  new Category('c4', 'German', '#f5d142'),
  new Category('c5', 'Light & Lovely', '#368dff'),
  new Category('c6', 'Exotic', '#41d95d'),
  new Category('c7', 'Breakfast', '#9eecff'),
  new Category('c8', 'Asian', '#b9ffb0'),
  new Category('c9', 'French', '#ffc7ff'),
  new Category('c10', 'Summer', '#47fced')
];
*/

import Category from "../models/category";
import Instruction from "../models/instruction";

export const CATEGORY_COLORS = [
  "#f5428d",
  "#f54242",
  "#f5a442",
  "#f5d142",
  "#368dff",
  "#41d95d",
  "#9eecff",
  "#b9ffb0",
  "#ffc7ff",
  "#47fced",
];

export const CATEGORY_TITLES = [
  "Furniture",
  "Recipe",
  "Song Lyrics",
  "Piano Sheet Music",
  "Social Media",
  "Video Games",
  "Networking",
  "Movies",
  "Toys",
  "Other",
];

export const CATEGORIES = [
  new Category("c1", "Furniture", "#f5428d"),
  new Category("c2", "Recipe", "#f54242"),
  new Category("c3", "Song Lyrics", "#f5a442"),
  new Category("c4", "Piano Sheet Music", "#f5d142"),
  new Category("c5", "Social Media", "#368dff"),
  new Category("c6", "Video Games", "#41d95d"),
  new Category("c7", "Networking", "#9eecff"),
  new Category("c8", "Movies", "#b9ffb0"),
  new Category("c9", "Toys", "#ffc7ff"),
  new Category("c10", "Other", "#47fced"),
];

export const INSTRUCTIONS = [
  new Instruction(
    "i1",
    ["c1"],
    "Dining Table",
    "Step 1: Take out stuff from package. \n Step 2: Assemble all the parts",
    [
      "https://www.gamasutra.com/db_area/images/news/2018/Jun/320213/supermario64thumb1.jpg",
      "https://www.computerhope.com/jargon/r/random-dice.jpg",
    ]
  ),
  new Instruction(
    "i2",
    ["c1", "c10"],
    "Chair",
    "Step 1: Take out stuff from package. \n Step 2: Assemble all the parts",
    [
      "https://www.gamasutra.com/db_area/images/news/2018/Jun/320213/supermario64thumb1.jpg",
      "https://www.computerhope.com/jargon/r/random-dice.jpg",
    ]
  ),
];
