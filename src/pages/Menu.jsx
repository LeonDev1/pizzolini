import { useGSAP } from "@gsap/react";
import pizzaMargherita from "../assets/img/Pizza_Margherita.svg";
import pizzaSalami from "../assets/img/Pizza_Salami.svg";
import pizzaTonno from "../assets/img/Pizza_Tonno.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Menu() {
  useGSAP(() => {
    gsap.from(".menu", {
      duration: 0.5,
      autoAlpha: 0,
      y: 40,
      stagger: 1,
      delay: 0.3,
    });
  });

  return (
    <section
      id="menu"
      className="menu flex justify-between h-[70dvh] pl-5 pr-5 max-w-265.75 ml-auto mr-auto"
    >
      <Menu_Card
        name="MARGHERITA"
        price="12.99 €"
        img={pizzaMargherita}
        imgAlt="MargheritaImage"
      />
      <Menu_Card
        name="SALAMI"
        price="14.99 €"
        img={pizzaSalami}
        imgAlt="SalamiImage"
      />
      <Menu_Card
        name="Tonno"
        price="15.99 €"
        img={pizzaTonno}
        imgAlt="TonnoImage"
      />
    </section>
  );
}

function Menu_Card(props) {
  return (
    <div className="menu-card flex gap-2.5 flex-col justify-center items-center w-[282px] h-[400px] rounded-[2.5rem] hover:bg-primary hover:rotate-[2.5deg] hover:cursor-pointer transition-all duration-300">
      <img
        className="h-41.25 shadow-smooth rounded-full transition-all duration-300"
        src={props.img}
        alt={props.imgAlt}
      />
      <h2 className="uppercase">{props.name}</h2>
      <p>{props.price}</p>
    </div>
  );
}

export default Menu;
