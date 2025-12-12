import React from "react";

const navigationLinks = [
  {
    text: "PROGRAMA",
    className:
      "[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-neutral-100",
  },
  {
    text: "CONTACTO",
    className:
      "[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-neutral-100",
  },
  {
    text: "OPEN CALLS",
    className:
      "[font-family:'Neue_Montreal-Italic',Helvetica] font-normal italic text-[#fa5302]",
  },
];

export const NavigationLinksSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex flex-col items-center">
      <div className="relative w-full max-w-[1435px] h-[1048px]">
        <div className="relative w-full h-full">
          <img
            className="absolute top-[252px] left-0 w-full max-w-[1430px] h-[794px] object-cover"
            alt="Background workspace"
            src="/img-13.png"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#1010104c]" />
        </div>

        <nav className="absolute top-[91px] left-0 right-0 flex flex-col items-center">
          {navigationLinks.map((link, index) => (
            <div
              key={index}
              className={`relative w-full max-w-[1440px] h-40 flex items-center justify-center ${
                index > 0 ? "mt-[-22.1px]" : ""
              }`}
            >
              <button
                className={`${link.className} text-[130px] tracking-[0] leading-[160px] hover:opacity-80 transition-opacity cursor-pointer`}
              >
                {link.text}
              </button>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};
