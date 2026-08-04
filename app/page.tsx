import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import LearningJourney from "./components/LearningJourney";
import PlacementSupport from "./components/PlacementSupport";
import Testimonials from "./components/Testimonials";
import HiringCompanies from "./components/HiringCompanies";
import Placements from "./components/Placements";
import FAQ from "./components/FAQ";
import DemoForm from "./components/DemoForm";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Courses />
      <LearningJourney />
      <PlacementSupport />
      <Testimonials />
      <HiringCompanies />
      <Placements />
      <FAQ />
      <DemoForm />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  );
}