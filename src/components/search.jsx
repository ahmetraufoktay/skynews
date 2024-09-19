import searchSvg from "../assets/search.svg";
import filterSvg from "../assets/filter.svg";
import { useState } from "react";
export default function Search() {
  const [searchState, setSearchState] = useState(false);
  const [filterState, setFilterState] = useState(false);

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setSearchState(false);
    }
  };

  return (
    <section className="searchbar" role="search" onBlur={handleBlur}>
      <button className="searchbutton">
        <img className="basic-logos" src={searchSvg} alt="searchButton" />
      </button>
      <input
        type="search"
        placeholder={`Search ${filterState ? "Author" : "Title"}`}
        className={`search ${filterState ? "author" : "title"}`}
        onFocus={() => setSearchState(true)}
      />
      <button
        className="filterbutton"
        onClick={() => setFilterState(!filterState)}
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
