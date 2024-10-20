import { View, Text } from "react-native";

//components
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";
import Cross from "@/components/Cross";
import Audio from "@/components/Audio";
import CameraComponent from "@/components/Camera";
import Submit from "@/components/Submit";

export default function ListenAndWrite() {
  return (
    <View className="h-full w-full bg-darkBrown py-16 px-10 relative">
      <LeftStripe rotate light />
      <RightStripe rotate light />
      <Cross link="/(tabs)/tests" />
      <Text className="text-lightBrown font-odRegular text-lg mb-24">
        Listen to the audio carefully and write it on a notebook
      </Text>
      <Audio filePath="sample.mp3" />
      <View className="mt-12 relative">
        <CameraComponent />
      </View>
      <Submit link="/writing/AboutImage" />
    </View>
  );
}
