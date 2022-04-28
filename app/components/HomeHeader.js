import { Text, StyleSheet, View, Image, TextInput } from "react-native";

import colors from "../config/colors";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";

function HomeHeader({ onSearch }) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={assets.logo} resizeMode="contain" style={styles.image} />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={styles.profileImage}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text style={styles.nameText}>Hi Nikki 👋</Text>
        <Text style={styles.subText}>Let's Find a MasterPiece ✨</Text>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View style={styles.searchBoxContainer}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={styles.searchBox}
          />
          <TextInput
            placeholder="Search NFT"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: SIZES.base,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 25,
  },
  profileImage: {
    width: 15,
    height: 15,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  nameText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: colors.white,
  },
  subText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: colors.white,
    margin: SIZES.base / 4,
    ...SHADOWS.dark,
  },
  searchBox: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
  },
  searchBoxContainer: {
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: colors.cornFlowerBlue,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SIZES.small - 2,
    paddingHorizontal: SIZES.font,
  },
});

export default HomeHeader;
