import { Banner } from "./sections/Banner";
import { Header } from "./sections/Header";
import { Partners } from "./sections/Partners";
import { VideoSection } from "./sections/VideoSection";
import { FaqsSection } from "./sections/FaqsSection";
import { ParticipationSection } from "./sections/ParticipationSection";
import { Footer } from "./sections/Footer";
import { FestivalIntroSection } from "./sections/FestivalIntroSection";
import { PastEditionsSection } from "./sections/PastEditionsSection";
import { JamsGallerySection } from "./sections/JamsSection";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const App = (): JSX.Element => {
  // useEffect(() => {
  //   // Smooth scroll animation for sections
  //   const sections = gsap.utils.toArray("main > *");

  //   sections.forEach((section: any) => {
  //     gsap.fromTo(
  //       section,
  //       {
  //         opacity: 0,
  //         y: 50,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: section,
  //           start: "top 80%",
  //           end: "bottom 20%",
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });

  //   // Cleanup
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <>
      <Header />

      <main>
        <FestivalIntroSection />
        <Banner />
        <JamsGallerySection />
        <ParticipationSection />
        <VideoSection />
        <PastEditionsSection />
        <FaqsSection />
        <Partners />
        <Footer />
      </main>

      {/* Grain overlay
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 bg-[url('/grain.png')] opacity-20 mix-blend-overlay"
      /> */}
    </>
  );
};