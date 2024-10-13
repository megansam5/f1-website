import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import KeyPlayers from "./components/keyPlayers/KeyPlayers";
import Timeline from "./components/timeline/Timeline";
import NextRaces from "./components/nextraces/NextRaces";
import KeyWords from "./components/keyWords/KeyWords";
import KeyWords2 from "./components/keyWords/KeyWords2";
import KeyWords3 from "./components/keyWords/KeyWords3";
import KeyWords4 from "./components/keyWords/KeyWords4";
import LearnMore from "./components/learnMore/LearnMore";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="NextRaces">
        <NextRaces />
      </section>

      <section id="Timeline">
        <Parallax type="timeline" />
      </section>
      <section>
        <Timeline />
      </section>

      <section id="Key Players">
        <Parallax type="keyplayers" />
      </section>
      <KeyPlayers />
      <section id="Key Words">
        <Parallax type="keywords" />
      </section>
      <section>
        <KeyWords />
      </section>
      <section>
        <KeyWords2 />
      </section>
      <section>
        <KeyWords3 />
      </section>
      <section>
        <KeyWords4 />
      </section>

      <section>
        <LearnMore />
      </section>
    </div>
  );
};

export default App;
