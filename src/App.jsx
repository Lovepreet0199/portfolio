import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import PortfolioShowcase from "./components/PortfolioShowcase/PortfolioShowcase";
import Contact from "./components/Contact/Contact";
import Guestbook from "./components/Guestbook/Guestbook";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";

function App() {

  return (
    <>
      <Intro />
      <Header />
      <Hero />
      <About />
      <PortfolioShowcase />
      <Contact />
      <Guestbook />
      <Footer />
    </>
  )
}

export default App
