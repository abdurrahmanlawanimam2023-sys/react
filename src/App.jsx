import "./App.css";
import Header from "./header";
import HeroText from "./Herotext";
import HeroCards from "./Herocards";
import Services from "./services";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";

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