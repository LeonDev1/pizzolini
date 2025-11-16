import React from "react";
import logoImg from "/Logo.svg";
import profileImg from "../assets/img/profilepicture-nobg.png";

function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <section className="flex gap-9.5 flex-col items-center justify-center text-center">
      <div className="flex gap-6.5 items-center justify-center">
        <div className="flex items-center justify-center">
          <img className="h-6.75 w-18.75" src={logoImg} alt="Logo" />
        </div>
        <ul className="flex gap-2 items-center justify-center">
          <a className="small-text" href="#home">
            Home
          </a>
          <p className="small-text">|</p>
          <a className="small-text" href="#menu">
            Menu
          </a>
          <p className="small-text">|</p>
          <a className="small-text" href="#about">
            About Us
          </a>
          <p className="small-text">|</p>
          <a className="small-text" href="#galary">
            Galary
          </a>
          <p className="small-text">|</p>
          <a className="small-text" href="#faq">
            FAQ
          </a>
          <p className="small-text">|</p>
        </ul>
      </div>
      <div className="flex gap-1.25 flex-col items-center justify-center">
        <img
          className="h-10.25 w-10.25 rounded-full"
          src={profileImg}
          alt="Profile Picture"
        />
        <h3 className="opacity-60">
          This Website was made for educational Purposes by{" "}
          <a href="https://leondev1.github.io/portfolio">Leondev</a>
        </h3>
        <h3 className="opacity-50">
          Copyright © {currentYear}{" "}
          <a href="https://leondev1.github.io/portfolio">Leondev</a>
        </h3>
      </div>
    </section>
  );
}

export default Footer;
