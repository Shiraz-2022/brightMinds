import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

// services
import { chatWithBot } from "@/services/chatWithLlm";
import { getSuggestion } from "@/services/getSuggestion";

import { imagePath } from "@/constants/ImagePath";

export default function ChatBot() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  // Fetch initial suggestion on mount
  useEffect(() => {
    const fetchSuggestion = async () => {
      try {
        console.log("starting");
        const suggestion = await getSuggestion();
        console.log(suggestion);
        if (suggestion) {
          setMessages([{ sender: "bot", text: suggestion.tips }]); // Add initial suggestion
        }
      } catch (error) {
        console.log("Error fetching suggestion:", error);
      }
    };
    fetchSuggestion();
  }, []);
  // Handle sending new messages
  const sendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: "user", text: input.trim() }];
      setMessages(newMessages); // Update local state with user input
      setInput("");

      try {
        const botResponse = await chatWithBot({
          messageHistory: newMessages,
          userMessage: input.trim(),
        });
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: botResponse.botReply },
        ]);
      } catch (error) {
        console.log("Error sending message:", error);
      }
    }
  };

  return (
    <View className="h-full w-full bg-darkBrown py-16 px-10">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            className={`w-4/5 p-3 mb-4 rounded-lg ${
              message.sender === "bot"
                ? "bg-lightBrown mr-auto"
                : "bg-lightBrown/25 ml-auto"
            }`}
          >
            <Text
              className={
                message.sender === "bot" ? "text-darkBrown" : "text-lightBrown"
              }
            >
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Input Section */}
      <View className="flex flex-row justify-between items-center rounded-full w-full bg-lightBrown/25 py-3 px-5 h-auto max-h-40">
        <TextInput
          placeholder="Enter prompt here"
          placeholderTextColor="#FEE9D4"
          className="w-4/5 text-lightBrown"
          value={input}
          onChangeText={setInput}
          multiline
        />
        <TouchableOpacity onPress={sendMessage}>
          <Image source={imagePath.sent} className="w-7 h-7" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
