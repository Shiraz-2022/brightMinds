import { Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import ODBold from "@/assets/fonts/OpenDyslexic-Bold.otf";
import ODRegular from "@/assets/fonts/OpenDyslexic-Regular.otf";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useAuth0, Auth0Provider } from "react-native-auth0";

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
    <Auth0Provider
      domain={"dev-qsvea7sk7qwekoww.us.auth0.com"}
      clientId={"IqpREnrpRjydrB90p3uTSCR493r72mMp"}
    >
      <Provider store={store}>
        <Stack
          screenOptions={{ headerShown: false }}
          initialRouteName="/parent"
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </Auth0Provider>
  );
}
