import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import HeroSection from "./Pages/HeroSection/HeroSection";
import Grid from "./Pages/Grid/Grid";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Grid />
    </div>
  );
}

