import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navigationLinks = [
  {
    text: "PROGRAMA",
    className:
      "[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-foreground",
  },
  {
    text: "CONTACTO",
    className:
      "[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-foreground",
  },
  {
    text: "OPEN CALLS",
    className:
      "[font-family:'Neue_Montreal-Italic',Helvetica] font-normal italic text-primary",
  },
];

export const NavigationLinksSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (sectionRef.current && linksRef.current.length > 0) {
      linksRef.current.forEach((link, index) => {
        if (!link) return;

        gsap.fromTo(
          link,
          { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: link,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );

        link.addEventListener("mouseenter", () => {
          gsap.to(link.querySelector("button"), {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(link.querySelector("button"), {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="programa"
      className="relative w-full flex flex-col items-center"
    >
      <div className="relative w-full max-w-[1435px] h-[1048px]">
        <div className="relative w-full h-full">
          <img
            className="absolute top-[252px] left-0 w-full max-w-[1430px] h-[794px] object-cover"
            alt="Background workspace"
            src="/img-13.png"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-background/30" />
        </div>

        <nav className="absolute top-[91px] left-0 right-0 flex flex-col items-center">
          {navigationLinks.map((link, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) linksRef.current[index] = el;
              }}
              className={`relative w-full max-w-[1440px] h-40 flex items-center justify-center ${
                index > 0 ? "mt-[-22.1px]" : ""
              }`}
            >
              <button
                className={`${link.className} text-[130px] tracking-[0] leading-[160px] cursor-pointer`}
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
