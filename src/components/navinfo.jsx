import twittersvg from "../assets/x-social.svg";
import instagramsvg from "../assets/instagram.svg";
import skylablogo from "../assets/skylab.png";
import githubsvg from "../assets/github.svg";

export default function NavInfo() {
  return (
    <nav>
      <div className="nav-container">
        <div>
          <h3 className="nav-headline">Technology News</h3>
          <h4 className="nav-support-headline">
            Your Number One News Source About Technology
          </h4>
        </div>
        <div className="nav-social">
          <a href="https://x.com/skylabkulubu">
            <img className="basic-logos" src={twittersvg} alt="twitterpage" />
          </a>
          <a href="https://www.instagram.com/ytuskylab/">
            <img
              className="basic-logos"
              src={instagramsvg}
              alt="instagrampage"
            />
          </a>
          <a href="https://yildizskylab.com/">
            <img className="basic-logos" src={skylablogo} alt="skylabpage" />
          </a>
          <a href="https://github.com/ahmetraufoktay/skynews">
            <img className="basic-logos" src={githubsvg} alt="githubpage" />
          </a>
        </div>
      </div>
    </nav>
  );
}
