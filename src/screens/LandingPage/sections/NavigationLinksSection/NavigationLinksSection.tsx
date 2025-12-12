import React from "react";

const navigationLinks = [
  {
    text: "PROGRAMA",
    className: "font-montreal font-normal text-foreground",
  },
  {
    text: "CONTACTO",
    className: "font-montreal font-normal text-foreground",
  },
  {
    text: "OPEN CALLS",
    className: "font-montreal-italic font-normal italic text-primary",
  },
];

export const NavigationLinksSection = (): JSX.Element => {
  return (
    <section id="programa" className="relative w-full flex flex-col items-center">
      <div className="relative w-full max-w-screen-xl h-screen">
        <div className="relative w-full h-full">
          <img
            className="absolute top-64 left-0 w-full h-3/4 object-cover"
            alt="Background workspace"
            src="/img-13.png"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-background/30" />
        </div>

        <nav className="absolute top-24 left-0 right-0 flex flex-col items-center">
          {navigationLinks.map((link, index) => (
            <div
              key={index}
              className="relative w-full max-w-screen-xl h-40 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <button className={`${link.className} text-9xl cursor-pointer`}>
                {link.text}
              </button>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};
