import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Button } from "../../components/ui/button";
import { MobileMenu } from "../../components/MobileMenu/MobileMenu";
import { EventDayDialog } from "../../components/EventDayDialog/EventDayDialog";
import { AnnouncementMarqueeSection } from "./sections/AnnouncementMarqueeSection";
import { EventDaysSection } from "./sections/EventDaysSection";
import { MainHeroSection } from "./sections/MainHeroSection";
import { NavigationLinksSection } from "./sections/NavigationLinksSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const partnerLogos = [
  {
    src: "/img-7.png",
    alt: "Partner Logo 1",
    className:
      "row-[1_/_2] col-[1_/_2] justify-self-center self-center w-[149px] h-[47px]",
  },
  {
    src: "/img-6.png",
    alt: "Partner Logo 2",
    className:
      "row-[1_/_2] col-[2_/_3] justify-self-start [align-self:end] w-full h-[64.28px]",
  },
  {
    src: "/img.png",
    alt: "Partner Logo 3",
    className:
      "row-[1_/_2] col-[3_/_4] justify-self-start w-full h-[72.94px] object-cover",
  },
  {
    src: "/img-1.png",
    alt: "Partner Logo 4",
    className:
      "row-[1_/_2] col-[4_/_5] justify-self-start w-full h-[72.94px] object-cover",
  },
  {
    src: "/img-8.png",
    alt: "Partner Logo 5",
    className:
      "row-[1_/_2] col-[5_/_6] justify-self-center self-center w-[148px] h-[50px]",
  },
  {
    src: "/img-10.png",
    alt: "Partner Logo 6",
    className:
      "row-[1_/_2] col-[6_/_7] justify-self-start w-full h-[72.89px] object-cover",
  },
  {
    src: "/img-2.png",
    alt: "Partner Logo 7",
    className:
      "row-[2_/_3] col-[1_/_2] justify-self-start w-full h-[72.89px] object-cover",
  },
  {
    src: "/img-3.png",
    alt: "Partner Logo 8",
    className:
      "row-[2_/_3] col-[2_/_3] justify-self-start w-full h-[73.05px] object-cover",
  },
  {
    src: "/img-4.png",
    alt: "Partner Logo 9",
    className:
      "row-[2_/_3] col-[3_/_4] justify-self-start w-full h-[73.1px] object-cover",
  },
  {
    src: "/img-5.png",
    alt: "Partner Logo 10",
    className:
      "row-[2_/_3] col-[4_/_5] justify-self-start w-full h-[73.1px] object-cover",
  },
  {
    src: "/img-9.png",
    alt: "Partner Logo 11",
    className:
      "row-[2_/_3] col-[5_/_6] justify-self-start w-full h-[72.94px] object-cover",
  },
  {
    src: "/img-11.png",
    alt: "Partner Logo 12",
    className:
      "row-[2_/_3] col-[6_/_7] justify-self-start [align-self:start] w-[223.58px] h-[77.83px] object-cover",
  },
];

export const LandingPage = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState({ day: "", date: "" });
  const partnersRef = useRef<HTMLElement>(null);
  const logoRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    if (partnersRef.current && logoRefs.current.length > 0) {
      logoRefs.current.forEach((logo, index) => {
        if (!logo) return;

        gsap.fromTo(
          logo,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: logo,
              start: "top 90%",
              end: "top 70%",
              scrub: 1,
            },
          }
        );

        logo.addEventListener("mouseenter", () => {
          gsap.to(logo, {
            scale: 1.1,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });

        logo.addEventListener("mouseleave", () => {
          gsap.to(logo, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }
  }, []);

  const handleDayClick = (day: string, date: string) => {
    setSelectedDay({ day, date });
    setIsDialogOpen(true);
  };

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 1.5,
      ease: "power3.inOut",
    });
  };

  const scrollToBottom = () => {
    gsap.to(window, {
      scrollTo: { y: document.body.scrollHeight },
      duration: 1.5,
      ease: "power3.inOut",
    });
  };

  return (
    <div className="bg-background overflow-x-hidden w-full min-w-[1440px] relative">
      <header className="flex max-w-[99999px] w-[1440px] max-h-[99999px] h-[136px] items-end justify-center pl-[11.02px] pr-[12.01px] pt-[115.2px] pb-[11.51px] relative bg-background">
        <div className="relative flex items-center justify-center w-[264px] h-[123px] mt-[-114.71px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-foreground text-3xl tracking-[0] leading-[145px] whitespace-nowrap">
          23-27 de fevereiro
        </div>

        <div className="absolute top-px left-0 w-[1397px] h-[135px]">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(true)}
            className="absolute h-[22.22%] top-[39.26%] right-0 w-[62px] p-0 hover:bg-transparent hover:scale-110 transition-transform duration-300"
          >
            <img
              className="w-full h-full"
              alt="Hamburger menu"
              src="/hamburgermenu.svg"
            />
          </Button>

          <img
            className="absolute top-0 left-0 w-[135px] h-[135px] object-cover"
            alt="Logo"
            src="/logo.png"
          />
        </div>
      </header>

      <MainHeroSection />

      <NavigationLinksSection />

      <EventDaysSection onDayClick={handleDayClick} />

      <section className="relative w-full flex justify-center py-20">
        <img
          className="w-[1420px] h-[1420px] object-cover"
          alt="Event Space"
          src="/img-12.png"
        />
      </section>

      <AnnouncementMarqueeSection />

      <section
        ref={partnersRef}
        id="contacto"
        className="relative w-full py-20"
      >
        <div className="w-[1440px] mx-auto flex flex-col gap-3">
          <h2 className="flex items-center justify-center ml-[38px] w-[276px] h-[29px] -mt-1 [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-foreground text-h3 tracking-[0] leading-10 whitespace-nowrap">
            Parceiros &amp; Patrocinios
          </h2>

          <div className="grid w-[1440px] h-[154px] relative grid-cols-6 grid-rows-2 gap-[0px_26px] bg-background">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                ref={(el) => {
                  if (el) logoRefs.current[index] = el;
                }}
                className={`relative cursor-pointer ${logo.className}`}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteFooterSection />

      <img
        className="absolute top-0 left-[calc(50.00%_-_720px)] w-[1440px] h-full pointer-events-none"
        alt="Grain"
        src="/grain.png"
      />

      <Button
        variant="ghost"
        size="icon"
        onClick={scrollToTop}
        className="top-[760px] left-[1313px] fixed w-[90px] h-[90px] p-0 hover:bg-transparent hover:scale-110 hover:-translate-y-2 transition-all duration-300"
      >
        <img className="w-full h-full" alt="Scroll to top" src="/arrow-3.svg" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={scrollToBottom}
        className="top-[5776px] left-[1301px] fixed w-[90px] h-[90px] p-0 hover:bg-transparent hover:scale-110 hover:translate-y-2 transition-all duration-300"
      >
        <img
          className="w-full h-full"
          alt="Scroll to bottom"
          src="/arrow-4.svg"
        />
      </Button>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <EventDayDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        day={selectedDay.day}
        date={selectedDay.date}
      />
    </div>
  );
};
