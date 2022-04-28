import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { SIZES, FONTS, assets, SHADOWS, COLORS } from "../constants";

export const NFTTitle = ({ title, subTitle, titleSize, SubTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: colors.blueDiamond,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SubTitleSize,
          color: colors.blushRed,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};
export const EthPrice = ({ price }) => {
  return (
    <View style={styles.ethprice}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={styles.ethPriceImage}
      />
      <Text style={styles.ethText}>{price}</Text>
    </View>
  );
};
export const EthButton = ({ buttonWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.dodgerBlue,
        borderRadius: SIZES.extraLarge,
        minWidth: buttonWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: fontSize,
          color: colors.white,
          fontWeight:'400',
          textAlign: "center",
        }}
      >
        Place-Bid
      </Text>
    </TouchableOpacity>
  );
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
      <Text style={styles.edTextSub}>15Hrs 5Min</Text>
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
  ethprice: {
    flexDirection: "row",
    alignItems: "center",
  },
  ethText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.font,
    color: colors.dark,
  },
  ethPriceImage: {
    width: 20,
    height: 20,
    marginRight: 2,
  },

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
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.light,
    elevation: 1,
    maxWidth: "50%",
  },
  edTextMain: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: colors.white,
  },
  edTextSub: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: colors.white,
  },
});
