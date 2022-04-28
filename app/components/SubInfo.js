import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import { SIZES, FONTS, assets, SHADOWS, COLORS } from "../constants";

export const NFTTitle = () => {
  return <Text>title</Text>;
};
export const EthPrice = () => {
  return <Text>Eth price</Text>;
};
export const ImageCmp = ({ imageUrl, index }) => {
  return (
    <Image
      source={imageUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};
export const People = () => {
  return (
    <View style={styles.people}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imageUrl, index) => (
          <ImageCmp imageUrl={imageUrl} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
};
export const EndDate = () => {
  return (
    <View style={styles.enddate}>
      <Text style={styles.edTextMain}>END-IN</Text>
      <Text style={styles.edTextSub}>15Hrs 5Min 12Sec</Text>
    </View>
  );
};
export const SubInfo = () => {
  return (
    <View style={styles.Subinfo}>
      <People />
      <EndDate />
    </View>
  );
};

const styles = StyleSheet.create({
  Subinfo: {
    width: "100%",
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  people: {
    flexDirection: "row",
  },
  enddate: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.light,
    elevation: 1,
    maxWidth: "50%",
  },
  edTextMain: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  edTextSub: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
});
