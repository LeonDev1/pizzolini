import Navbar from "../components/Navbar.jsx";

import pizzaSalami from "../assets/img/Pizza_Salami.svg";
import arrow from "../assets/img/arrow.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

function Header() {
  useGSAP(() => {
    let split = SplitText.create(".subheading", { type: "words" });
    let split2 = SplitText.create(".header-heading", { type: "chars" });

    gsap.from(".pizza-img", {
      duration: 1,
      delay: 0.2,
      autoAlpha: 0,
      opacity: 0,
      rotateZ: -90,
      ease: "expo",
    });

    gsap.to(".pizza-img", {
      duration: 5,
      delay: 0.5,
      rotateZ: "+=360",
      repeat: -1,
      ease: "none",
    });

    gsap.from(split2.chars, {
      duration: 0.3,
      autoAlpha: 0,
      stagger: 0.05,
    });

    gsap.from(split.words, {
      duration: 0.25,
      y: 10,
      autoAlpha: 0,
      stagger: 0.05,
    });

    gsap.from(".arrow", {
      duration: 0.3,
      rotateZ: -20,
      // y: 20,
      // x: -20,
      y: -20,
      x: 20,
      autoAlpha: 0,
    });

    gsap.from(".arrow-text", {
      duration: 0.25,
      delay: 0.3,
      x: 10,
      autoAlpha: 0,
    });
  }, []);

  const pizzaClick = () => {
    gsap.to(".pizza-img", {
      duration: 0.5,
      rotateZ: "+=180",
      ease: "power3",
      overwrite: "auto",
      onComplete: () => {
        gsap.to(".pizza-img", {
          delay: 0.2,
          duration: 5,
          rotateZ: "+=360",
          repeat: -1,
          ease: "none",
        });
      },
    });
  };

  return (
    <>
      <Navbar />
      <section
        id="home"
        className="relative flex-col flex justify-center items-center h-[70dvh] mb-10.5 text-center"
      >
        <h1
          onClick={pizzaClick}
          className="header-heading flex items-baseline justify-center relative"
        >
          PIZZ
          <span
            onClick={pizzaClick}
            className="h-36 w-36 z-4 flex justify-center items-center"
          >
            <img
              onClick={pizzaClick}
              className="big pizza-img z-5 h-full w-full shadow-smooth rounded-full hover:cursor-pointer"
              src={pizzaSalami}
              alt="Pizza"
            />
          </span>
          LINI
        </h1>

        <p className="subheading">Delicious • Traditional • Simple</p>

        <a href="#menu" className=" hover:text-text">
          {" "}
          <span className="flex items-center flex-col absolute bottom-2.5 right-2.5 hover:scale-105 transition-all duration-300">
            <p className="arrow-text">Try our Pizza!</p>
            <img className="arrow w-[50px] h-[45px]" src={arrow} alt="arrow" />
          </span>
        </a>
      </section>
    </>
  );
}

export default Header;
