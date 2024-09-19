import useNewsData from "../useNewsData";

export default function Aside() {
  const { newsData, loading, error } = useNewsData();

  if (loading) {
    return <aside>Loading...</aside>;
  }

  if (error) {
    return <aside>Error fetching news data</aside>;
  }

  function getBaseDomain(url) {
    const regex = /^(https?:\/\/[^/]+\/)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  function listSourceCounts(articles) {
    const sourceCounts = [];

    articles.forEach((article) => {
      const sourceName = article.source.name;
      const index = sourceCounts.findIndex(
        (item) => item.source === sourceName
      );

      if (index !== -1) {
        sourceCounts[index].count++;
      } else {
        sourceCounts.push({
          source: sourceName,
          count: 1,
          url: getBaseDomain(article.url),
        });
      }
    });

    const filteredSources = sourceCounts
      .filter((item) => item.count > 1)
      .sort((a, b) => b.count - a.count);

    return filteredSources;
  }

  const sortedSourceCounts = listSourceCounts(newsData.articles);

  return (
    <aside>
      <h3>Top News Sources</h3>
      <div>
        {sortedSourceCounts.slice(0, 10).map((source, index) => (
          <h4 className="source-links" key={index}>
            <a href={source.url}>
              <span className="sources">{`${source.source} - `}</span>
              <span className="counts">{source.count}</span>
            </a>
          </h4>
        ))}
      </div>
    </aside>
  );
}
