import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { EthPrice, NFTTitle } from "../components/SubInfo";
import colors from "../config/colors";
import { COLORS, FONTS, SIZES } from "../constants";

function DetailsDesc({ data }) {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          SubTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.2 }}>
        <Text style={styles.descriptionHeadText}>Description</Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text style={styles.descriptionText}>
            {text} {!readMore && "..."}
          </Text>
          <Text
            style={styles.readmoreText}
            onPress={() => {
              if (!readMore) {
                setText(data.description);
                 setReadMore(true);
              } else {
                setText(data.description.slice(0, 100));
                setReadMore(false);
              }
            }}
          >
            {readMore ? "Show Less" : "Show More"}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descriptionHeadText: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.font,
    color: colors.nebulaGreen,
  },
  descriptionText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: colors.medium,
    lineHeight: SIZES.large,
  },
  readmoreText: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: colors.babyBlue,
  },
});

export default DetailsDesc;
