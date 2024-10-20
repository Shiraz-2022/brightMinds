import { View, Text } from "react-native";

//components
import Cross from "@/components/Cross";
import ImageBox from "@/components/ImageBox";
import Camera from "@/components/Camera";
import Submit from "@/components/Submit";
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";

//constants
import { imagePath } from "@/constants/ImagePath";

export default function AboutImage() {
  return (
    <View className="bg-darkBrown h-full w-full px-10 py-16">
      <LeftStripe rotate light />
      <RightStripe rotate light />
      <Cross link="/(tabs)/tests" />
      <Text className="text-lightBrown font-odRegular text-lg mb-10">
        Write 3-4 sentances about the below image
      </Text>
      <ImageBox
        height={240}
        width={window.innerWidth}
        image={imagePath.parentAndChild}
      />
      <View className="mt-12">
        <Camera />
      </View>
      <Submit link="/writing/ListenAndWrite" />
    </View>
  );
}
