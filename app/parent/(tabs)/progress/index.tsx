import { View, Text } from "react-native";
import React, { useState } from "react";
import WideTwoButton from "@/components/buttons/WideTwoButton";
import { imagePath } from "@/constants/ImagePath";

export default function Index() {
  // State to track which button is selected
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  // Handler function to update the selected button
  const handleButtonPress = (button: string) => {
    console.log("hide");
    setSelectedButton((prev) => (prev === button ? null : button)); // Toggle visibility
  };

  return (
    <View className="h-full w-full bg-darkBrown flex justify-center py-16 px-10">
      {(!selectedButton || selectedButton === "Reading") && (
        <View className="mb-7">
          <WideTwoButton
            text="Reading"
            image={imagePath.reading2}
            bgColor
            textColor
            apiFunction={() => handleButtonPress("Reading")}
            press
          />
        </View>
      )}

      {(!selectedButton || selectedButton === "Writing") && (
        <View className="mb-7">
          <WideTwoButton
            text="Writing"
            image={imagePath.writing2}
            bgColor
            textColor
            apiFunction={() => handleButtonPress("Writing")}
            press
          />
        </View>
      )}

      {(!selectedButton || selectedButton === "Image") && (
        <View>
          <WideTwoButton
            text="Image"
            image={imagePath.picture2}
            bgColor
            textColor
            apiFunction={() => handleButtonPress("Image")}
            press
          />
        </View>
      )}

      <View>
        <Text className="text-lg font-bold text-lightBrown my-7">
          Questions
        </Text>

        <View className="bg-lightBrown p-5 rounded-lg">
          <View className="flex flex-row justify-between mb-5">
            <Text className="text-darkBrown font-normal text-base w-4/5">
              Questions attended
            </Text>
            <Text className="text-darkBrown font-bold text-base">24</Text>
          </View>
          <View className="flex flex-row justify-between mb-5">
            <Text className="text-darkBrown font-normal text-base w-4/5">
              Questions answered perfectly
            </Text>
            <Text className="text-darkBrown font-bold text-base">10</Text>
          </View>
          <View className="flex flex-row justify-between mb-5">
            <Text className="text-darkBrown font-normal text-base w-4/5">
              Questions answered, but not fully correct
            </Text>
            <Text className="text-darkBrown font-bold text-base">5</Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text className="text-darkBrown font-normal text-base w-4/5">
              Question which were answered wrong
            </Text>
            <Text className="text-darkBrown font-bold text-base">4</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
