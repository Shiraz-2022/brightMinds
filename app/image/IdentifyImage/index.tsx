import { View, Text } from "react-native";

//components
import Cross from "@/components/Cross";
import ImageBox from "@/components/ImageBox";
import Camera from "@/components/Camera";
import Submit from "@/components/Submit";
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";
import Mic from "@/components/Mic";

//constants
import { imagePath } from "@/constants/ImagePath";

export default function AboutImage() {
  return (
    <View className="bg-darkBrown h-full w-full px-10 py-16">
      <LeftStripe rotate light />
      <RightStripe rotate light />
      <Cross link="/(tabs)/tests" />
      <Text className="text-lightBrown font-odRegular text-lg mb-10">
        What is this?
      </Text>
      <ImageBox
        height={240}
        width={window.innerWidth}
        image={imagePath.parentAndChild}
      />
      <View className="mt-14">
        <Mic />
      </View>
      <Submit link="/writing/AboutImage" />
    </View>
  );
}
