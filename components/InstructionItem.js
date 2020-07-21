import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const defaultBgImage = require("../assets/images/InstructionItemDefault.png");

const InstructionItem = (props) => {
  return (
    <View style={styles.instructionItem}>
      <TouchableOpacity onPress={props.onSelectInstruction}>
        <View>
          <ImageBackground
            source={
              props.imageUris.length === 0
                ? defaultBgImage
                : { uri: props.imageUris[0] }
            }
            style={styles.bgImage}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{props.title}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  instructionItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});

export default InstructionItem;
