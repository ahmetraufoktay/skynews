import { useState, useEffect } from "react";

const useNewsData = () => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=keyword&apiKey=6082ca4230e14c169c68e0d044d1c2ce",
          { mode: "cors" }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        setError(error);
        console.error("Error fetching API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { newsData, loading, error };
};

export default useNewsData;
