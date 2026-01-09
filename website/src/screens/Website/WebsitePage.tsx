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
import { ScrollButton } from "./components/ScrollButton/ScrollButton";

export const WebsitePage = (): JSX.Element => {
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
        <ScrollButton />
      </main>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[999999999999999999] bg-[url('/grain.png')]"
      />
    </>
  );
};