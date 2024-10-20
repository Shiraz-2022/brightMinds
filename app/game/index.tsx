import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Animated,
  Easing,
  Dimensions,
  Pressable,
} from "react-native";
import { useNavigation } from "expo-router";

import { imagePath } from "@/constants/ImagePath";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

interface Coin {
  id: number;
  translateY: Animated.Value;
  xPosition: number;
}

export default function Index() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const coinCounter = useRef(0);
  const [collectedCoins, setCollectedCoins] = useState(0);

  const navigation = useNavigation();

  const generateRandomX = () => Math.floor(Math.random() * (SCREEN_WIDTH - 50));

  const addCoin = () => {
    const newCoin: Coin = {
      id: coinCounter.current++,
      translateY: new Animated.Value(0),
      xPosition: generateRandomX(),
    };
    setCoins((prev) => [...prev, newCoin]);
    animateCoin(newCoin);
  };

  const animateCoin = (coin: Coin) => {
    Animated.timing(coin.translateY, {
      toValue: SCREEN_HEIGHT,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setCoins((prev) => prev.filter((c) => c.id !== coin.id));
    });
  };

  const catchCoin = (coinId: number) => {
    setCoins((prev) => prev.filter((c) => c.id != coinId));
    setCollectedCoins((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(addCoin, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <View className="relative">
      <ImageBackground source={imagePath.gameBG} className="w-full h-full">
        <View className="flex flex-row justify-between items-center pt-16 px-10 pb-7 bg-black/10 relative z-20">
          <View className="flex flex-row">
            <Image source={imagePath.back} className="w-7 h-7" />
            <Pressable
              className="flex flex-row items-center"
              onPress={() => navigation.goBack()}
            >
              <Text className="text-lightBrown font-odRegular relative">
                Exit
              </Text>
            </Pressable>
          </View>
          <View className="flex flex-row items-center">
            <Image source={imagePath.coin} />
            <Text className="text-lightBrown font-odRegular">
              {collectedCoins}
            </Text>
          </View>
        </View>
        {coins.map((coin) => (
          <Animated.View
            className="absolute z-20"
            style={[
              {
                transform: [{ translateY: coin.translateY }],
                left: coin.xPosition,
              },
            ]}
            key={coin.id}
          >
            <Pressable onPress={() => catchCoin(coin.id)}>
              <Image source={imagePath.coin} className="w-24 h-24" />
            </Pressable>
          </Animated.View>
        ))}
      </ImageBackground>
      <View className="absolute w-full h-full bg-darkBrown/25 left-0 top-0 z-10" />
    </View>
  );
}
