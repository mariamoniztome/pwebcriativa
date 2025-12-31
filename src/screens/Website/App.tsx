import { Button } from "../../components/ui/button";
import { FaqsSection } from "./sections/FaqsSection";
import { FestivalIntroSection } from "./sections/FestivalIntroSection";
import { JamsGallerySection } from "./sections/JamsGallerySection";
import { ParticipationSection } from "./sections/ParticipationSection";
import { PartnersFooterSection } from "./sections/PartnersFooterSection";
import { PastEditionsSection } from "./sections/PastEditionsSection";

const partnerLogos = [
  {
    src: "/img-7.png",
    alt: "Partner logo",
    className:
      "row-[1_/_2] col-[1_/_2] justify-self-center self-center w-[149px] h-[47px]",
  },
  {
    src: "/img-6.png",
    alt: "Partner logo",
    className:
      "row-[1_/_2] col-[2_/_3] justify-self-start [align-self:end] w-full h-[64.08px]",
  },
  {
    src: "/img.png",
    alt: "Partner logo",
    className:
      "row-[1_/_2] col-[3_/_4] justify-self-start w-full h-[72.72px] object-cover",
  },
  {
    src: "/img-1.png",
    alt: "Partner logo",
    className:
      "row-[2_/_3] col-[1_/_2] justify-self-start w-full h-[72.72px] object-cover",
  },
  {
    src: "/img-10.png",
    alt: "Partner logo",
    className:
      "row-[2_/_3] col-[2_/_3] justify-self-start w-full h-[72.66px] object-cover",
  },
  {
    src: "/img-8.png",
    alt: "Partner logo",
    className:
      "row-[2_/_3] col-[3_/_4] justify-self-center self-center w-[148px] h-[50px]",
  },
  {
    src: "/img-2.png",
    alt: "Partner logo",
    className:
      "row-[3_/_4] col-[1_/_2] justify-self-start w-full h-[72.66px] object-cover",
  },
  {
    src: "/img-5.png",
    alt: "Partner logo",
    className:
      "row-[3_/_4] col-[2_/_3] justify-self-start w-full h-[72.88px] object-cover",
  },
  {
    src: "/img-3.png",
    alt: "Partner logo",
    className:
      "row-[3_/_4] col-[3_/_4] justify-self-start w-full h-[72.82px] object-cover",
  },
  {
    src: "/img-4.png",
    alt: "Partner logo",
    className:
      "row-[4_/_5] col-[1_/_2] justify-self-start w-full h-[72.88px] object-cover",
  },
  {
    src: "/img-9.png",
    alt: "Partner logo",
    className:
      "row-[4_/_5] col-[2_/_3] justify-self-start w-full h-[72.72px] object-cover",
  },
  {
    src: "/img-11.png",
    alt: "Partner logo",
    className:
      "row-[4_/_5] col-[3_/_4] justify-self-start [align-self:start] w-[223.58px] h-[77.83px] object-cover",
  },
];

export const App = (): JSX.Element => {
  return (
    <div className="bg-[#101010] overflow-x-hidden w-full min-w-[1440px] relative">
      <header className="fixed top-0 left-0 w-full h-[95px] z-50">
        <img
          className="absolute top-0 left-0 w-[1440px] h-[95px]"
          alt="Header"
          src="/header.svg"
        />
        <div className="absolute top-[22px] right-2.5 w-[292px] h-[52px]">
          <img
            className="absolute top-[calc(50.00%_-_24px)] left-[242px] w-[50px] h-[50px]"
            alt="Icon"
            src="/icon-1.png"
          />
          <Button className="flex w-[241px] h-[52px] items-center gap-2 px-6 py-4 absolute top-0 left-[calc(50.00%_-_146px)] bg-[#1010104c] rounded-[100px] overflow-hidden border border-solid border-neutral-100 backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] hover:bg-[#10101066]">
            <span className="relative w-fit mt-[-3.00px] mb-[-1.00px] mr-[-2.00px] [font-family:'Poppins',Helvetica] font-normal text-neutral-100 text-base tracking-[0] leading-[normal]">
              Garante os teus bilhetes
            </span>
          </Button>
        </div>
      </header>

      <FestivalIntroSection />

      <section className="relative w-full h-[378px] flex items-center justify-center bg-[#fa5302] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-neutral-100">
        <div className="mt-[1.0px] h-[174.98px] ml-0.5 w-[1220px] relative">
          <div className="absolute -top-px left-[145px] w-[1072px] h-[174px] flex items-center justify-center [-webkit-text-stroke:1px_#101010] [font-family:'Montserrat',Helvetica] font-bold text-[#101010] text-[115px] tracking-[0] leading-[145px] whitespace-nowrap">
            Feeling mad yet?
          </div>
          <img
            className="absolute w-[9.18%] top-[35px] left-0 h-[140px]"
            alt="Svg"
            src="/svg.svg"
          />
        </div>
      </section>

      <JamsGallerySection />

      <ParticipationSection />

      <section className="relative w-full h-[1350px]">
        <div className="w-full absolute top-0 h-[1350px]">
          <img
            className="left-[15px] w-[1410px] absolute top-0 h-[1350px]"
            alt="Video"
            src="/video.png"
          />
          <div className="absolute top-px left-0 w-full h-[1350px] bg-[#1010104c]" />
        </div>
        <div className="absolute top-[50.00%] left-[calc(50.00%_-_171px)] w-[313px] h-[58px]">
          <img
            className="absolute top-px left-[251px] w-[62px] h-[58px]"
            alt="Icon"
            src="/icon.png"
          />
          <Button className="flex w-[250px] h-[54px] items-center gap-2 px-6 py-4 absolute top-0 left-[calc(50.00%_-_156px)] rounded-[100px] overflow-hidden border border-solid border-neutral-100 backdrop-blur-[300px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(300px)_brightness(100%)] bg-transparent hover:bg-[#ffffff1a]">
            <span className="relative w-fit mt-[-2.14px] mb-[-0.14px] [font-family:'Poppins',Helvetica] font-normal text-neutral-100 text-base tracking-[0] leading-[normal]">
              Garante os teus bilhetes
            </span>
          </Button>
        </div>
      </section>

      <PastEditionsSection />

      <FaqsSection />

      <section className="relative flex flex-col max-w-[1920px] w-full items-start gap-[30px] pt-0 pb-[100px] px-[15px]">
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Divider"
          src="/divider.svg"
        />

        <div className="relative w-full flex justify-between items-start">
          <h2 className="relative w-[625px] h-[146px] [font-family:'Montserrat',Helvetica] font-bold text-neutral-100 text-8xl tracking-[0] leading-[120px]">
            Parceiros
          </h2>

          <div className="grid grid-cols-3 grid-rows-4 w-[705px] h-[308px] gap-[0px_26px] bg-[#101010]">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                className={`relative ${logo.className}`}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </div>
      </section>

      <PartnersFooterSection />

      <img
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100]"
        alt="Grain"
        src="/grain.png"
      />
    </div>
  );
};
