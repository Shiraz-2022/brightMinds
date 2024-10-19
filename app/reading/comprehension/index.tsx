import { View, Text } from "react-native";

//components
import OpacityBox from "@/components/OpacityBox";
import Submit from "@/components/Submit";

export default function index() {
  return (
    <View className="h-full w-full bg-darkBrown py-16 px-10">
      <Text className="text-lightBrown font-odRegular text-lg">
        Choose the right option based on the last passage
      </Text>
      <Text className="text-lightBrown font-odRegular mt-10 text-base">
        Lorem ipsum dolor sit amet,adipiscing elit psum dolor sit.
      </Text>
      <View className="mt-10">
        <OpacityBox text="Option" />
        <OpacityBox text="Option" />
        <OpacityBox text="Option" />
        <OpacityBox text="Option" />
      </View>
      <Submit link="reading/word" />
    </View>
  );
}
