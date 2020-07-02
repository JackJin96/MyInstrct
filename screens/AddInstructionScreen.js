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
import ImagePicker from "../components/ImagePicker";
import { addInstruction } from "../store/actions/instActions";

const AddInstructionScreen = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const catId = props.navigation.getParam("catId");

  const dispatch = useDispatch();

  const imageSelectedHandler = (imagePath) => {
    setSelectedImages((prevImagePaths) => prevImagePaths.concat(imagePath));
  };

  const availableInstructions = useSelector(
    (state) => state.instructions.instructions
  );

  const submitInstructionHandler = useCallback(() => {
    const titleExistIndex = availableInstructions.findIndex(
      (inst) => inst.title === enteredTitle
    );
    if (titleExistIndex >= 0) {
      Alert.alert(
        "Duplication",
        "The chosen instruction title already exists!"
      );
    } else {
      dispatch(
        addInstruction([catId], enteredTitle, enteredDesc, selectedImages)
      );
      Alert.alert("Success", "Instruction has been added!");
      props.navigation.pop();
    }
  }, [dispatch, enteredTitle, catId, enteredDesc, selectedImages]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>New Instruction Title:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setEnteredTitle(text)}
        />
        <Text style={styles.label}>New Instruction Description:</Text>
        <TextInput
          style={styles.textInput}
          multiline={true}
          scrollEnabled={true}
          onChangeText={(text) => setEnteredDesc(text)}
        />
        <Text style={styles.label}>New Instruction Images:</Text>
        <ImagePicker onImageSelected={imageSelectedHandler} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Save Instruction"
          color={Colors.primaryColor}
          onPress={submitInstructionHandler}
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
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 30,
  },
});

export default AddInstructionScreen;
