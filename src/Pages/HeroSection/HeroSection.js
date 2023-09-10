import headphone from "../../Images/headphone.png";
import "./HeroSection.css";

export default function NavBar() {
  return (
    <div className="container">
      <div className="Text-container">
        <div>100 Thousand Songs, add-free</div>
        <div>Over Thousand Podcast Episodes</div>
      </div>
      <img src={headphone} alt="headphone" className="image" />
    </div>
  );
}