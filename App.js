import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MainStackNavigator from "./navigation/InstructNavigator";
import instructionsReducer from "./store/reducers/instReducer";
import categoriesReducer from "./store/reducers/categoriesReducer";
import { init } from "./helpers/db";

enableScreens();

init()
  .then(() => {
    console.log("Initialized Database");
  })
  .catch((err) => {
    console.log("Failed to initialized database.");
    console.log(err);
  });

const rootReducer = combineReducers({
  categories: categoriesReducer,
  instructions: instructionsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
