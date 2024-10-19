import { Text, View, Image } from "react-native";

//constants
import { imagePath } from "@/constants/ImagePath";

//components
import SmallWithArrow from "@/components/buttons/SmallWithArrow";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="bg-lightBrown h-full w-full flex justify-center">
      {/* <Image source={imagePath.parentAndChild} className="w-full h-1/2 mt-16" />
      <Text className="text-darkBrown text-xl font-odBold mt-10 ml-5">
        Lorem ipsum dolor sit amet, consectetur eu lectus
      </Text>
      <Text className="text-darkBrown text-base font-odRegular mt-5 ml-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eu
        lectus sit amet porta.
      </Text>
      <View className="ml-5 mt-5">
        <SmallWithArrow link="/(auth)/login" text="Let's go" />
      </View> */}
      <Link href="/choice" className="text-lg text-black">
        Choice
      </Link>
    </View>
  );
}
