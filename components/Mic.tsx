import { View, Image, Pressable, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Audio } from "expo-av";
import { useState } from "react";
import { Recording } from "expo-av/build/Audio";
import RNFS from "react-native-fs";

//state
import { selectMic, toggleMic, selectTime } from "@/redux/slices/micSlice";
import { startTimer } from "@/redux/slices/micSlice";
import { AppDispatch } from "@/redux/store";

//components
import AudioBox from "./Audio";

//constants
import { imagePath } from "@/constants/ImagePath";

export default function Mic() {
  const isMicOn = useSelector(selectMic);
  const time = useSelector(selectTime);
  const timeInHH = new Date(time * 1000).toISOString().substring(11, 19);
  const [recording, setRecording] = useState<Recording | undefined>();
  const [recordingUri, setRecordingUri] = useState<string | null | undefined>(
    null
  );
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  const dispatch: AppDispatch = useDispatch();

  const handleMicOn = () => {
    dispatch(toggleMic());
    dispatch(startTimer());
    startRecording();
  };

  const handleMicOff = () => {
    dispatch(toggleMic());
    stopRecording();
    // storeRecording();
  };

  if (!permissionResponse) {
    return <View />;
  }

  const startRecording = async () => {
    try {
      if (permissionResponse?.status !== "granted") {
        console.log("Requesting permission..");
        await requestPermission();
      }
      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };

  const stopRecording = async () => {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording?.stopAndUnloadAsync();
    const uri = recording?.getURI();
    setRecordingUri(uri);
    console.log("Recording stopped and stored at", uri);
  };

  // const storeRecording = async () => {
  //   if (recordingUri) {
  //     try {
  //       const fileName = `recording_${Date.now()}.mp3`;
  //       const newPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

  //       await RNFS.moveFile(recordingUri!, newPath);
  //       console.log("Recording saved at:", newPath);
  //     } catch (err) {
  //       console.error("Error saving recording:", err);
  //     }
  //   }
  // };

  return (
    <View className="mx-auto">
      <Pressable
        onPressIn={handleMicOn}
        onPressOut={handleMicOff}
        className={`${isMicOn && "p-3 bg-lightBrown/20 rounded-full"}`}
      >
        <View
          className={`bg-lightBrown/20 rounded-full p-3 shadow-lg shadow-white mx-auto relative ${
            isMicOn && "bg-lightBrown"
          }`}
        >
          <Image source={imagePath.mic} />
        </View>
      </Pressable>
      {isMicOn && (
        <View>
          <Text className="mx-auto text-lightBrown text-lg mt-5 font-bold">
            {timeInHH}
          </Text>
        </View>
      )}
      {recordingUri && (
        <View className="mt-5" key={recordingUri}>
          <AudioBox filePath={recordingUri} row internal />
        </View>
      )}
    </View>
  );
}
