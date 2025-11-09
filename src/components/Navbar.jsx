import Logo from "/Logo.svg";

function Navbar() {
  return (
    <div className="fixed top-1.25 left-6/12 -translate-x-6/12 z-100 flex justify-between items-center h-12.75 w-[95%] pl-10 pr-10 m-auto bg-background rounded-full">
      <img className="h-[calc(3.1875rem-10px)]" src={Logo} alt="Logo" />
      <ul className="flex gap-4.75 justify-between items-center w-[426px] h-full">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About Us</a>
        <a href="#galary">Galary</a>
        <a href="#faq">FAQ</a>
      </ul>
      <button>de</button>
    </div>
  );
}

export default Navbar;
