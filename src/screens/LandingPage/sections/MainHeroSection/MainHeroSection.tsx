import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const circularTextLetters = [
  {
    char: "O",
    rotation: "rotate-[-177.66deg]",
    top: "top-[109px]",
    left: "left-[53px]",
  },
  {
    char: "P",
    rotation: "rotate-[-172.99deg]",
    top: "top-[109px]",
    left: "left-[49px]",
  },
  {
    char: "E",
    rotation: "rotate-[-168.31deg]",
    top: "top-[108px]",
    left: "left-11",
  },
  {
    char: "N",
    rotation: "rotate-[-163.64deg]",
    top: "top-[107px]",
    left: "left-10",
  },
  {
    char: "D",
    rotation: "rotate-[-154.29deg]",
    top: "top-[104px]",
    left: "left-8",
  },
  {
    char: "E",
    rotation: "rotate-[-149.61deg]",
    top: "top-[101px]",
    left: "left-7",
  },
  {
    char: "T",
    rotation: "rotate-[-144.94deg]",
    top: "top-[99px]",
    left: "left-6",
  },
  { char: "A", rotation: "rotate-[-140.26deg]", top: "top-24", left: "left-5" },
  {
    char: "I",
    rotation: "rotate-[-135.59deg]",
    top: "top-[93px]",
    left: "left-[18px]",
  },
  {
    char: "L",
    rotation: "rotate-[-130.91deg]",
    top: "top-[90px]",
    left: "left-3.5",
  },
  {
    char: "S",
    rotation: "rotate-[-126.23deg]",
    top: "top-[87px]",
    left: "left-[11px]",
  },
  {
    char: "O",
    rotation: "rotate-[-116.88deg]",
    top: "top-[79px]",
    left: "left-[7px]",
  },
  {
    char: "P",
    rotation: "rotate-[-112.21deg]",
    top: "top-[75px]",
    left: "left-[5px]",
  },
  {
    char: "E",
    rotation: "rotate-[-107.53deg]",
    top: "top-[71px]",
    left: "left-1",
  },
  {
    char: "N",
    rotation: "rotate-[-102.86deg]",
    top: "top-[67px]",
    left: "left-0.5",
  },
  {
    char: "D",
    rotation: "rotate-[-93.51deg]",
    top: "top-[58px]",
    left: "left-px",
  },
  {
    char: "E",
    rotation: "rotate-[-88.83deg]",
    top: "top-[53px]",
    left: "left-px",
  },
  {
    char: "T",
    rotation: "rotate-[-84.16deg]",
    top: "top-[49px]",
    left: "left-px",
  },
  {
    char: "A",
    rotation: "rotate-[-79.48deg]",
    top: "top-[45px]",
    left: "left-0.5",
  },
  { char: "I", rotation: "rotate-[-74.81deg]", top: "top-10", left: "left-1" },
  {
    char: "L",
    rotation: "rotate-[-70.13deg]",
    top: "top-9",
    left: "left-[5px]",
  },
  { char: "S", rotation: "rotate-[-65.45deg]", top: "top-8", left: "left-1.5" },
  { char: "O", rotation: "rotate-[-56.10deg]", top: "top-6", left: "left-2.5" },
  {
    char: "P",
    rotation: "rotate-[-51.43deg]",
    top: "top-5",
    left: "left-[13px]",
  },
  {
    char: "E",
    rotation: "rotate-[-46.75deg]",
    top: "top-[17px]",
    left: "left-4",
  },
  {
    char: "N",
    rotation: "rotate-[-42.08deg]",
    top: "top-3.5",
    left: "left-[19px]",
  },
  {
    char: "D",
    rotation: "rotate-[-32.73deg]",
    top: "top-[9px]",
    left: "left-[26px]",
  },
  {
    char: "E",
    rotation: "rotate-[-28.05deg]",
    top: "top-1.5",
    left: "left-[30px]",
  },
  {
    char: "T",
    rotation: "rotate-[-23.38deg]",
    top: "top-1",
    left: "left-[34px]",
  },
  {
    char: "A",
    rotation: "rotate-[-18.70deg]",
    top: "top-[3px]",
    left: "left-[38px]",
  },
  {
    char: "I",
    rotation: "rotate-[-14.03deg]",
    top: "top-0.5",
    left: "left-[43px]",
  },
  {
    char: "L",
    rotation: "rotate-[-9.35deg]",
    top: "top-px",
    left: "left-[47px]",
  },
  {
    char: "S",
    rotation: "rotate-[-4.67deg]",
    top: "top-px",
    left: "left-[51px]",
  },
  {
    char: "O",
    rotation: "rotate-[4.67deg]",
    top: "top-px",
    left: "left-[60px]",
  },
  { char: "P", rotation: "rotate-[9.35deg]", top: "top-px", left: "left-16" },
  {
    char: "E",
    rotation: "rotate-[14.03deg]",
    top: "top-0.5",
    left: "left-[69px]",
  },
  {
    char: "N",
    rotation: "rotate-[18.70deg]",
    top: "top-[3px]",
    left: "left-[73px]",
  },
  {
    char: "D",
    rotation: "rotate-[28.05deg]",
    top: "top-1.5",
    left: "left-[81px]",
  },
  {
    char: "E",
    rotation: "rotate-[32.73deg]",
    top: "top-[9px]",
    left: "left-[86px]",
  },
  {
    char: "T",
    rotation: "rotate-[37.40deg]",
    top: "top-[11px]",
    left: "left-[88px]",
  },
  {
    char: "A",
    rotation: "rotate-[42.08deg]",
    top: "top-3.5",
    left: "left-[92px]",
  },
  {
    char: "I",
    rotation: "rotate-[46.75deg]",
    top: "top-[17px]",
    left: "left-24",
  },
  {
    char: "L",
    rotation: "rotate-[51.43deg]",
    top: "top-[21px]",
    left: "left-[99px]",
  },
  {
    char: "S",
    rotation: "rotate-[56.10deg]",
    top: "top-6",
    left: "left-[101px]",
  },
  {
    char: "O",
    rotation: "rotate-[65.45deg]",
    top: "top-8",
    left: "left-[105px]",
  },
  {
    char: "P",
    rotation: "rotate-[70.13deg]",
    top: "top-9",
    left: "left-[107px]",
  },
  {
    char: "E",
    rotation: "rotate-[74.81deg]",
    top: "top-[41px]",
    left: "left-[109px]",
  },
  {
    char: "N",
    rotation: "rotate-[79.48deg]",
    top: "top-[45px]",
    left: "left-[109px]",
  },
  {
    char: "D",
    rotation: "rotate-[88.83deg]",
    top: "top-[53px]",
    left: "left-[110px]",
  },
  {
    char: "E",
    rotation: "rotate-[93.51deg]",
    top: "top-[58px]",
    left: "left-[110px]",
  },
  {
    char: "T",
    rotation: "rotate-[98.18deg]",
    top: "top-[62px]",
    left: "left-[109px]",
  },
  {
    char: "A",
    rotation: "rotate-[102.86deg]",
    top: "top-[67px]",
    left: "left-[109px]",
  },
  {
    char: "I",
    rotation: "rotate-[107.53deg]",
    top: "top-[71px]",
    left: "left-[108px]",
  },
  {
    char: "L",
    rotation: "rotate-[112.21deg]",
    top: "top-[75px]",
    left: "left-[106px]",
  },
  {
    char: "S",
    rotation: "rotate-[116.88deg]",
    top: "top-[79px]",
    left: "left-[104px]",
  },
  {
    char: "O",
    rotation: "rotate-[126.23deg]",
    top: "top-[87px]",
    left: "left-[99px]",
  },
  {
    char: "P",
    rotation: "rotate-[130.91deg]",
    top: "top-[90px]",
    left: "left-[97px]",
  },
  {
    char: "E",
    rotation: "rotate-[135.59deg]",
    top: "top-[94px]",
    left: "left-[94px]",
  },
  {
    char: "N",
    rotation: "rotate-[140.26deg]",
    top: "top-24",
    left: "left-[90px]",
  },
  {
    char: "D",
    rotation: "rotate-[149.61deg]",
    top: "top-[102px]",
    left: "left-[83px]",
  },
  {
    char: "E",
    rotation: "rotate-[154.29deg]",
    top: "top-[104px]",
    left: "left-[79px]",
  },
  {
    char: "T",
    rotation: "rotate-[158.96deg]",
    top: "top-[105px]",
    left: "left-[75px]",
  },
  {
    char: "A",
    rotation: "rotate-[163.64deg]",
    top: "top-[107px]",
    left: "left-[71px]",
  },
  {
    char: "I",
    rotation: "rotate-[168.31deg]",
    top: "top-[108px]",
    left: "left-[67px]",
  },
  {
    char: "L",
    rotation: "rotate-[172.99deg]",
    top: "top-[109px]",
    left: "left-[62px]",
  },
  {
    char: "S",
    rotation: "rotate-[177.66deg]",
    top: "top-[109px]",
    left: "left-[58px]",
  },
];

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
      <div className="flex w-full items-end justify-center px-[11.02px] pt-[115.2px] pb-[11.51px] bg-[#101010]">
        <h1
          ref={titleRef}
          className="flex-1 text-center [font-family:'Neue_Montreal-Bold',Helvetica] font-bold text-neutral-100 text-[180px] tracking-[0] leading-[180px]"
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

          <div className="absolute top-[-227px] left-px w-full h-[2181px] bg-[#1010104c] rotate-[-0.01deg]" />
        </div>
      </div>

      <div
        ref={badgeRef}
        className="absolute top-[707px] left-[289px] w-[214px] h-[206px] cursor-pointer hover:scale-110 transition-transform duration-300"
      >
        <div className="absolute top-[5px] left-[3px] w-[135px] h-[136px] bg-neutral-100 rounded-[67.5px/68px] shadow-[0px_4px_4px_#00000040]" />

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
