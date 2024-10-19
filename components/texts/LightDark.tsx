import { View, Text } from "react-native";
import { Href, Link } from "expo-router";

interface LightDarkProps {
  text1: string;
  text2: string;
  link: Href<string | object>;
}

export default function LightDark(props: LightDarkProps) {
  const { text1, text2, link } = props;
  return (
    <View className="flex flex-row justify-center items-center">
      <Text className="text-darkBrown font-odRegular">{text1} </Text>
      <Link href={link} className="text-darkBrown font-odRegular text-lg">
        {text2}
      </Link>
    </View>
  );
}
