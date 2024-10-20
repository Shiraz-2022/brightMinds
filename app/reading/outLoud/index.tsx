import { View, Text, Image, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { useLocalSearchParams } from "expo-router";

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

//services
import {
  ReadingQuestionData,
  ParagraphPronunciationContent,
} from "@/services/getReadingData";

export default function OutLoud() {
  const isMicOn = useSelector(selectMic);
  // const {
  //   routes: routesParam,
  //   current,
  //   data: dataParam,
  // } = useLocalSearchParams();
  // const routes = JSON.parse(routesParam as string);
  // const data: ReadingQuestionData = JSON.parse(dataParam as string);

  // const paraData: ParagraphPronunciationContent =
  //   data.questions[Number(current)].content;

  return (
    <View className="bg-darkBrown h-full w-full py-16 px-10">
      <Cross link="/(tabs)/tests" />
      <LeftStripe rotate light />
      <RightStripe rotate light />
      <Text className="text-lightBrown text-lg font-odBold mb-10">
        Read the passage out loud
      </Text>
      <TextBox
        text=" The cat is black and it is running fast. The kid ran behind the cat and
        fell down on his knee."
        highlight={["hey", "Vestibulum", "Lorem"]}
      />
      <View className="mx-auto my-10">
        <Mic />
      </View>
      {!isMicOn && (
        // <Submit routes={routes} current={Number(current)} data={data} />
        <Submit link="/reading/silent" />
      )}
    </View>
  );
}
