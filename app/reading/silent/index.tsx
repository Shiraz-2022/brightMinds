import { View, Text, Image, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { useLocalSearchParams } from "expo-router";

//components
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";
import Mic from "@/components/Mic";
import Submit from "@/components/Submit";
import TextBox from "@/components/texts/TextBox";
import Cross from "@/components/Cross";

//state
import { selectMic } from "@/redux/slices/micSlice";

//constants
import {
  ReadingQuestionData,
  ComprehensionContent,
} from "@/services/getReadingData";

export default function OutLoud() {
  const {
    routes: routesParam,
    current,
    data: dataParam,
  } = useLocalSearchParams();
  const routes = JSON.parse(routesParam as string);
  const data: ReadingQuestionData = JSON.parse(dataParam as string);

  console.log(data);

  const compData: ComprehensionContent =
    data.questions[Number(current)].content;

  return (
    <View className="bg-darkBrown h-full w-full py-16 px-10">
      <Cross link="/(tabs)/tests" />
      <LeftStripe rotate light />
      <RightStripe rotate light />
      <Text className="text-lightBrown text-lg font-odBold mb-10">
        {compData.question}
      </Text>
      <TextBox text={compData.text} />
      <Submit
        routes={routes}
        current={Number(current)}
        hidden
        link="/reading/comprehension"
        data={data}
      />
    </View>
  );
}
