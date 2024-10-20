import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

//components
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";
import OpacityBox from "@/components/OpacityBox";
import Submit from "@/components/Submit";
import Cross from "@/components/Cross";

//constants
import {
  ReadingQuestionData,
  ComprehensionContent,
} from "@/services/getReadingData";

export default function Comprehension() {
  // const {
  //   routes: routesParam,
  //   current,
  //   data: dataParams,
  // } = useLocalSearchParams();
  // const routes = JSON.parse(routesParam as string);
  // const data: ReadingQuestionData = JSON.parse(dataParams as string);
  // const compData: ComprehensionContent = JSON.parse(dataParams as string);

  return (
    <View className="bg-darkBrown w-full h-full py-16 px-10">
      <LeftStripe rotate light />
      <RightStripe rotate light />
      <Cross link="/(tabs)/tests" />
      <Text className="text-lightBrown font-odRegular text-lg">
        Choose the right option, based on the last passage
      </Text>
      <Text className="text-lightBrown font-odRegular my-7">
        What does the cat like to do?
      </Text>
      <View className="flex">
        <OpacityBox text="To sleep" option />
        <OpacityBox text="To eat" option />
        <OpacityBox text="To play" option />
        <OpacityBox text="To run" option />
      </View>
      <Submit link="/(tabs)/tests" />
    </View>
  );
}
