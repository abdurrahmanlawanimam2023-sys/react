import "./App.css";
import Header from "./Header";
import HeroText from "./HeroText";
import HeroCards from "./HeroCards";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

// App just puts the components together, in order from top to bottom
export default function App() {
  return (
    <div className="page">
      <Header />

      <main className="container hero">
        <HeroText />
        <HeroCards />
      </main>

      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}