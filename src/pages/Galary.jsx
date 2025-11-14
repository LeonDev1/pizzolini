import { useGSAP } from "@gsap/react";
import { random, ScrollTrigger } from "gsap/all";
import galaryDought from "../assets/img/GalaryImg_Dought.webp";
import galaryMargherita from "../assets/img/GalaryImg_Margherita.webp";
import galaryMargherita2 from "../assets/img/GalaryImg_Margherita_2.webp";
import galaryPizzaoven from "../assets/img/GalaryImg_Pizzaoven.webp";
import galarySalami from "../assets/img/GalaryImg_Salami.webp";
import galarySalami2 from "../assets/img/GalaryImg_Salami_2.webp";
import galaryTonno from "../assets/img/GalaryImg_Tonno.webp";
import pizzaSalami from "/Pizza_Salami.png";
import gsap from "gsap";

function Galary() {
  useGSAP(() => {
    gsap.from(".galary-images", {
      duration: 0.5,
      scrollTrigger: { trigger: ".galary-images", start: "top 80%" },
      y: 30,
      opacity: 0,
      delay: 0.1,
      // clipPath: "inset(100% 0 0 0)",
    });

    gsap.from(".galary-images img", {
      duration: 0.3,
      scrollTrigger: { trigger: ".galary-images", start: "top 80%" },
      clipPath: "inset(100% 0 0 0)",
      delay: 0.1,
    });
  });

  return (
    <section
      id="galary"
      className="relative flex justify-center items-center h-dvh"
    >
      <h2 className="heading">Galary</h2>
      <div className="absolute flex justify-center items-center w-190 h-165">
        <h2 className="flex items-baseline justify-center relative text-[80px]">
          PIZZ
          <span className="h-20 w-20 flex justify-center items-center">
            <img
              className="h-full w-full shadow-smooth rounded-full"
              src={pizzaSalami}
              alt="Pizza"
            />
          </span>
          LINI
        </h2>
        <div className="absolute w-full h-full galary-images">
          <img
            className="h-33.25 galary-img bottom-0 left-6/12 -translate-x-6/12"
            src={galaryDought}
            alt="DoughtImage"
          />
          <img
            className="h-46 w-30.75 galary-img object-cover right-0 top-3/24 -translate-y-3/12"
            src={galaryMargherita}
            alt="MargheritaImage"
          />
          <img
            className="h-37.5 galary-img top-0 left-6/12 -translate-x-6/12"
            src={galaryMargherita2}
            alt="MargheritaImage2"
          />
          <img
            className="h-42.25 galary-img object-cover left-0 bottom-3/24"
            src={galaryPizzaoven}
            alt="OvenImage"
          />
          <img
            className="h-24 w-36 galary-img object-cover right-0 top-6/12 -translate-y-6/12 translate-x-6/12"
            src={galarySalami}
            alt="SalamiImage"
          />
          <img
            className="h-39.5 galary-img object-cover right-0 bottom-3/24 translate-y-3/12"
            src={galarySalami2}
            alt="SalamiImage2"
          />
          <img
            className="h-49.5 w-33 galary-img object-cover left-0 top-3/24"
            src={galaryTonno}
            alt="TonnoImage"
          />
        </div>
      </div>
    </section>
  );
}

export default Galary;
