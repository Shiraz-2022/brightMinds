import { View, Text, Image, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { Link } from "expo-router";

//components
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";
import Mic from "@/components/Mic";
import Submit from "@/components/Submit";

//constants
import { imagePath } from "@/constants/ImagePath";

//state
import { selectMic } from "@/redux/slices/micSlice";
import TextBox from "@/components/texts/TextBox";
import Cross from "@/components/Cross";

export default function OutLoud() {
  const isMicOn = useSelector(selectMic);

  return (
    <View className="bg-darkBrown h-full w-full py-16 px-10">
      <Cross link="/(tabs)/tests" />
      <LeftStripe rotate light />
      <RightStripe rotate light />
      <Text className="text-lightBrown text-lg font-odBold mb-10">
        Read the passage out loud
      </Text>
      <TextBox
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit
        iaculis lacus, a placerat orci lacinia quis. Integer ac sollicitudin
        risus, at aliquet massa. Curabitur dapibus at tortor et ullamcorper.
        Nulla scelerisque quis magna nec lobortis. Vestibulum magna orci."
        highlight={["hey", "Vestibulum", "Lorem"]}
      />
      <View className="mx-auto my-10">
        <Mic />
      </View>
      {!isMicOn && <Submit link="reading/silent" />}
    </View>
  );
}
