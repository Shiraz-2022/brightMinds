import { Image, Pressable, View, Modal, Text } from "react-native";
import { useRef, useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";

// Constants
import { imagePath } from "@/constants/ImagePath";
import ImageBox from "./ImageBox";

export default function CameraComponent() {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [showCapturedImage, setShowCapturedImage] = useState(false);

  const cameraRef = useRef<CameraView | null>(null);

  const handleCamera = async () => {
    if (!permission?.granted) {
      await requestPermission();
    }
    if (permission?.granted) {
      setIsCameraOn((prev) => !prev);
    }
  };

  if (!permission) {
    return <View />;
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo?.uri || null);
      console.log(photo?.uri || "no pic");
      // setIsCameraOn(false);
    }
  };

  return (
    <View>
      <Pressable
        className="bg-lightBrown/20 rounded-full p-3 shadow-lg shadow-white mx-auto"
        onPress={handleCamera}
      >
        <Image source={imagePath.camera} className="w-10 h-10" />
      </Pressable>
      {capturedImage && (
        <Pressable
          className="mx-auto my-7"
          onPress={() => setShowCapturedImage(true)}
        >
          <ImageBox height={40} width={40} uri imageUri={capturedImage} />
        </Pressable>
      )}

      {isCameraOn && (
        <Modal visible={isCameraOn} animationType="slide">
          <CameraView style={{ flex: 1 }} ref={cameraRef}>
            <View className="absolute bottom-16 left-0 flex flex-row items-center justify-between w-full px-10">
              <Pressable
                className="w-10 h-10 rounded-lg bg-lightBrown"
                onPress={() => setShowCapturedImage(true)}
              >
                <Image
                  source={
                    capturedImage
                      ? { uri: capturedImage }
                      : imagePath.blankWhite
                  }
                  className="w-full h-full rounded-lg"
                />
              </Pressable>
              <Pressable
                className="w-16 h-16 rounded-full bg-lightBrown"
                onPress={takePicture}
              />
              <Pressable
                className="w-10 h-10"
                onPress={() => setIsCameraOn(false)}
              >
                <Image source={imagePath.cross} className="w-full h-full" />
              </Pressable>
            </View>
          </CameraView>
        </Modal>
      )}
      {capturedImage && showCapturedImage && (
        <Modal visible={showCapturedImage} animationType="slide">
          <View className="bg-darkBrown h-full w-full">
            <Pressable
              className="absolute left-0 top-0 z-20 my-16 mx-3"
              onPress={() => setShowCapturedImage(false)}
            >
              <Image source={imagePath.back} className="w-10 h-10" />
            </Pressable>
            <Image
              source={{ uri: capturedImage }}
              className="my-auto w-full h-1/2"
              style={{ resizeMode: "cover" }}
            />
          </View>
        </Modal>
      )}
    </View>
  );
}
