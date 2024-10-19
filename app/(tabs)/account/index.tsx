import { View, Text, Image, Pressable, TextInput } from "react-native";
import React, { useState } from "react";

//constants
import { imagePath } from "@/constants/ImagePath";
import LeftStripe from "@/components/stripes/LeftStripe";
import RightStripe from "@/components/stripes/RightStripe";

export default function index() {
  const [edit, setEdit] = useState(false);

  return (
    <View className="py-16 bg-darkBrown h-full w-full">
      <LeftStripe rotate light />
      <RightStripe rotate light />
      <View className="rounded-full mx-auto bg-lightBrown p-12 mb-10">
        <Image source={imagePath.addImage} className="w-16 h-16" />
      </View>
      <View className="mx-10 mb-10">
        <View className="flex flex-row justify-between items-center">
          <TextInput
            className="text-lg font-odBold text-lightBrown mb-5"
            editable={edit}
            maxLength={20}
            inputMode="text"
          >
            Shiraz
          </TextInput>
          <Pressable
            onPress={() => setEdit(!edit)}
            className={`${edit && "bg-lightBrown/20 p-3 rounded-full"}`}
          >
            <Image
              source={imagePath.edit}
              className={`w-7 h-7 ${edit && "w-6 h-6"}`}
            />
          </Pressable>
        </View>
        <Text className="font-odRegular text-lightBrown">
          Joining date - 05/10/2024{" "}
        </Text>
        <View className="flex flex-row">
          <Text className="font-odRegular text-lightBrown">Email - </Text>
          <TextInput
            className="font-odRegular text-lightBrown w-full"
            editable={edit}
            maxLength={20}
            inputMode="email"
          />
        </View>
        <View className="flex flex-row">
          <Text className="font-odRegular text-lightBrown">
            Parent Email -{" "}
          </Text>
          <TextInput
            className="font-odRegular text-lightBrown w-full"
            editable={edit}
            maxLength={20}
            inputMode="email"
          />
        </View>
      </View>
      <View className="ml-10 mb-10">
        <Text className="text-lg font-odBold text-lightBrown mb-5">
          Statistics
        </Text>
        <View className="flex flex-row items-center">
          <View className="mr-10 border border-lightBrown rounded-lg py-2 px-3 flex items-center bg-lightBrown/10">
            <View className="flex flex-row items-center">
              <Image source={imagePath.fire} className="w-5 h-5" />
              <Text className="text-lightBrown font-odRegular">2</Text>
            </View>
            <Text className="text-lightBrown font-odRegular ">Day streak</Text>
          </View>
          <View className="border border-lightBrown rounded-lg py-2 px-3 flex items-center bg-lightBrown/10">
            <View className="flex flex-row items-center">
              <Image source={imagePath.coin} className="w-5 h-5" />
              <Text className="text-lightBrown font-odRegular">2</Text>
            </View>
            <Text className="text-lightBrown font-odRegular">Total coins</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
