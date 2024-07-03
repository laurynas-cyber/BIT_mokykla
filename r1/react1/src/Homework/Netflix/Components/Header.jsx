import backgroundImg from "../assets/Netfliximg.jpg";
import logo from "../assets/R.png";

function Header() {
  return (
    <header>
      <div className="TopbannerContainer">
        <img alt="" className="logo" src={logo}></img>
        <div className="SetCont">
          <select>
            <option style={{ color: "black" }}>English</option>
            <option>Ruski</option>
          </select>
          <button type="button">Sign In</button>
        </div>
      </div>

      <div
        className="backgroundImg"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>
      <div className="BannerText">
        <h1>Unlimited movies, TV shows, and more</h1>
        <span className="bigerText">Watch anywhere. Cancel anytime</span>
        <span>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
      </div>
    </header>
  );
}

export default Header;
