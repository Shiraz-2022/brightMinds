import { TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import { Link, Href } from "expo-router";

interface WideTwoButtonProps {
  text: string;
  image: number;
  link: Href<string | object>;
  bgColor?: boolean;
  textColor?: boolean;
}

export default function WideTwoButton(props: WideTwoButtonProps) {
  const { text, image, link, bgColor, textColor } = props;

  return (
    <Link
      href={link}
      asChild
      className={`py-4 px-5 rounded-lg flex flex-row justify-between items-center ${
        bgColor ? "bg-lightBrown" : "bg-darkBrown"
      }`}
    >
      <TouchableOpacity activeOpacity={0.8}>
        <Text
          className={`font-odRegular ${
            textColor ? "text-darkBrown" : "text-lightBrown"
          }`}
        >
          {text}
        </Text>

        <Image source={image} className="w-7 h-7" />
      </TouchableOpacity>
    </Link>
  );
}
