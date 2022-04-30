import React from "react";
import { StyleSheet, Text } from "react-native";

import { FONTS, SIZES } from "../constants";

function AppErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <Text style={styles.error}>{error}</Text>;
}
const styles = StyleSheet.create({
  error: {
    color: "red",
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
  },
});

export default AppErrorMessage;
