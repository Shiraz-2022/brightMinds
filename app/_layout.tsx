import { Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import ODBold from "@/assets/fonts/OpenDyslexic-Bold.otf";
import ODRegular from "@/assets/fonts/OpenDyslexic-Regular.otf";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ ODBold, ODRegular });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack
        screenOptions={{ headerShown: false }}
        initialRouteName="reading/comprehension"
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
