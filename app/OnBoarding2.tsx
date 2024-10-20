import { View, Text } from "react-native";
import React from "react";

//components
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";
import WideTwoButton from "@/components/buttons/WideTwoButton";

//constants
import { imagePath } from "@/constants/ImagePath";
import LightDark from "@/components/texts/LightDark";

export default function onBoarding2() {
  return (
    <View className="bg-lightBrown w-full h-full py-28 px-10">
      <LeftStripe rotate />
      <RightStripe rotate />
      <Text className="text-lg text-darkBrown font-odBold mb-10">
        Would you like to test for dyslexia or know more about your condition?
      </Text>
      <View className="mb-10 mt-24">
        <WideTwoButton
          link="/(tabs)/tests"
          text="Test for dyslexia"
          image={imagePath.testPassed}
        />
      </View>
      <WideTwoButton
        link="/(tabs)/learning"
        text="Start improving"
        image={imagePath.agile}
      />
      <View className="mt-auto">
        <LightDark text1="Learn more about the" text2="Tests" link="/" />
      </View>
    </View>
  );
}
