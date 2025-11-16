import aboutImg from "../assets/img/About_Pizza.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

function About() {
  useGSAP(() => {
    let split = SplitText.create(".about-text", { type: "words" });

    gsap.from(split.words, {
      scrollTrigger: { trigger: ".about-text", start: "bottom bottom" },
      duration: 1,
      y: 10,
      autoAlpha: 0,
      stagger: 0.01,
    });

    gsap.from("#about-img", {
      scrollTrigger: { trigger: "#about-img", start: "90% bottom" },
      duration: 0.5,
      // x: -20,
      ease: "sine",
      opacity: 0,
    });
  }, []);

  return (
    <section
      id="about"
      className="relative flex justify-center flex-col h-[65dvh]"
    >
      <h2 className="heading">About Us</h2>
      <div className="flex gap-18.5 items-center justify-center">
        <a href="#galary">
          <img
            id="about-img"
            className="w-94.25 h-63 rounded-[25px] shadow-smooth object-cover hover:cursor-pointer hover:scale-103 transition-all duration-300 hover:shadow-2xl"
            src={aboutImg}
            alt="About pizza"
          />
        </a>
        <p className="about-text w-103">
          For generations, we have been crafting delicious, traditional pizzas
          from original family recipes. Our passion lies in simple, fresh
          ingredients and authentic flavour - each pizza is handmade and
          prepared with love for you.
        </p>
      </div>
    </section>
  );
}

export default About;
