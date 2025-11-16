import { useGSAP } from "@gsap/react";
import Logo from "/Logo.svg";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function Navbar() {
  useGSAP(() => {
    gsap.from(".navbar", {
      duration: 1,
      y: -100,
      delay: 0.3,
    });
  });

  return (
    <div className="navbar fixed top-1.25 left-6/12 -translate-x-6/12 z-100 flex justify-center items-center h-12.75 w-[95%] pl-10 pr-10 m-auto">
      <img
        className="absolute left-4 h-[calc(3.1875rem-10px)] pl-10 pr-10 bg-background rounded-full"
        src={Logo}
        alt="Logo"
      />
      <ul className="nav-links flex gap-4.75 justify-between items-center w-[426px] h-full pl-10 pr-10 bg-background rounded-full">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About Us</a>
        <a href="#galary">Galary</a>
        <a href="#faq">FAQ</a>
      </ul>
      {/* <button>de</button> */}
    </div>
  );
}

export default Navbar;
