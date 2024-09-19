export default function SearchResults({ results }) {
  return (
    <div className="search-results">
      {results.map((result, index) => {
        return (
          <a href={result.url} className="result-element" key={index}>
            <div className="result-title">
              <b>Title: </b> {result.title}
            </div>
            <div className="result-author">
              <b>Author: </b>
              {result.author ? result.author : "Not Available"}
            </div>
          </a>
        );
      })}
    </div>
  );
}
