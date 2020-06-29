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

const AddInstructionScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>New Instruction Title:</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.label}>New Instruction Description:</Text>
        <TextInput
          style={styles.textInput}
          multiline={true}
          scrollEnabled={true}
        />
        <Text style={styles.label}>New Instruction Images:</Text>
        <Text>Replace this with add image option</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Save Instruction"
          color={Colors.primaryColor}
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

export default AddInstructionScreen;
