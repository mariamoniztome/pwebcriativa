import { Banner } from "./sections/Banner";
import { Header } from "./sections/Header";
import { Partners } from "./sections/Partners";
import { VideoSection } from "./sections/VideoSection";
import { FaqsSection } from "./sections/FaqsSection";
import { FestivalIntroSection } from "./sections/FestivalIntroSection";
import { ParticipationSection } from "./sections/ParticipationSection";
import { PartnersFooterSection } from "./sections/PartnersFooterSection";
import { PastEditionsSection } from "./sections/PastEditionsSection";
import { JamsGallerySection } from "./sections/JamsSection";

export const App = (): JSX.Element => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-neutral-950">
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
        <PartnersFooterSection />
      </main>

      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 bg-[url('/grain.png')] opacity-20 mix-blend-overlay"
      />
    </div>
  );
};