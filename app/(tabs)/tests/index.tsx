import { View, Text } from "react-native";
import React from "react";
import WideTwoButton from "@/components/buttons/WideTwoButton";
import { imagePath } from "@/constants/ImagePath";
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";

export default function index() {
  return (
    <View className="bg-darkBrown w-full h-full py-16 px-10">
      <LeftStripe rotate light />
      <RightStripe rotate light />
      <View className="my-auto">
        <View className="mb-5">
          <WideTwoButton
            link="/reading/outLoud"
            text="Reading"
            image={imagePath.reading}
            bgColor
            textColor
          />
        </View>
        <View className="mb-5">
          <WideTwoButton
            link="/"
            text="Writing"
            image={imagePath.writing}
            bgColor
            textColor
          />
        </View>
        <View className="mb-5">
          <WideTwoButton
            link="/"
            text="Image"
            image={imagePath.picture}
            bgColor
            textColor
          />
        </View>
      </View>
    </View>
  );
}
