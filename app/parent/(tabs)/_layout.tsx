import { Tabs } from "expo-router";
import { Image, View } from "react-native";

//constants
import { imagePath } from "@/constants/ImagePath";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#693C27",
          height: 60,
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 5,
        },
      }}
    >
      <Tabs.Screen
        name="overview/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`${
                focused &&
                "border border-lightBrown border-solid p-3 my-2 rounded-lg bg-lightBrown/5"
              }`}
            >
              <Image source={imagePath.home2} className="w-7 h-7 my-auto" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="progress/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`${
                focused &&
                "border border-lightBrown border-solid p-3 my-2 rounded-lg bg-lightBrown/5"
              }`}
            >
              <Image source={imagePath.progress2} className="w-7 h-7 my-auto" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chat/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`${
                focused &&
                "border border-lightBrown border-solid p-3 my-2 rounded-lg bg-lightBrown/5"
              }`}
            >
              <Image source={imagePath.chat2} className="w-7 h-7 my-auto" />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
