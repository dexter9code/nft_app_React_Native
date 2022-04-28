import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import CircleButton from "./Button";

function NFTCard({ data }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={data.image} style={styles.image} resizeMode="cover" />
        <CircleButton imageUrl={assets.heart} top={10} right={10} />
      </View>
      <SubInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  subContainer: {
    width: "100%",
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
});

export default NFTCard;
