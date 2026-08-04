import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import LearningJourney from "./components/LearningJourney";
import Placements from "./components/Placements";
import DemoForm from "./components/DemoForm";
import Footer from "./components/Footer";
import PlacementSupport from "./components/PlacementSupport";

export default function Home() {
  return (
    <>
      <Hero />
<Stats />
<WhyChooseUs />
<Courses />
<LearningJourney />
<PlacementSupport />
<Placements />
<DemoForm />
<Footer />
    </>
  );
}