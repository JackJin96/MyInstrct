import React, { useState, useEffect } from "react";
import { View, Button, Image, Text, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Colors from "../constants/Colors";

const ImgPicker = (props) => {
  const [pickedImages, setPickedImage] = useState([]);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!image.cancelled) {
      setPickedImage((prevImages) => prevImages.concat(image.uri));
    }
  };

  const chooseImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
    });

    if (!image.cancelled) {
      setPickedImage((prevImages) => prevImages.concat(image.uri));
    }
  };

  const renderedImages = pickedImages.map((imageUri) => {
    return <Image style={styles.image} source={{ uri: imageUri }} />;
  });

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {pickedImages.length === 0 ? (
          <Text>No image picker yet.</Text>
        ) : (
          renderedImages
        )}
      </View>
      <View style={styles.imageButtonsContainer}>
        <Button
          title="Take Image"
          color={Colors.primaryColor}
          onPress={takeImageHandler}
        />
        <Button
          title="Choose From Library"
          color={Colors.primaryColor}
          onPress={chooseImageHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
  },
  imagePreview: {
    width: "100%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: "5%",
    marginBottom: "5%",
  },
  imageButtonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});

export default ImgPicker;
