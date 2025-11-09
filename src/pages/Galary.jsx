import galaryDought from "../assets/img/GalaryImg_Dought.jpg";
import galaryMargherita from "../assets/img/GalaryImg_Margherita.jpg";
import galaryMargherita2 from "../assets/img/GalaryImg_Margherita_2.jpg";
import galaryPizzaoven from "../assets/img/GalaryImg_Pizzaoven.jpg";
import galarySalami from "../assets/img/GalaryImg_Salami.jpg";
import galarySalami2 from "../assets/img/GalaryImg_Salami_2.jpg";
import galaryTonno from "../assets/img/GalaryImg_Tonno.jpg";
import pizzaSalami from "/Pizza_Salami.png";

function Galary() {
  return (
    <section
      id="galary"
      className="relative flex justify-center items-center h-dvh"
    >
      <div className="absolute flex justify-center items-center w-190 h-[60%]">
        <h2 className="flex items-baseline justify-center relative text-[80px]">
          PIZZ
          <span className="h-20 w-20 flex justify-center items-center">
            <img className="h-full w-full" src={pizzaSalami} alt="Pizza" />
          </span>
          LINI
        </h2>
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
    </section>
  );
}

export default Galary;
