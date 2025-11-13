import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

function FAQ() {
  useGSAP(() => {
    gsap.from(".faq-question", {
      scrollTrigger: { trigger: ".faq-question", start: "top 75%" },
      duration: 0.3,
      y: 20,
      autoAlpha: 0,
      ease: "power3",
      stagger: 0.05,
    });
  });

  return (
    <section
      id="faq"
      className="relative flex flex-col justify-center items-center h-auto pt-40 pb-40"
    >
      <h2 className="heading">FAQ</h2>
      <div className="flex flex-col justify-center items-center gap-8 w-[80%] max-w-256.25">
        <FAQ_Question
          question="Do you have vegetarian or vegan pizzas?"
          answer=" Yes! Many veggie options. Vegan pizzas with vegan cheese or other alternatives."
        />
        <FAQ_Question
          question="Do you offer gluten-free pizza?"
          answer="Yes, upon request. Traces in the kitchen are possible."
        />
        <FAQ_Question
          question="Do you offer a delivery service?"
          answer="Yes, we deliver to your home anywhere in Germany."
        />
        <FAQ_Question
          question="Can I pick up my order myself?"
          answer="Yes, ready for pick-up in 15-20 minutes."
        />
        <FAQ_Question
          question="What are your opening hours?"
          answer=" Mon-Fri: 5 PM - 10 PM, Sat/Sun: 12 PM - 10:30 PM. [Closed: Tue]."
        />
      </div>
    </section>
  );
}

function FAQ_Question(props) {
  const faqCardRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const card = faqCardRef.current;
    if (!card) return;

    const handleClick = () => {
      setIsOpen(!isOpen);
    };

    card.addEventListener("click", handleClick);
    return () => card.removeEventListener("click", handleClick);
  }, [isOpen]);

  return (
    <div className="faq-question flex gap-1 items-center flex-col justify-between w-full">
      <div
        className="flex justify-center w-full relative cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 absolute left-10 top-6/12 translate-y-[-50%] transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
        <p className="text-left w-150 font-bold">{props.question}</p>
      </div>
      <div
        ref={faqCardRef}
        className={`flex justify-center w-full overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="text-left w-150 relative right-0">{props.answer}</p>
      </div>
    </div>
  );
}

export default FAQ;
