import API from "./instense";

export const getNews = async () => {
  try {
    const response = await API.get("/content/filters/wrc-all-latest-news?origin=vcms");
    return response.data;
  } catch (error) {
    console.error("Error fetching WRC news:", error);
    throw error;
  }
};


export const getFeatures = async () => {
    try {
      const response = await API.get("content/filters/wrc-featured?origin=vcms");
      return response.data;
    } catch (error) {
      console.error("Error fetching WRC news:", error);
      throw error;
    }
  };
