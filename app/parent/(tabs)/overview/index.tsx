import { View, Text } from "react-native";

//constants
import { imagePath } from "@/constants/ImagePath";

//components
import WideTwoButton from "@/components/buttons/WideTwoButton";
import Calender from "@/components/Calender";

export default function index() {
  return (
    <View className="bg-darkBrown w-full h-full py-16 px-10">
      <View>
        <Calender />
      </View>
      <View className="mt-10">
        <WideTwoButton
          text="View child's progress"
          link="/parent/(tabs)/progress"
          image={imagePath.progress3}
          bgColor
          textColor
        />
      </View>
      <View className="mt-10">
        <WideTwoButton
          text="View AI suggestions"
          link="/parent/(tabs)/chat"
          image={imagePath.ai}
          bgColor
          textColor
        />
      </View>
    </View>
  );
}
