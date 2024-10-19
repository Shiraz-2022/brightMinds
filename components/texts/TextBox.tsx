import { View, Text } from "react-native";

interface TextBoxProps {
  text: string;
  highlight?: string[];
}

export default function TextBox(props: TextBoxProps) {
  const { text, highlight = [] } = props;

  // Split the text into words and wrap highlighted words with special styles.
  const renderTextWithHighlights = () => {
    return text.split(" ").map((word, index) => {
      const isHighlighted = highlight.includes(word);

      return (
        <Text
          key={index}
          className={`${isHighlighted ? "text-gold" : "text-lightBrown"}`}
        >
          {word}{" "}
        </Text>
      );
    });
  };

  return (
    <View className="bg-darkBrown rounded-lg shadow-xl shadow-lightBrown">
      <Text className="text-lightBrown font-odRegular text-base mx-4 my-7">
        {renderTextWithHighlights()}
      </Text>
    </View>
  );
}
