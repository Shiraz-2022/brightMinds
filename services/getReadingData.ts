// constants
import { url } from "@/constants/url";

export const getReadingData = async () => {
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
