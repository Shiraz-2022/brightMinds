import { View, Text, Image, Pressable, Modal } from "react-native";

//constants
import { imagePath } from "@/constants/ImagePath";
import { router } from "expo-router";

//components
import Calender from "./Calender";
import { useState } from "react";

export default function TopBar() {
  const [calender, setCalender] = useState<boolean>(false);

  return (
    <View className="flex flex-row justify-between items-center px-10 pt-16 pb-3">
      <Pressable onPress={() => setCalender(!calender)}>
        <Image source={imagePath.calender} className="w-7 h-7" />
      </Pressable>
      <Pressable
        className="flex flex-row items-center"
        onPress={() => router.navigate("/game")}
      >
        <Image source={imagePath.coin} className="w-7 h-7 mr-1" />
        <Text className="text-white">10</Text>
      </Pressable>
      {calender && (
        <Modal transparent>
          <Pressable
            className="bg-darkBrown/75 w-full h-full px-10 justify-center"
            onPress={() => setCalender(!calender)}
          >
            <Calender />
          </Pressable>
        </Modal>
      )}
    </View>
  );
}
