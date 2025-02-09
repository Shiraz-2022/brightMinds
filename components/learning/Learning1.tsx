import { View, Text, Image, Pressable } from "react-native";

//constants
import { imagePath } from "@/constants/ImagePath";
import { router } from "expo-router";

export default function Learning1() {
  return (
    <View className="my-20">
      <View className="flex flex-row">
        <View>
          <Pressable onPress={() => router.navigate("/")}>
            <Image
              source={imagePath.starStep}
              className="ml-28 w-20 h-20 mb-5"
            />
          </Pressable>
          <Pressable onPress={() => router.navigate("/")}>
            <Image
              source={imagePath.starStep}
              className="ml-16 w-20 h-20 mb-5"
            />
          </Pressable>
          <Pressable onPress={() => router.navigate("/")}>
            <Image source={imagePath.castle} className="ml-10 w-24 h-24 mb-5" />
          </Pressable>
          <Pressable onPress={() => router.navigate("/")}>
            <Image
              source={imagePath.starStep}
              className="ml-16 w-20 h-20 mb-5"
            />
          </Pressable>
          <Pressable onPress={() => router.navigate("/")}>
            <Image source={imagePath.starStep} className="ml-28 w-20 h-20" />
          </Pressable>
        </View>
        <Image source={imagePath.girlLeft} className="my-auto" />
      </View>
      <View className="mx-5 flex flex-row justify-between items-center mt-20">
        <View className="w-12 h-0.5 bg-lightBrown" />
        <Text className="text-lightBrown font-odRegular">Lets' Go</Text>
        <View className="w-12 h-0.5 bg-lightBrown" />
      </View>
    </View>
  );
}
