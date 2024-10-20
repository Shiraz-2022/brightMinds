import {
  View,
  Text,
  Image,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import React, { useState } from "react";
import { imagePath } from "@/constants/ImagePath";

interface DropdownProps {
  options: string[];
  color: string;
}

export default function Dropdown(props: DropdownProps) {
  const { color, options } = props;

  const [isDropdown, setIsDropdown] = useState(false);
  const [selected, setSelected] = useState(options ? options[0] : "");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsDropdown(false);
  };

  return (
    <View>
      <View
        className={`border border-${[
          color,
        ]} border-solid px-5 py-4 rounded-lg relative`}
      >
        <Pressable
          className="flex flex-row justify-between items-center"
          onPress={() => setIsDropdown(!isDropdown)}
        >
          <Text className={`text-${[color]} text-sm font-odRegular w-11/12`}>
            {selected}
          </Text>
          <Image source={imagePath.expandArrow} className="w-5 h-5" />
        </Pressable>
      </View>
      {isDropdown && (
        <View className="bg-darkBrown rounded-lg relative left-0 top-2 w-full">
          {options.map((option, index) => (
            <Text
              className={`text-sm font-odRegular text-lightBrown p-3 ${
                selected === option && "bg-mediumDarkBrown/20"
              }`}
              onPress={() => handleSelect(option)}
              key={index}
            >
              {option}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}
