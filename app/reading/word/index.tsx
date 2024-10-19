import { View, Text } from "react-native";

//components
import OpacityBox from "@/components/OpacityBox";
import Mic from "@/components/Mic";
import Submit from "@/components/Submit";
import Cross from "@/components/Cross";

export default function index() {
  return (
    <View className="bg-darkBrown w-full h-full py-16 px-10">
      <Cross link="/(tabs)/tests" />
      <Text className="text-lg text-lightBrown font-odRegular mb-10">
        Read the word out loud
      </Text>
      <OpacityBox text="word" />
      <View className="mt-20">
        <Mic />
      </View>
      <Submit link="/" />
    </View>
  );
}
