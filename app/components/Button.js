import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES, FONTS } from "./../constants/theme";

function CircleButton({ imageUrl, handlePress, ...props }) {
  return (
    <TouchableOpacity
      style={[styles.container, { ...props }]}
      onPress={handlePress}
    >
      <Image source={imageUrl} resizeMode="contain" style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    position: "absolute",
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.light,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default CircleButton;
