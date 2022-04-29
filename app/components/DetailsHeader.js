import { StyleSheet, Image, View, StatusBar } from "react-native";
import React from "react";

import { assets } from "../constants";
import CircleButton from "./Button";

function DetailsHeader({ data, navigation }) {
  return (
    <View style={styles.container}>
      <Image source={data.image} resizeMode="cover" style={styles.image} />
      <CircleButton
        imageUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />
      <CircleButton
        imageUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 373,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default DetailsHeader;
