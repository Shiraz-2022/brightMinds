import { View, Text, Image } from "react-native";
import React from "react";

//constants
import { imagePath } from "@/constants/ImagePath";

export default function TopBar() {
  return (
    <View className="flex flex-row justify-between items-center px-10 pt-16 pb-3">
      <Image source={imagePath.calender} className="w-7 h-7" />
      <View className="flex flex-row items-center">
        <Image source={imagePath.coin} className="w-7 h-7 mr-1" />
        <Text className="text-white">10</Text>
      </View>
    </View>
  );
}
