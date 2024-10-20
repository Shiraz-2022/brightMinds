import { imagePath } from "./ImagePath";
import { Href } from "expo-router";

export const tests = [
  {
    text: "Reading",
    icon: imagePath.reading,
    link: "/reading/OutLoud" as Href<string | object>,
  },
  {
    text: "Writing",
    icon: imagePath.writing,
    link: "/writing/AboutImage" as Href<string | object>,
  },
  {
    text: "Image",
    icon: imagePath.picture,
    link: "/parent" as Href<string | object>,
  },
];

export const isFirstTimeUser = false;

export const newUserFlow = [
  {
    message: "You can test for dyslexia here",
    position: {
      top: "75%",
      left: "40%",
    },
    left: false,
  },
  {
    message: "You can improve dyslexia here",
    position: {
      top: "75%",
      left: "10%",
    },
    left: false,
  },
  {
    message: "You can view your account here",
    position: {
      top: "75%",
      left: "5%",
    },
    left: true,
  },
  {
    message: "Press and hold on any text to here it out loud",
    position: {
      top: "20%",
      left: "15%",
    },
    left: true,
  },
];
