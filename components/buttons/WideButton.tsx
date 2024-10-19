import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Href, Link } from "expo-router";

interface WideButtonProps {
  text: string;
  link: Href<string | object>;
  bgColor?: string;
  textColor?: string;
}

export default function WideButton(props: WideButtonProps) {
  const { text, link, bgColor, textColor } = props;
  return (
    <Link
      href={link}
      className={`py-4 px-5 rounded-lg bg-${bgColor ? bgColor : "darkBrown"} `}
      asChild
    >
      <TouchableOpacity activeOpacity={0.8}>
        <Text
          className={`mx-auto font-odRegular text-${
            textColor ? textColor : "lightBrown"
          }`}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </Link>
  );
}
