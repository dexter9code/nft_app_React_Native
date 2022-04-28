import React, { useState } from "react";
import { Text, View, FlatList, SafeAreaView, StyleSheet } from "react-native";

import { COLORS, NFTData } from "../constants";
import { HomeHeader, NFTCard, AppStatusBar } from "../components";

function Home(props) {
  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar style={styles.statusBar} />
      <View style={styles.subContainer1}>
        <View style={styles.subContainer2}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
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
});

export default Home;
