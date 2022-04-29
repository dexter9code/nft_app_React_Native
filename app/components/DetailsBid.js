import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import { EthPrice } from "../components/SubInfo";
import colors from "../config/colors";
import { SIZES, FONTS } from "../constants";

function DetailsBid({ bid }) {
  return (
    <View style={styles.container}>
      <Image source={bid.image} style={styles.image} resizeMode="contain" />
      <View>
        <Text style={styles.bidText}>Bid Placed By{bid.name}</Text>
        <Text style={styles.bidDateText}>{bid.date}</Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base *2,
  },
  image: {
    width: 48,
    height: 48,
  },
  bidText: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: colors.primary,
  },
  bidDateText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small - 2,
    color: colors.secondary,
    marginTop: 3,
  },
});

export default DetailsBid;
