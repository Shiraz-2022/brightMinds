import { View, Text, Image, Pressable, Modal } from "react-native";
import { router, useNavigation, Href } from "expo-router";
import { useState } from "react";

//constants
import { imagePath } from "@/constants/ImagePath";
import { ReadingQuestionData } from "@/services/getReadingData";

interface SubmitProps {
  hidden?: boolean;
  routes?: string[];
  current?: number;
  link?: Href<string | object>;
  data?: ReadingQuestionData;
}

export default function Submit({
  routes,
  current,
  hidden,
  link,
  data,
}: SubmitProps) {
  const [celebrate, setCelebrate] = useState(false);
  const navigation = useNavigation();

  const handleNext = () => {
    if (link) {
      router.push({
        pathname: link,
        params: {
          routes: JSON.stringify(routes),
          current: Number(current),
          data: JSON.stringify(data),
        },
      });
    } else {
      const nextIndex = current + 1;
      if (nextIndex < routes.length) {
        router.push({
          pathname: routes[nextIndex] as Href<string>,
          params: {
            routes: JSON.stringify(routes),
            current: Number(nextIndex),
            data: JSON.stringify(data),
          },
        });
      }
    }
  };

  const handleSubmit = () => {
    setCelebrate(true);
    setTimeout(() => {
      setCelebrate(false);
      link && router.navigate(link);
    }, 3000);
  };

  return (
    <View className="flex flex-row justify-between items-center mt-auto">
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={imagePath.backArrow} className="w-14 h-14" />
      </Pressable>
      {!hidden && (
        <Pressable onPress={handleSubmit}>
          <Text className="text-darkBrown bg-lightBrown px-7 py-2 rounded-lg font-odRegular">
            Submit
          </Text>
        </Pressable>
      )}
      <Pressable onPress={handleNext}>
        <Image source={imagePath.backArrow} className="rotate-180 w-14 h-14" />
      </Pressable>
      {celebrate && (
        <Modal transparent>
          <Image
            className="m-auto w-56 h-60"
            source={imagePath.celebrateAnim}
          />
        </Modal>
      )}
    </View>
  );
}
