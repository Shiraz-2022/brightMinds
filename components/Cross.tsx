import { Pressable, Image } from "react-native";
import { Link, Href } from "expo-router";

//comstants
import { imagePath } from "@/constants/ImagePath";

interface CrossProps {
  link: Href<string | object>;
}

export default function Cross(props: CrossProps) {
  const { link } = props;
  return (
    <Link href={link} asChild>
      <Pressable>
        <Image source={imagePath.cross} className="w-10 h-10 mb-10" />
      </Pressable>
    </Link>
  );
}
