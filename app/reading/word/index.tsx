import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

//components
import OpacityBox from "@/components/OpacityBox";
import Mic from "@/components/Mic";
import Submit from "@/components/Submit";
import Cross from "@/components/Cross";

//constants
import {
  SingleLetterContent,
  ReadingQuestionData,
} from "@/services/getReadingData";

export default function index() {
  const {
    routes: routesParam,
    current,
    data: dataParam,
  } = useLocalSearchParams();
  const routes = JSON.parse(routesParam as string);
  const data: ReadingQuestionData = JSON.parse(dataParam as string);

  const wordData: SingleLetterContent = data.questions[Number(current)].content;

  console.log(wordData);

  return (
    <View className="bg-darkBrown w-full h-full py-16 px-10">
      <Cross link="/(tabs)/tests" />
      <Text className="text-lg text-lightBrown font-odRegular mb-10">
        {wordData.prompt}
      </Text>
      <OpacityBox text={wordData.letter} />
      <View className="mt-20">
        <Mic />
      </View>
      <Submit routes={routes} current={Number(current)} data={data} />
    </View>
  );
}
