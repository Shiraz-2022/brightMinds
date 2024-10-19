import { View, Text } from "react-native";
import { useState } from "react";
import { Href, router } from "expo-router";

//constants
import { imagePath } from "@/constants/ImagePath";

//services
import {
  getReadingData,
  ReadingQuestion,
  ReadingQuestionData,
} from "@/services/getReadingData";

//components
import WideTwoButton from "@/components/buttons/WideTwoButton";
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";
import Loader from "@/components/Loader";
import { mapTypeToRoute } from "@/constants/mapTypeToRoute";

export default function index() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getReadingDataCp = async () => {
    setIsLoading(true);
    try {
      const data: ReadingQuestionData | undefined = await getReadingData();
      if (!data) return;

      const newRoutes =
        data &&
        data.questions.reduce((acc: string[], item: ReadingQuestion) => {
          if (item && item.type in mapTypeToRoute) {
            acc.push(mapTypeToRoute[item.type]);
          }
          return acc;
        }, []);

      router.navigate({
        pathname: newRoutes[0] as Href<string | object>,
        params: {
          routes: JSON.stringify(newRoutes),
          current: Number(0),
          data: JSON.stringify(data),
        },
      });
    } catch (error) {
      console.error("Error fetching reading data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="bg-darkBrown w-full h-full py-16 px-10">
      {isLoading && <Loader light />}
      <LeftStripe rotate light />
      <RightStripe rotate light />
      <View className="my-auto">
        <View className="mb-5">
          <WideTwoButton
            // link="/reading/outLoud"
            text="Reading"
            image={imagePath.reading}
            bgColor
            textColor
            press
            apiFunction={getReadingDataCp}
          />
        </View>
        <View className="mb-5">
          <WideTwoButton
            link="/"
            text="Writing"
            image={imagePath.writing}
            bgColor
            textColor
          />
        </View>
        <View className="mb-5">
          <WideTwoButton
            link="/"
            text="Image"
            image={imagePath.picture}
            bgColor
            textColor
          />
        </View>
      </View>
    </View>
  );
}
