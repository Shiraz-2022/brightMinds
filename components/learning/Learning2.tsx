import { View, Text, Image, Pressable } from "react-native";

//constants
import { imagePath } from "@/constants/ImagePath";
import { router } from "expo-router";

export default function Learning2() {
  return (
    <View className="my-20">
      <View className="flex flex-row">
        <Image source={imagePath.girlRight} className="my-auto ml-5" />
        <View className="">
          <Pressable onPress={() => router.navigate("/reading/outLoud")}>
            <Image
              source={imagePath.starStep}
              className="ml-2 w-20 h-20 mb-5"
            />
          </Pressable>
          <Pressable onPress={() => router.navigate("/writing/ListenAndWrite")}>
            <Image
              source={imagePath.starStep}
              className="ml-14 w-20 h-20 mb-5"
            />
          </Pressable>
          <Pressable>
            <Image source={imagePath.castle} className="ml-20 w-24 h-24 mb-5" />
          </Pressable>
          <Pressable onPress={() => router.navigate("/image/IdentifyImage")}>
            <Image
              source={imagePath.starStep}
              className="ml-14 w-20 h-20 mb-5"
            />
          </Pressable>
          <Pressable onPress={() => router.navigate("/reading/outLoud")}>
            <Image source={imagePath.starStep} className="ml-2 w-20 h-20" />
          </Pressable>
        </View>
      </View>
      <View className="mx-5 flex flex-row justify-between items-center mt-20">
        <View className="w-12 h-0.5 bg-lightBrown" />
        <Text className="text-lightBrown font-odRegular">Keep Going</Text>
        <View className="w-12 h-0.5 bg-lightBrown" />
      </View>
    </View>
  );
}
