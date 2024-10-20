import { View, Text } from "react-native";
import React from "react";
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";
import WideInput from "@/components/inputs/WideInput";
import Dropdown from "@/components/inputs/Dropdown";
import SmallWithArrow from "@/components/buttons/SmallWithArrow";

export default function onBoarding1() {
  return (
    <View className="w-full h-full bg-lightBrown py-28 px-10">
      <LeftStripe rotate />
      <RightStripe rotate />
      <Text className="text-lg text-darkBrown font-odBold mb-10">
        Hey there, welcome to app name, lets get to know each other better
      </Text>
      <Text className="mb-5 text-base text-darkBrown font-odRegular">
        What is your name?
      </Text>
      <WideInput text="Enter your name" color="#693C27" />
      <Text className="mb-5 text-base text-darkBrown font-odRegular mt-10">
        What is your gender?
      </Text>
      <Dropdown color="#693C27" options={["Male", "Female"]} />
      <Text className="mb-5 text-base text-darkBrown font-odRegular mt-10">
        What is your age?
      </Text>
      <WideInput text="Enter your age" color="#693C27" />
      <View className="mt-10">
        <SmallWithArrow text="Continue" link="/OnBoarding2" />
      </View>
    </View>
  );
}
