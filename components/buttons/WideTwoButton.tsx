import { TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import { Link, Href, router } from "expo-router";
import { getReadingData } from "@/services/getReadingData";

interface WideTwoButtonProps {
  text: string;
  image: number;
  link?: Href<string | object>;
  bgColor?: boolean;
  textColor?: boolean;
  press?: boolean;
  apiFunction?: () => void | undefined;
}

export default function WideTwoButton(props: WideTwoButtonProps) {
  const { text, image, link, bgColor, textColor, apiFunction, press } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        press ? apiFunction && apiFunction() : link && router.navigate(link);
      }}
      className={`py-4 px-5 rounded-lg flex flex-row justify-between items-center ${
        bgColor ? "bg-lightBrown" : "bg-darkBrown"
      }`}
    >
      <Text
        className={`font-odRegular ${
          textColor ? "text-darkBrown" : "text-lightBrown"
        }`}
      >
        {text}
      </Text>

      <Image source={image} className="w-7 h-7" />
    </TouchableOpacity>
  );
}
