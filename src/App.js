import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import HeroSection from "./Pages/HeroSection/HeroSection";
import FAQs from "./Pages/FAQs/FAQs"
import Grid from "./Pages/Grid/Grid";
import Filtertag from "./Pages/Filter/Filtertag";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Grid title={"Top Album"} url={"https://qtify-backend-labs.crio.do/albums/top"}/>
      <Grid title={"New Album"} url={"https://qtify-backend-labs.crio.do/albums/new"}/>
      <Filtertag/>
      <FAQs />
    </div>
  );
}

