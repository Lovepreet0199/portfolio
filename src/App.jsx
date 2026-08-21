import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import PortfolioShowcase from "./components/PortfolioShowcase/PortfolioShowcase";
import Contact from "./components/Contact/Contact";
import Guestbook from "./components/Guestbook/Guestbook";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import { useState } from "react";

function App() {

  // I use this state to tell the Hero when the Intro animation has finished.
  const [introFinished, setIntroFinished] = useState(false);

  // I keep the active Portfolio tab here because both the Header and PortfolioShowcase need to be able to change it.
  const [activePortfolioTab, setActivePortfolioTab] = useState("projects");

  return (
    <>

      {/* Intro tells App when its animation is finished. */}
      <Intro
        onFinish={() => setIntroFinished(true)}
      />

      {/* Header can change the active Portfolio tab when a navigation link is clicked. */}
      <Header
        setActivePortfolioTab={setActivePortfolioTab}
      />

      {/* Hero waits for the Intro to finish before starting its animations. */}
      <Hero
        introFinished={introFinished}
      />

      <About />

      {/* I pass both the current tab and its setter because the Showcase displays and changes tabs. */}
      <PortfolioShowcase
        activePortfolioTab={activePortfolioTab}
        setActivePortfolioTab={setActivePortfolioTab}
      />

      <Contact />

      <Guestbook />

      <Footer />

    </>
  );
}

export default App;