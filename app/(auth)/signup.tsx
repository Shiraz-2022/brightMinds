import { View, Text } from "react-native";
import React from "react";

//components
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";
import WideInput from "@/components/inputs/WideInput";
import WideTwoButton from "@/components/buttons/WideTwoButton";
import WideButton from "@/components/buttons/WideButton";
import LightDark from "@/components/texts/LightDark";

//constants
import { imagePath } from "@/constants/ImagePath";

export default function signup() {
  return (
    <View className="py-56 px-10 bg-lightBrown h-full relative">
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
          link="/"
          text="SignUp with google"
          image={imagePath.googleIcon}
        />
      </View>
      <View className="mb-7">
        <WideButton text="Sign Up" link="/OnBoarding1" />
      </View>
      <LightDark
        text1="Already registered?"
        text2="Login"
        link="/(auth)/login"
      />
    </View>
  );
}
