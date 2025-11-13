import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin, SplitText, ScrollTrigger } from "gsap/all";

import Header from "./pages/Header.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About.jsx";
import Galary from "./pages/Galary.jsx";
import FAQ from "./pages/FAQ.jsx";
import Footer from "./pages/Footer.jsx";

function App() {
  gsap.registerPlugin(ScrambleTextPlugin, SplitText, ScrollTrigger);
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
