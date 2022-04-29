import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

import colors from "../config/colors";
import { SIZES } from "../constants";

function AppButton({ title, onPress, style, color = "blushRed" }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { backgroundColor: colors[color] }]}
    >
      <Text style={style}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blushRed,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.font,
  },
});

export default AppButton;
