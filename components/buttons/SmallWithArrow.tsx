import { TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import { Link, Href } from "expo-router";

//comstants
import { imagePath } from "@/constants/ImagePath";

interface SmallWithArrowProps {
  link: Href<string | object>;
  text: string;
}

export default function SmallWithArrow(props: SmallWithArrowProps) {
  const { link, text } = props;
  return (
    <Link href={link} asChild>
      <TouchableOpacity
        activeOpacity={0.8}
        className="bg-darkBrown w-52 rounded-lg py-3 px-5 flex flex-row justify-between items-center"
      >
        <Text className="text-lg text-lightBrown font-odRegular">{text}</Text>

        <Image source={imagePath.rightLongArrow} />
      </TouchableOpacity>
    </Link>
  );
}
