import { imagePath } from "@/constants/ImagePath";
import { View, Image, Modal } from "react-native";

interface LoaderProps {
  light?: boolean;
}

export default function Loader(props: LoaderProps) {
  const { light } = props;
  return (
    <Modal animationType="fade" transparent>
      <View className="m-auto bg-darkBrown/40">
        <Image
          source={light ? imagePath.loadingLight : imagePath.loadingDark}
          className="m-auto w-14 h-14"
        />
      </View>
    </Modal>
  );
}
