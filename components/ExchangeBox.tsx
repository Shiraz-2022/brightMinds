import { View, Text, Image } from "react-native";

//constants
import { imagePath } from "@/constants/ImagePath";

export default function ExchangeBox() {
  return (
    <View className="justify-center border border-lightBrown py-7 px-10 rounded-lg flex items-center mb-7 ">
      <Image source={imagePath.calender} className="w-14 h-14" />
      <View className="flex flex-row items-center items mt-5">
        <Image source={imagePath.coin} className="w-7 h-7" />
        <Text className="text-lg text-lightBrown font-odRegular">2</Text>
      </View>
    </View>
  );
}
