import { url } from "@/constants/url";

export const chatWithBot = async (data) => {
  try {
    const response = await fetch(url.get.suggestion, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error in chatWithBot:", error);
    throw error;
  }
};
