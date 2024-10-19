import { Pressable, Text } from "react-native";
import React, { useState } from "react";

//state
import { useSelector, useDispatch } from "react-redux";
// import { selectOption, toggleOption } from "@/redux/slices/optionSlice";

interface OpacityBoxProps {
  text: string;
  option?: boolean;
}

export default function OpacityBox(props: OpacityBoxProps) {
  const { text, option } = props;

  const [isSelected, setIsSelected] = useState(false);

  const dispatch = useDispatch();
  //   const isOptionSelected = useSelector(selectOption);

  const handleOptionSelect = () => {
    // if (isOptionSelected && !isSelected) {
    //   return;
    // }
    // setIsSelected(!isSelected);
    // // dispatch(toggleOption());
  };

  return (
    <Pressable
      className={`border border-lightBrown  py-4 rounded-lg flex items-center mb-7 ${
        isSelected ? "bg-lightBrown/40" : "bg-lightBrown/5"
      }`}
      onPress={() => {
        option && handleOptionSelect();
      }}
    >
      <Text className="text-lightBrown font-odRegular">{text}</Text>
    </Pressable>
  );
}
