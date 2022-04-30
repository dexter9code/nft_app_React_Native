import React, { useState } from "react";
import { StyleSheet, Image, SafeAreaView, View } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/AppForm";
import AppFormField from "./../components/AppFormField";
import AppButton from "./../components/AppButton";
import { FONTS, SIZES, COLORS } from "../constants";
import colors from "../config/colors";
import AppErrorMessage from "../components/AppErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function LoginScreen({ navigation }) {
  const [loginFailed, setLoginFailed] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        style={styles.form}
      >
        <AppErrorMessage
          error="Invalid email or password"
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
      </AppForm>
      <View style={{ marginTop: SIZES.extraLarge }}>
        <AppButton
          title={"LogIn"}
          borderRadius={25}
          style={styles.loginButton}
          onPress={()=> navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SIZES.font,
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  logo: {
    alignSelf: "center",
    marginTop: 80,
    marginBottom: 50,
  },
  form: {
    marginTop: 50,
    marginBottom: SIZES.extraLarge,
  },
  loginButton: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
    color: colors.blueDiamond,
    shadowColor: colors.black,
    elevation: 8,
  },
});

export default LoginScreen;
