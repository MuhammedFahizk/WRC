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


  export const getUpcoming = async () => {
    try {
      const response = await API.get("content/filters/calendar?type=sportsheader");
      return response.data;
    } catch (error) {
      console.error("Error fetching WRC news:", error);
      throw error;
    }
  };


  export const getRallies = async () => {
    try {
      const response = await API.get("content/items?language=en&size=10&type=calendar&filterBy=year%2Bgroup&filter=2025%2BWRC&page=1");
      return response.data;
    } catch (error) {
      console.error("Error fetching WRC news:", error);
      throw error;
    }
  };
  // https://api.wrc.com/content/items?language=en&size=10&type=calendar&filterBy=year%2Bgroup&filter=2025%2BWRC&page=1
