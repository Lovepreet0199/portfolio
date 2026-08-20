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
  const [introFinished, setIntroFinished] = useState(false);
  const [activePortfolioTab, setActivePortfolioTab] = useState("projects");
  return (
    <>
      <Intro onFinish={() => setIntroFinished(true)} />
      <Header setActivePortfolioTab={setActivePortfolioTab} />
      <Hero introFinished={introFinished} />
      <About />
      <PortfolioShowcase
        activeTab={activePortfolioTab}
        setActivePortfolioTab={setActivePortfolioTab}
      />
      <Contact />
      <Guestbook />
      <Footer />
    </>
  )
}

export default App
