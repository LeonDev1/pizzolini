import gsap from "gsap";
import { ScrambleTextPlugin, SplitText, ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

import Header from "./pages/Header.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About.jsx";
import Galary from "./pages/Galary.jsx";
import FAQ from "./pages/FAQ.jsx";
import Footer from "./pages/Footer.jsx";

function App() {
  gsap.registerPlugin(ScrambleTextPlugin, SplitText, ScrollTrigger);

  // Lenis / smoothScroll
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return (
    <>
      <Header />
      <Menu />
      <About />
      <Galary />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
