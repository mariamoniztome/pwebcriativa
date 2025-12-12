import { useState } from "react";
import { Menu, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "../../components/ui/button";
import { MobileMenu } from "../../components/MobileMenu/MobileMenu";
import { EventDayDialog } from "../../components/EventDayDialog/EventDayDialog";
import { MainHeroSection } from "./sections/MainHeroSection/MainHeroSection";
import { NavigationLinksSection } from "./sections/NavigationLinksSection/NavigationLinksSection";
import { EventDaysSection } from "./sections/EventDaysSection/EventDaysSection";
import { AnnouncementMarqueeSection } from "./sections/AnnouncementMarqueeSection/AnnouncementMarqueeSection";
import { SiteFooterSection } from "./sections/SiteFooterSection/SiteFooterSection";
import { partnerLogos } from "../../assets/data/partnersLogo";

export const LandingPage = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState({ day: "", date: "" });

  const handleDayClick = (day: string, date: string) => {
    setSelectedDay({ day, date });
    setIsDialogOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="bg-background overflow-x-hidden w-full min-w-screen-xl relative">
      <header className="flex max-w-full w-screen-xl h-32 items-end justify-center px-3 pt-28 pb-3 relative bg-background">
        <div className="relative flex items-center justify-center w-64 h-32 font-montreal font-normal text-foreground text-3xl tracking-normal leading-relaxed whitespace-nowrap">
          23-27 de fevereiro
        </div>

        <div className="absolute top-px left-0 w-full h-32">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(true)}
            className="absolute top-12 right-0 w-16 h-8 p-0 hover:bg-transparent hover:scale-110 transition-transform duration-300"
          >
            <Menu className="w-8 h-8 text-foreground" />
          </Button>

          <img
            className="absolute top-0 left-0 w-32 h-32 object-cover"
            alt="Logo"
            src="/logo.png"
          />
        </div>
      </header>

      <MainHeroSection />
      <NavigationLinksSection />
      <EventDaysSection onDayClick={handleDayClick} />

      <section className="flex w-full justify-center py-20">
        <img
          className="w-full max-w-screen-xl h-auto object-cover"
          alt="Event Space"
          src="/img-12.png"
        />
      </section>

      <AnnouncementMarqueeSection />

      <section id="contacto" className="relative w-full py-20">
        <div className="w-screen-xl mx-auto flex flex-col gap-3">
          <h2 className="flex items-center justify-center ml-10 w-72 h-8 font-montreal-medium font-medium text-foreground text-h3 whitespace-nowrap">
            Parceiros &amp; Patrocinios
          </h2>

          <div className="grid w-screen-xl h-40 relative grid-cols-6 grid-rows-2 gap-6 bg-background">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                className={`relative cursor-pointer hover:scale-110 transition-transform duration-300 ${logo.className}`}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteFooterSection />

      <Button
        variant="ghost"
        size="icon"
        onClick={scrollToTop}
        className="top-96 right-32 fixed w-20 h-20 p-0 hover:bg-transparent hover:scale-110 hover:-translate-y-2 transition-all duration-300"
      >
        <ChevronUp className="w-full h-full text-foreground" strokeWidth={1} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={scrollToBottom}
        className="bottom-32 right-32 fixed w-20 h-20 p-0 hover:bg-transparent hover:scale-110 hover:translate-y-2 transition-all duration-300"
      >
        <ChevronDown className="w-full h-full text-foreground" strokeWidth={1} />
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
