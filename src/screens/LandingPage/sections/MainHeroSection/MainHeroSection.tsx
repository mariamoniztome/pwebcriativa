import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { circularTextLetters } from "../../../../assets/data/circularTextLetters";

gsap.registerPlugin(ScrollTrigger);


export const MainHeroSection = (): JSX.Element => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }

    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          delay: 0.3,
          ease: "power2.out",
        }
      );
    }

    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { scale: 0, rotate: -180 },
        {
          scale: 1,
          rotate: 0,
          duration: 1,
          delay: 0.8,
          ease: "back.out(1.7)",
        }
      );

      gsap.to(badgeRef.current, {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <section className="relative w-full">
      <div className="flex w-full items-end justify-center px-[11.02px] pt-[115.2px] pb-[11.51px] bg-background">
        <h1
          ref={titleRef}
          className="flex-1 text-center [font-family:'Neue_Montreal-Bold',Helvetica] font-bold text-foreground text-[180px] tracking-[0] leading-[180px]"
        >
          UMA DÉCADA <br />
          MAD JAM FEST
        </h1>
      </div>

      <div className="flex flex-col w-full items-start p-2.5">
        <div
          ref={videoRef}
          className="relative self-stretch w-full h-[1091.3px] overflow-hidden rotate-[0.01deg]"
        >
          <img
            className="absolute top-[-193px] left-0 w-full h-[1469px] rotate-[-0.01deg] object-cover"
            alt="Video"
            src="/video.png"
          />

          <div className="absolute top-[-227px] left-px w-full h-[2181px] bg-background/30 rotate-[-0.01deg]" />
        </div>
      </div>

      <div
        ref={badgeRef}
        className="absolute top-[707px] left-[289px] w-[214px] h-[206px] cursor-pointer hover:scale-110 transition-transform duration-300"
      >
        <div className="absolute top-[5px] left-[3px] w-[135px] h-[136px] bg-foreground rounded-[67.5px/68px] shadow-md" />

        <div className="absolute top-4 left-[13px] w-[246px] h-[114px]">
          {circularTextLetters.map((letter, index) => (
            <div
              key={`letter-${index}`}
              className={`absolute w-[calc(100%_-_243px)] h-[calc(100%_-_109px)] ${letter.top} ${letter.left} flex items-end justify-center ${letter.rotation} [font-family:'Inter',Helvetica] font-normal text-black text-[5px] text-center tracking-[0] leading-[normal] whitespace-nowrap`}
            >
              {letter.char}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
