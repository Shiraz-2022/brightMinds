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
        name="account/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`${
                focused &&
                "border border-lightBrown border-solid p-3 my-2 rounded-lg bg-lightBrown/5"
              }`}
            >
              <Image source={imagePath.account} className="w-7 h-7 my-auto" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="learning/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`${
                focused &&
                "border border-lightBrown border-solid p-3 my-2 rounded-lg bg-lightBrown/5"
              }`}
            >
              <Image source={imagePath.home} className="w-7 h-7 my-auto" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="tests/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`${
                focused &&
                "border border-lightBrown border-solid p-3 my-2 rounded-lg bg-lightBrown/5"
              }`}
            >
              <Image
                source={imagePath.testPassed3d}
                className="w-7 h-7 my-auto"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
