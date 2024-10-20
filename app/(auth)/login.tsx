import { View, Text, KeyboardAvoidingView } from "react-native";
import { useAuth0 } from "react-native-auth0";

//components
import WideInput from "@/components/inputs/WideInput";
import WideButton from "@/components/buttons/WideButton";
import WideTwoButton from "@/components/buttons/WideTwoButton";
import LightDark from "@/components/texts/LightDark";
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";

//constants
import { imagePath } from "@/constants/ImagePath";

export default function login() {
  const { authorize, clearSession } = useAuth0();

  const handleLogin = async () => {
    try {
      console.log("Authorizing...");
      const config = {
        scope: "openid profile email", // Add any necessary scopes
        audience: "https://dev-qsvea7sk7qwekoww.us.auth0.com/userinfo", // Replace with your Auth0 domain if needed
        redirectUri: "exp://127.0.0.1:19000/--/callback", // Match Auth0 callback settings
      };

      const res = await authorize(config);
      console.log("Login successful:", res);
    } catch (e) {
      console.error("Login error:", e);
    }
  };

  return (
    <View className="bg-lightBrown h-full relative py-16">
      <LightDark
        text1="Login as a "
        text2="Parent"
        link="/parent/(tabs)/overview"
      />
      <View className="py-56 px-10 ">
        <LeftStripe rotate={false} />
        <RightStripe rotate={false} />
        <View className="mb-7">
          <WideInput text="phonenumber or email" color="#693C27" />
        </View>
        <WideInput text="password" color="#693C27" />
        <Text className="text-lg font-odBold text-darkBrown mx-auto my-7">
          OR
        </Text>
        <View className="mb-7">
          <WideTwoButton
            text="Login with google"
            image={imagePath.googleIcon}
            press
            apiFunction={handleLogin}
          />
        </View>
        <View className="mb-7">
          <WideButton text="Login" link="/OnBoarding1" />
        </View>
        <LightDark
          text1="Not registered?"
          text2="SignUp"
          link="/(auth)/signup"
        />
      </View>
    </View>
  );
}
