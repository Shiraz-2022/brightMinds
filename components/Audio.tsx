import { View, Image, Pressable } from "react-native";
import Sound from "react-native-sound";
import { useEffect, useRef, useState } from "react";

//constants
import { imagePath } from "@/constants/ImagePath";

interface AudioProps {
  filePath: string;
  row?: boolean;
  internal?: boolean;
}

export default function Audio(props: AudioProps) {
  const { filePath, row, internal } = props;
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  // const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const whoosh = useRef<Sound | null>(null);
  const interval = useRef<number>(0);

  const getCleanFilePath = (path: string) =>
    path.startsWith("file://") ? path.replace("file://", "") : path;

  useEffect(() => {
    Sound.setCategory("Playback");

    const cleanedFilePath = internal ? getCleanFilePath(filePath) : filePath;

    console.log(cleanedFilePath);

    whoosh.current = new Sound(cleanedFilePath, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log("Failed to load the sound", error);
        return;
      }
      setDuration(whoosh.current?.getDuration() || 0);
    });

    console.log("Duration", whoosh.current);

    return () => {
      if (whoosh) whoosh.current?.release();
    };
  }, []);

  const playSound = async () => {
    if (!whoosh) return;

    setIsPlaying(true);

    whoosh.current?.play((success) => {
      if (success) {
        console.log("successfully finished playing");
      } else {
        console.log("playback failed due to audio decoding errors");
      }
      clearInterval(interval.current!);
      setProgress(100);
      setIsPlaying(false);
    });

    interval.current = setInterval(() => {
      whoosh.current?.getCurrentTime((seconds) => {
        if (duration > 0) {
          setProgress(() => Math.floor((seconds / duration) * 100));
        }
      });
    }, 5);
  };

  const pauseSound = () => {
    if (!whoosh) {
      return;
    }
    whoosh.current?.pause();
    setIsPlaying(false);
    console.log(progress);
  };

  const restartSound = () => {
    if (!whoosh) {
      return;
    }
    whoosh.current?.stop(() => {
      whoosh.current?.setCurrentTime(0);
      playSound();
    });
  };

  return (
    <View className={`${row && "flex flex-row justify-between items-center"}`}>
      <View className="flex flex-row items-center justify-between">
        <Pressable
          onPress={isPlaying ? pauseSound : playSound}
          className="w-7 h-7"
        >
          <Image
            source={isPlaying ? imagePath.pause : imagePath.play}
            className="w-full h-full"
          />
        </Pressable>
        {!row && (
          <View className="w-[87%] h-1 relative">
            <View className="w-full h-full bg-lightBrown" />
            <View
              style={{ width: `${progress}%` }}
              className={`h-1 bg-gold absolute left-0 top-0`}
            />
          </View>
        )}
      </View>
      {row && (
        <View className="w-[75%] h-1 relative">
          <View className="w-full h-full bg-lightBrown" />
          <View
            style={{ width: `${progress}%` }}
            className={`h-1 bg-gold absolute left-0 top-0`}
          />
        </View>
      )}
      <Pressable onPress={restartSound}>
        <Image
          source={imagePath.restart}
          className={`w-7 h-7 mx-auto ${!row && "mt-10"}`}
        />
      </Pressable>
    </View>
  );
}
