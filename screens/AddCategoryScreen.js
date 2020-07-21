import React, { useState, useCallback } from "react";
import {
  View,
  ScrollView,
  Button,
  Text,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import { CATEGORY_COLORS } from "../data/dummy-data";
import { addCategory } from "../store/actions/categoryActions";
import { insertCategory, fetchAllCategories, deleteAllCategories } from "../helpers/db";

const AddCategoryScreen = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const availableCategories = useSelector(
    (state) => state.categories.categories
  );

  const dispatch = useDispatch();

  const submitHandler = useCallback(() => {
    const titleExistIndex = availableCategories.findIndex(
      (category) => category.title === enteredText
    );
    if (titleExistIndex >= 0) {
      Alert.alert("Duplication", "The chosen category name already exists!");
    } else {
      try {
        const newCatNum = availableCategories.length + 1;
        const newCatColor = CATEGORY_COLORS[(newCatNum % 10) - 1];
        insertCategory(enteredText, newCatColor).then((dbRes) => {
          console.log(dbRes);
          dispatch(addCategory(enteredText, newCatColor));
          Alert.alert("Success", "Category has been added!");
          props.navigation.pop();
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  }, [dispatch, enteredText]);

  /* For Debugging ONLY

  const testShowAllHandler = useCallback(() => {
    fetchAllCategories().then((res) => {
      console.log(res);
    });
  }, [enteredText]);

  const testDeleteAllHandler = useCallback(() => {
    deleteAllCategories().then((res) => {
      console.log(res);
    });
  }, [enteredText]);
  */

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>New Category:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setEnteredText(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Save Category"
          color={Colors.primaryColor}
          onPress={submitHandler}
        />
        <Button
          title="Cancel"
          color={Colors.primaryColor}
          onPress={() => {
            props.navigation.pop();
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    fontSize: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default AddCategoryScreen;
