import searchSvg from "../assets/search.svg";
import filterSvg from "../assets/filter.svg";
import useNewsData from "../useNewsData";
import { useState } from "react";

export default function Search({ setResults }) {
  const [searchState, setSearchState] = useState(false);
  const [filterState, setFilterState] = useState(false);
  const { newsData, loading, error } = useNewsData();
  const [input, setInput] = useState("");

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setSearchState(false);
    }
  };

  function showResults(value, type) {
    const results = newsData.articles.filter((article) => {
      if (type == false) {
        return (
          value &&
          article &&
          article.title &&
          article.title.toLowerCase().includes(value.toLowerCase())
        );
      } else if (type == true) {
        return (
          value &&
          article &&
          article.author &&
          article.author.toLowerCase().includes(value.toLowerCase())
        );
      }
    });
    setResults(results);
  }

  function handleChange(value, type) {
    setInput(value);
    showResults(value, type);
  }
  function handleFilter() {
    setInput("");
    setFilterState(!filterState);
  }
  return (
    <section className="searchbar" role="search" onBlur={handleBlur}>
      <button className="searchbutton">
        <img className="basic-logos" src={searchSvg} alt="searchButton" />
      </button>
      <input
        type="search"
        placeholder={`Search ${filterState ? "Author" : "Title"}`}
        className={`search ${filterState ? "author" : "title"}`}
        value={input}
        onFocus={() => setSearchState(true)}
        onChange={(e) => handleChange(e.target.value, filterState)}
      />
      <button
        className="filterbutton"
        onClick={() => handleFilter()}
        style={{
          opacity: searchState ? "1" : "0",
          visibility: searchState ? "visible" : "hidden",
          transition: "all .2s",
        }}
      >
        <img className="basic-logos" src={filterSvg} alt="filterButton" />
      </button>
    </section>
  );
}
