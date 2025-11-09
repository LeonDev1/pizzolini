import Navbar from "../components/Navbar.jsx";

import pizzaSalami from "../assets/img/Pizza_Salami.svg";
import arrow from "../assets/img/arrow.svg";

function Header() {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="relative flex-col flex justify-center items-center h-[70dvh] mb-10.5 text-center"
      >
        <h1 className="flex items-baseline justify-center relative">
          PIZZ
          <span className="h-36 w-36 flex justify-center items-center">
            <img className="h-full w-full" src={pizzaSalami} alt="Pizza" />
          </span>
          LINI
        </h1>

        <p>Delicious • Traditional • Simple</p>

        <span className="flex items-center flex-col absolute bottom-2.5 right-2.5">
          <p>Try our Pizza!</p>
          <img className="w-[50px] h-[45px]" src={arrow} alt="arrow" />
        </span>
      </section>
    </>
  );
}

export default Header;
