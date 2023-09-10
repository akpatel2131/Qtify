import "./Navbar.css";
import qtify_logo from "../../Images/qtify_logo.png";
import search_icon from "../../Images/Search icon.svg";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <img src={qtify_logo} alt="qtify logo" />
      <div className="search">
        <input
          className="search-input"
          placeholder="Search album of your choice"
        />
        <img src={search_icon} alt="search icon" className="search-icon" />
      </div>
      <button className="feddback-button">Give Feedback</button>
    </div>
  );
}
