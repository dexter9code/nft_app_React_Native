import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./app/screens/Home";
import Details from "./app/screens/Details";
import myTheme from "./app/navigation/navigationTheme";

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./app/assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./app/assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./app/assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./app/assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./app/assets/fonts/Inter-Light.ttf"),
  });
  if (!loaded) return null;
  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
