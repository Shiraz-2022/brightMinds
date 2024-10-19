import { View, Image, ScrollView, Text } from "react-native";
import React from "react";

//constants

//components
// import TopBar from "@/components/TopBar";
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";
import Learning1 from "@/components/learning/Learning1";
import Learning2 from "@/components/learning/Learning2";

export default function index() {
  return (
    <View className="bg-darkBrown w-full h-full">
      <LeftStripe rotate light />
      <RightStripe rotate light />
      {/* <TopBar /> */}
      <ScrollView>
        <Learning1 />
        <Learning2 />
      </ScrollView>
    </View>
  );
}
