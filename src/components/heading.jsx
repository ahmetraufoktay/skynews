import weblablogo from "../assets/weblablogo.png";
import darkmode from "../assets/darkmode.svg";
import lightmode from "../assets/lightmode.svg";
import Search from "./search";
import SearchResults from "./searchresults";
import { useEffect, useState } from "react";

export default function Heading() {
  const [results, setResults] = useState([]);
  const [mode, setMode] = useState(true);

  const changeMode = () => {
    setMode((prevmode) => !prevmode);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--main-color",
      mode ? "#121212" : "white"
    );
    document.documentElement.style.setProperty(
      "--nav-color",
      mode ? "#1e1e1e" : "#272727"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      mode ? "white" : "black"
    );
    document.documentElement.style.setProperty(
      "--link-color",
      mode ? "rgb(85, 85, 126)" : "rgb(29, 14, 83)"
    );
    document.documentElement.style.setProperty(
      "--searchbar-border-color",
      mode ? "#ffffff" : "black"
    );
    document.documentElement.style.setProperty(
      "--searchbar-border-radius",
      mode ? "10px" : "0px"
    );
    document.documentElement.style.setProperty(
      "--scrollbar-bg",
      mode ? "#333" : "#f1f1f1"
    );
    document.documentElement.style.setProperty(
      "--scrollbar-thumb",
      mode ? "#555" : "#888"
    );
  }, [mode]);

  return (
    <header>
      <div className="sitetitle" role="presentation">
        <img src={weblablogo} alt="skynews" />
        <h1>SKYNEWS</h1>
      </div>
      <div className="searchTab">
        <Search setResults={setResults}></Search>
        <SearchResults results={results}></SearchResults>
      </div>
      <div>
        <img
          onClick={changeMode}
          className="basic-logos usermode"
          src={mode ? lightmode : darkmode}
          alt="lightmode"
        />
      </div>
    </header>
  );
}
