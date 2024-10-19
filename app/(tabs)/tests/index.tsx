import { View, Text } from "react-native";
import { useState } from "react";
import { Href, router } from "expo-router";

//constants
import { imagePath } from "@/constants/ImagePath";

//services
import { getReadingData } from "@/services/getReadingData";

//components
import WideTwoButton from "@/components/buttons/WideTwoButton";
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";
import Loader from "@/components/Loader";

export default function index() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getReadingDataCp = async (link: Href<string | object>) => {
    setIsLoading(true);
    try {
      const data = await getReadingData();
      console.log("reading data", data);

      if (data) {
        router.navigate("/reading/outLoud");
      }
    } catch (error) {
      console.log("error", error);
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
            link="/reading/outLoud"
            text="Reading"
            image={imagePath.reading}
            bgColor
            textColor
            press
            apiFunction={(link) => getReadingDataCp(link)}
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
