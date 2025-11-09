import aboutImg from "../assets/img/About_Pizza.jpg";

function About() {
  const text = `For generations, we have been crafting delicious, traditional pizzas
from original family recipes. Our passion lies in simple, fresh
ingredients and authentic flavour - each pizza is handmade and
prepared with love for you.`;

  const tokens = text.split(/(\s+)/);

  return (
    <section
      id="about"
      className="relative flex justify-center flex-col h-[85dvh]"
    >
      <h2 className="absolute top-0 left-6/12 -translate-x-6/12 text-center ">
        About Us
      </h2>
      <div className="flex gap-18.5 items-center justify-center">
        <img
          className="w-94.25 h-63 rounded-[25px] shadow-smooth object-cover hover:h-65 transition-all duration-300"
          src={aboutImg}
          alt="About pizza"
        />
        <p className="w-103">
          {tokens.map((t, i) =>
            /\s+/.test(t) ? (
              t
            ) : (
              <span
                key={i}
                className="inline-block transition-colors duration-255 hover:text-(--secondary-color) hover:cursor-default"
              >
                {t}
              </span>
            )
          )}
        </p>
      </div>
    </section>
  );
}

export default About;
