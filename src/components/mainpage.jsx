import useNewsData from "../useNewsData";
import newsImage from "../assets/news.jpg";
import { useState } from "react";
export default function MainPage() {
  const { newsData, loading, error } = useNewsData();
  const [startIndex, setStartIndex] = useState(0);

  function handlePrevious() {
    if (startIndex > 0) {
      const newStart = startIndex - 10;
      setStartIndex(newStart);
    }
  }

  function handleNext() {
    if (startIndex >= 0 && startIndex <= 90) {
      const newStart = startIndex + 10;
      setStartIndex(newStart);
    }
  }

  if (loading) {
    return <main>Loading...</main>;
  }

  if (error) {
    return <main>Error fetching news data</main>;
  }
  return (
    <main>
      {newsData.articles
        .slice(startIndex, startIndex + 10)
        .map((article, index) => (
          <article className="news" key={index}>
            {" "}
            <img
              className="news-images"
              src={article.urlToImage ? article.urlToImage : newsImage}
              alt="IMAGE NOT AVAILABLE"
            />
            <h2 className="news-headline">
              <a href={article.url}>{article.title}</a>
            </h2>
            <h3 className="news-description">{article.description}</h3>
          </article>
        ))}
      <div className="site-buttons-container">
        <button
          disabled={startIndex === 0}
          className="site-buttons"
          onClick={handlePrevious}
        >
          &lt; Previous
        </button>
        <button
          disabled={90 <= startIndex}
          className="site-buttons"
          onClick={handleNext}
        >
          Next &gt;
        </button>
      </div>
    </main>
  );
}
