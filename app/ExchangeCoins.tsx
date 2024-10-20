import ExchangeBox from "@/components/ExchangeBox";
import { View, Text, ScrollView } from "react-native";

export default function ExchangeCoins() {
  return (
    <ScrollView className="bg-darkBrown h-full w-full py-16 px-10">
      <Text className="text-center text-lightBrown font-odRegular text-lg mb-10">
        Exchange the coins for goodies
      </Text>
      <View className="flex flex-row justify-between mb-7">
        <ExchangeBox />
        <ExchangeBox />
      </View>
      <View className="flex flex-row justify-between mb-7">
        <ExchangeBox />
        <ExchangeBox />
      </View>
      <View className="flex flex-row justify-between mb-7">
        <ExchangeBox />
        <ExchangeBox />
      </View>
      <View className="flex flex-row justify-between mb-32">
        <ExchangeBox />
        <ExchangeBox />
      </View>
    </ScrollView>
  );
}
