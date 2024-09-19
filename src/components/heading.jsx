import weblablogo from "../assets/weblablogo.png";
import darkmode from "../assets/darkmode.svg";
import lightmode from "../assets/lightmode.svg";
import Search from "./search";

export default function Heading() {
  return (
    <header>
      <div className="sitetitle" role="presentation">
        <img src={weblablogo} alt="skynews" />
        <h1>SKYNEWS</h1>
      </div>
      <Search></Search>
      <div>
        <img className="basic-logos" src={lightmode} alt="lightmode" />
        <img className="basic-logos" src={darkmode} alt="darkmode" />
      </div>
    </header>
  );
}
