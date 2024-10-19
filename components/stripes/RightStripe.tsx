import { View, Text } from "react-native";
import React from "react";

interface StripeProps {
  rotate: boolean;
  light?: boolean;
}

export default function RightStripe(props: StripeProps) {
  const { rotate, light } = props;
  return (
    <View
      className={`bg-mediumLightBrown/30 w-[800] h-36 absolute -left-10 ${
        rotate ? "rotate-[15deg] bottom-52" : "-rotate-[15deg] bottom-72"
      } ${light ? "bg-mediumLightBrown/10" : "bg-mediumLightBrown/30"}`}
    />
  );
}
