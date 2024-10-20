import * as Speech from "expo-speech";

export const textToSpeech = (text: string) => {
  Speech.speak(text);
};
