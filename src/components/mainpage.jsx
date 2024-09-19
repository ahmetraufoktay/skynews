import useNewsData from "../useNewsData";

export default function MainPage() {
  const { newsData, loading, error } = useNewsData();

  if (loading) {
    return <main>Loading...</main>;
  }

  if (error) {
    return <main>Error fetching news data</main>;
  }
  console.log(newsData);
  return (
    <main>
      {newsData.articles.slice(0, 10).map((article, index) => (
        <article className="news" key={index}>
          {" "}
          <img
            className="news-images"
            src={article.urlToImage}
            alt="IMAGE NOT AVAILABLE"
          />
          <h2 className="news-headline">
            <a href="#">{article.title}</a>
          </h2>
          <h3 className="news-description">{article.description}</h3>
        </article>
      ))}
    </main>
  );
}
