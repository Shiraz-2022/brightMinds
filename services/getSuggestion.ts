import { url } from "@/constants/url";

export const getSuggestion = async () => {
  try {
    const res = await fetch(url.get.suggestion, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.log(`Error ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("chat data:", data);

    return data;
  } catch (error) {
    console.error("Error getting suggestion data:", error);
  }
};
