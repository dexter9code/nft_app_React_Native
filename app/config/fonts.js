import { useFonts } from "expo-font";

const customFonts = useFonts({
  InterBold: require("../assets/fonts/Inter-Bold.ttf"),
  InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
  InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
  InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
  InterLight: require("../assets/fonts/Inter-Light.ttf"),
});

export default customFonts;
