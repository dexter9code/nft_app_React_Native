import React, { useState } from "react";
import { View, FlatList, SafeAreaView, StyleSheet } from "react-native";

import { COLORS, NFTData } from "../constants";
import { HomeHeader, NFTCard, AppStatusBar } from "../components";
import colors from "../config/colors";

function Home(props) {
  const [nft, setNft] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) return setNft(NFTData);

    const FilteredData = nft.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (FilteredData.length) {
      setNft(FilteredData);
    } else {
      setNft(NFTData);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar style={styles.statusBar} />
      <View style={styles.subContainer1}>
        <View style={styles.subContainer2}>
          <FlatList
            data={nft}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View style={styles.backgroundScreen}>
          <View style={{ height: 300, backgroundColor: colors.secondary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: COLORS.primary,
  },
  subContainer1: { flex: 1 },
  subContainer2: { zIndex: 0 },
  backgroundScreen: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
});

export default Home;
