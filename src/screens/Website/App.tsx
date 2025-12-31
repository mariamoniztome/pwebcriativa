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


export const App = (): JSX.Element => {
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

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 bg-[url('/grain.png')]"
      />
    </>
  );
};