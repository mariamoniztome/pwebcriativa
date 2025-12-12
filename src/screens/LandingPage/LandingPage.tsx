import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Button } from "../../components/ui/button";
import { MobileMenu } from "../../components/MobileMenu/MobileMenu";
import { EventDayDialog } from "../../components/EventDayDialog/EventDayDialog";
import { MainHeroSection } from "./sections/MainHeroSection/MainHeroSection";
import { NavigationLinksSection } from "./sections/NavigationLinksSection/NavigationLinksSection";
import { EventDaysSection } from "./sections/EventDaysSection/EventDaysSection";
import { AnnouncementMarqueeSection } from "./sections/AnnouncementMarqueeSection/AnnouncementMarqueeSection";
import { SiteFooterSection } from "./sections/SiteFooterSection/SiteFooterSection";
import { partnersLogo } from "../../assets/data/partnersLogo";
import { Menu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const LandingPage = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState({ day: "", date: "" });

  const partnersRef = useRef<HTMLElement>(null);
  const logoRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    logoRefs.current.forEach((logo) => {
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

      const onEnter = () =>
        gsap.to(logo, { scale: 1.1, duration: 0.3, ease: "back.out(1.7)" });

      const onLeave = () =>
        gsap.to(logo, { scale: 1, duration: 0.3, ease: "power2.out" });

      logo.addEventListener("mouseenter", onEnter);
      logo.addEventListener("mouseleave", onLeave);

      return () => {
        logo.removeEventListener("mouseenter", onEnter);
        logo.removeEventListener("mouseleave", onLeave);
      };
    });
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
    <div className="relative w-full overflow-x-hidden bg-background">
      <header className="mx-auto flex h-36 max-w-screen-xl items-center justify-between bg-background px-4">
        <img className="h-36 w-auto" alt="Logo" src="/logo.png" />

        <div className="text-3xl font-normal text-foreground">
          23–27 de fevereiro
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(true)}
          // className="h-36 w-auto transition-transform hover:scale-110 hover:bg-transparent"
        >
          <Menu size={100} className="text-xl h-96 w-96 text-foreground" />
        </Button>
      </header>

      <MainHeroSection />
      <NavigationLinksSection />
      <EventDaysSection onDayClick={handleDayClick} />

      {/* Image Section */}
      <section className="flex w-full justify-center py-20">
        <img
          className="w-full max-w-screen-xl object-cover"
          alt="Event Space"
          src="/img-12.png"
        />
      </section>

      <AnnouncementMarqueeSection />

      {/* Partners */}
      <section ref={partnersRef} id="contacto" className="w-full py-20">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-6 px-4">
          <h2 className="text-center text-2xl font-medium text-foreground">
            Parceiros &amp; Patrocínios
          </h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
            {partnersLogo.map((logo, index) => (
              <img
                key={index}
                ref={(el) => {
                  if (el) logoRefs.current[index] = el;
                }}
                className={`cursor-pointer ${logo.className}`}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteFooterSection />

      {/* Floating buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 h-20 w-20 p-0 transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-transparent"
      >
        <img className="h-full w-full" alt="Scroll to top" src="/arrow-3.svg" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={scrollToBottom}
        className="fixed bottom-8 right-32 z-50 h-20 w-20 p-0 transition-all duration-300 hover:translate-y-2 hover:scale-110 hover:bg-transparent"
      >
        <img
          className="h-full w-full"
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