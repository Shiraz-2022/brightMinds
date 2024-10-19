import { View, Text, Image, Pressable, Modal } from "react-native";
import { Href, Link, useNavigation } from "expo-router";
import { useState } from "react";

//constants
import { imagePath } from "@/constants/ImagePath";

interface SubmitProps {
  link: Href<string | object>;
  hidden?: boolean;
}

export default function Submit(props: SubmitProps) {
  const { link, hidden } = props;

  const [celebrate, setCelebrate] = useState(false);

  const navigation = useNavigation();

  // const celebrateSubmit = () => {
  //   setCelebrate(true);
  //   setTimeout(() => {
  //     setCelebrate(false);
  //   }, 3000);
  // };

  return (
    <View className="flex flex-row justify-between items-center mt-auto">
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={imagePath.backArrow} className="w-14 h-14" />
      </Pressable>
      {!hidden && (
        <Pressable>
          <Text className="text-darkBrown bg-lightBrown px-7 py-2 rounded-lg font-odRegular">
            submit
          </Text>
        </Pressable>
      )}
      <Link href={link} asChild>
        <Pressable>
          <Image
            source={imagePath.backArrow}
            className="rotate-180 w-14 h-14"
          />
        </Pressable>
      </Link>
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
