import React from "react";
import { View, Image, ImageBackground, Text,Button ,StyleSheet,TouchableOpacity,Pressable } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

import { FONTS, SIZES } from "../constants";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      source={require("../assets/welcomeBgc.jpg")}
      blurRadius={8}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/images/logo.png")} />
        <Text style={styles.titleText}>Buy Verified NFT</Text>
      </View>
        <AppButton title={'Login'} style={{fontFamily:FONTS.bold,fontSize:SIZES.large, color:colors.denimBlue}} color='lavender' onPress={()=>navigation.navigate('Login')}/>
        <AppButton title={'Sing Up'} style={{fontFamily:FONTS.bold,fontSize:SIZES.large,color:colors.white}} onPress={()=>navigation.navigate('Register')}/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  titleText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: colors.babyBlue,
  },
});

export default WelcomeScreen;
