import React from "react";

import {
  View,
  ScrollView,
  Button,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";

import Colors from "../constants/Colors";

const AddCategoryScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>New Category:</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Save Category"
          color={Colors.primaryColor}
          onPress={() => {}}
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
