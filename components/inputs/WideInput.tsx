import { View, TextInput } from "react-native";
import React from "react";

interface WideInputProps {
  text: string;
  color: string;
}

export default function WideInput(props: WideInputProps) {
  const { text, color } = props;
  return (
    <View
      className={`border border-${[color]} border-solid px-5 py-4 rounded-lg`}
    >
      <TextInput
        placeholder={text}
        className={`text-${[color]} text-sm font-odRegular`}
        placeholderTextColor={color}
      />
    </View>
  );
}
