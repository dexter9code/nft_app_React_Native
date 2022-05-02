import React from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { assets, SIZES, FONTS } from "../constants";
import ListItemSeparatorComponent from "./../components/ListItemSeprator";
import IconComponent from "../components/IconComponent";

const accItem = [
  {
    title: 'Wallet',
    icon: {
      name: "wallet",
      backgroundColor: colors.cyan,
    },
  },
  {
    title: "Buy Eth Coins",
    icon: {
      name: "alpha-e-box",
      backgroundColor: colors.denimBlue,
    },
  },
  {
    title: "Messages",
    icon: {
      name: "message",
      backgroundColor: colors.nebulaGreen,
    },
  },
  {
    title: "Orders",
    icon: {
      name: "cart",
      backgroundColor: colors.tiffanyBlue,
    },
  },
];

function AccountScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.accContainer}>
        <Image
          source={assets.person01}
          style={styles.accImage}
          resizeMode="contain"
        />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.text} numberOfLines={1}>
            Nikki Paterson
          </Text>
          <Text style={styles.text2} numberOfLines={2}>
            Paterson.Nikki.nfts@hotmail.com
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: colors.lightCyan }}>
        <FlatList
          data={accItem}
          keyExtractor={(accItem) => accItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity style={styles.listContainer}>
                <View style={{ padding: SIZES.base }}>
                  <IconComponent
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                    size={50}
                  />
                </View>

                <Text style={styles.listText}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("WelcomeScreen")}>
        <View style={styles.logoutContainer}>
          <IconComponent
            name="logout"
            backgroundColor={colors.danger}
            size={50}
          />
          <Text style={styles.logoutText}>Log Out</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightCyan,
    flex: 1,
  },
  accContainer: {
    flexDirection: "row",
    padding: SIZES.small,
    marginVertical: 55,
    backgroundColor: colors.lightCyan,
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  logoutContainer: {
    padding: SIZES.small,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightCyan,
  },
  listText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: colors.dark,
    padding: SIZES.font,
  },
  logoutText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: colors.dark,
    padding: SIZES.font,
  },
  accImage: {
    width: 85,
    height: 85,
    padding: SIZES.large,
  },
  icon: {
    padding: SIZES.font,
  },
  text: {
    paddingTop: SIZES.small,
    paddingLeft: SIZES.font,
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
    color: colors.dark,
  },
  text2: {
    fontFamily: FONTS.light,
    fontSize: SIZES.medium,
    color: colors.dark,
    paddingLeft: SIZES.font,
  },
});

export default AccountScreen;
