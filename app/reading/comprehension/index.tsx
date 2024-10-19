import { View, Text } from "react-native";
import React from "react";

//components
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";
import OpacityBox from "@/components/OpacityBox";
import Submit from "@/components/Submit";

//constants
import Cross from "@/components/Cross";

export default function Comprehension() {
  return (
    <View className="bg-darkBrown w-full h-full py-16 px-10">
      <LeftStripe rotate light />
      <RightStripe rotate light />
      <Cross link="/(tabs)/tests" />
      <Text className="text-lightBrown font-odRegular text-lg">
        Choose the right option, based on the last passage
      </Text>
      <Text className="text-lightBrown font-odRegular my-7">
        Lorem ipsum dolor sit amet,adipiscing elit.
      </Text>
      <View className="flex">
        <OpacityBox text="Lorem ipsum dolor sit" option />
        <OpacityBox text="Lorem ipsum dolor sit" option />
        <OpacityBox text="Lorem ipsum dolor sit" option />
        <OpacityBox text="Lorem ipsum dolor sit" option />
      </View>
      <Submit link="/reading/word" />
    </View>
  );
}
