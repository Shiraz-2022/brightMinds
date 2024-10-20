import { Text, View, Image } from "react-native";

//constants
import { imagePath } from "@/constants/ImagePath";

//components
import SmallWithArrow from "@/components/buttons/SmallWithArrow";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="bg-lightBrown h-full w-full flex justify-center">
      <Image source={imagePath.parentAndChild} className="w-full h-1/2 mt-16" />
      <Text className="text-darkBrown text-xl font-odBold mt-10 ml-5">
        Welcome to Bright Minds
      </Text>
      <Text className="text-darkBrown text-base font-odRegular mt-5 ml-5">
        Let's go further - together. We are here to help your child in their
        journey.
      </Text>
      <View className="ml-5 mt-5">
        <SmallWithArrow link="/(auth)/login" text="Let's go" />
      </View>
    </View>
  );
}
