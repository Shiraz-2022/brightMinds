// constants
import { url } from "@/constants/url";

// Interface for feedback on answers
export interface Feedback {
  correct: string;
  incorrect: string;
}

// Interface for content of single letter question
export interface SingleLetterContent {
  letter: string;
  prompt: string;
  correct_answer: string;
  feedback: Feedback;
}

// Interface for content of paragraph pronunciation question
export interface ParagraphPronunciationContent {
  paragraph: string;
  prompt: string;
  correct_answer: string;
  feedback: Feedback;
}

// Interface for comprehension question options
export interface ComprehensionOptions {
  options: string[];
  correct_answer: string;
}

// Interface for accommodations
export interface Accommodations {
  text_display: string;
  background_color: string;
  word_spacing: string;
}

// Interface for content of comprehension question
export interface ComprehensionContent {
  text: string;
  font_size: string;
  line_spacing: string;
  question: string;
  word_count: number;
  readability_score: string;
  feedback: Feedback;
  accommodations: Accommodations;
  options: string[];
}

// Interface for each question
export interface ReadingQuestion {
  type: "single_letter" | "paragraph_pronunciation" | "comprehension";
  content:
    | SingleLetterContent
    | ParagraphPronunciationContent
    | ComprehensionContent;
}

export interface ReadingQuestionData {
  questions: ReadingQuestion[];
}

export const getReadingData = async (): Promise<
  ReadingQuestionData | undefined
> => {
  try {
    const res = await fetch(url.get.reading, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.log(`Error ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("Reading data:", data);

    return data;
  } catch (error) {
    console.error("Error getting reading data:", error);
  }
};
