import React from "react";

const circularTextLetters = [
  {
    char: "O",
    rotation: "rotate-[-177.66deg]",
    top: "top-28",
    left: "left-12",
  },
  {
    char: "P",
    rotation: "rotate-[-172.99deg]",
    top: "top-28",
    left: "left-12",
  },
  {
    char: "E",
    rotation: "rotate-[-168.31deg]",
    top: "top-28",
    left: "left-11",
  },
  {
    char: "N",
    rotation: "rotate-[-163.64deg]",
    top: "top-28",
    left: "left-10",
  },
  {
    char: "D",
    rotation: "rotate-[-154.29deg]",
    top: "top-24",
    left: "left-8",
  },
  {
    char: "E",
    rotation: "rotate-[-149.61deg]",
    top: "top-24",
    left: "left-7",
  },
  {
    char: "T",
    rotation: "rotate-[-144.94deg]",
    top: "top-24",
    left: "left-6",
  },
  { char: "A", rotation: "rotate-[-140.26deg]", top: "top-24", left: "left-5" },
  {
    char: "I",
    rotation: "rotate-[-135.59deg]",
    top: "top-24",
    left: "left-5",
  },
  {
    char: "L",
    rotation: "rotate-[-130.91deg]",
    top: "top-20",
    left: "left-3.5",
  },
  {
    char: "S",
    rotation: "rotate-[-126.23deg]",
    top: "top-20",
    left: "left-3",
  },
  {
    char: "O",
    rotation: "rotate-[-116.88deg]",
    top: "top-20",
    left: "left-2",
  },
  {
    char: "P",
    rotation: "rotate-[-112.21deg]",
    top: "top-16",
    left: "left-1",
  },
  {
    char: "E",
    rotation: "rotate-[-107.53deg]",
    top: "top-16",
    left: "left-1",
  },
  {
    char: "N",
    rotation: "rotate-[-102.86deg]",
    top: "top-16",
    left: "left-0.5",
  },
  {
    char: "D",
    rotation: "rotate-[-93.51deg]",
    top: "top-14",
    left: "left-px",
  },
  {
    char: "E",
    rotation: "rotate-[-88.83deg]",
    top: "top-12",
    left: "left-px",
  },
  {
    char: "T",
    rotation: "rotate-[-84.16deg]",
    top: "top-12",
    left: "left-px",
  },
  {
    char: "A",
    rotation: "rotate-[-79.48deg]",
    top: "top-10",
    left: "left-0.5",
  },
  { char: "I", rotation: "rotate-[-74.81deg]", top: "top-10", left: "left-1" },
  {
    char: "L",
    rotation: "rotate-[-70.13deg]",
    top: "top-9",
    left: "left-1",
  },
  { char: "S", rotation: "rotate-[-65.45deg]", top: "top-8", left: "left-1.5" },
  { char: "O", rotation: "rotate-[-56.10deg]", top: "top-6", left: "left-2.5" },
  {
    char: "P",
    rotation: "rotate-[-51.43deg]",
    top: "top-5",
    left: "left-3",
  },
  {
    char: "E",
    rotation: "rotate-[-46.75deg]",
    top: "top-4",
    left: "left-4",
  },
  {
    char: "N",
    rotation: "rotate-[-42.08deg]",
    top: "top-3.5",
    left: "left-5",
  },
  {
    char: "D",
    rotation: "rotate-[-32.73deg]",
    top: "top-2",
    left: "left-6",
  },
  {
    char: "E",
    rotation: "rotate-[-28.05deg]",
    top: "top-1.5",
    left: "left-8",
  },
  {
    char: "T",
    rotation: "rotate-[-23.38deg]",
    top: "top-1",
    left: "left-8",
  },
  {
    char: "A",
    rotation: "rotate-[-18.70deg]",
    top: "top-1",
    left: "left-10",
  },
  {
    char: "I",
    rotation: "rotate-[-14.03deg]",
    top: "top-0.5",
    left: "left-10",
  },
  {
    char: "L",
    rotation: "rotate-[-9.35deg]",
    top: "top-px",
    left: "left-12",
  },
  {
    char: "S",
    rotation: "rotate-[-4.67deg]",
    top: "top-px",
    left: "left-12",
  },
  {
    char: "O",
    rotation: "rotate-[4.67deg]",
    top: "top-px",
    left: "left-14",
  },
  { char: "P", rotation: "rotate-[9.35deg]", top: "top-px", left: "left-16" },
  {
    char: "E",
    rotation: "rotate-[14.03deg]",
    top: "top-0.5",
    left: "left-16",
  },
  {
    char: "N",
    rotation: "rotate-[18.70deg]",
    top: "top-1",
    left: "left-18",
  },
  {
    char: "D",
    rotation: "rotate-[28.05deg]",
    top: "top-1.5",
    left: "left-20",
  },
  {
    char: "E",
    rotation: "rotate-[32.73deg]",
    top: "top-2",
    left: "left-20",
  },
  {
    char: "T",
    rotation: "rotate-[37.40deg]",
    top: "top-3",
    left: "left-20",
  },
  {
    char: "A",
    rotation: "rotate-[42.08deg]",
    top: "top-3.5",
    left: "left-20",
  },
  {
    char: "I",
    rotation: "rotate-[46.75deg]",
    top: "top-4",
    left: "left-24",
  },
  {
    char: "L",
    rotation: "rotate-[51.43deg]",
    top: "top-5",
    left: "left-24",
  },
  {
    char: "S",
    rotation: "rotate-[56.10deg]",
    top: "top-6",
    left: "left-24",
  },
  {
    char: "O",
    rotation: "rotate-[65.45deg]",
    top: "top-8",
    left: "left-24",
  },
  {
    char: "P",
    rotation: "rotate-[70.13deg]",
    top: "top-9",
    left: "left-24",
  },
  {
    char: "E",
    rotation: "rotate-[74.81deg]",
    top: "top-10",
    left: "left-24",
  },
  {
    char: "N",
    rotation: "rotate-[79.48deg]",
    top: "top-10",
    left: "left-24",
  },
  {
    char: "D",
    rotation: "rotate-[88.83deg]",
    top: "top-12",
    left: "left-24",
  },
  {
    char: "E",
    rotation: "rotate-[93.51deg]",
    top: "top-14",
    left: "left-24",
  },
  {
    char: "T",
    rotation: "rotate-[98.18deg]",
    top: "top-16",
    left: "left-24",
  },
  {
    char: "A",
    rotation: "rotate-[102.86deg]",
    top: "top-16",
    left: "left-24",
  },
  {
    char: "I",
    rotation: "rotate-[107.53deg]",
    top: "top-16",
    left: "left-24",
  },
  {
    char: "L",
    rotation: "rotate-[112.21deg]",
    top: "top-16",
    left: "left-24",
  },
  {
    char: "S",
    rotation: "rotate-[116.88deg]",
    top: "top-20",
    left: "left-24",
  },
  {
    char: "O",
    rotation: "rotate-[126.23deg]",
    top: "top-20",
    left: "left-24",
  },
  {
    char: "P",
    rotation: "rotate-[130.91deg]",
    top: "top-20",
    left: "left-24",
  },
  {
    char: "E",
    rotation: "rotate-[135.59deg]",
    top: "top-24",
    left: "left-24",
  },
  {
    char: "N",
    rotation: "rotate-[140.26deg]",
    top: "top-24",
    left: "left-20",
  },
  {
    char: "D",
    rotation: "rotate-[149.61deg]",
    top: "top-24",
    left: "left-20",
  },
  {
    char: "E",
    rotation: "rotate-[154.29deg]",
    top: "top-24",
    left: "left-20",
  },
  {
    char: "T",
    rotation: "rotate-[158.96deg]",
    top: "top-24",
    left: "left-16",
  },
  {
    char: "A",
    rotation: "rotate-[163.64deg]",
    top: "top-28",
    left: "left-16",
  },
  {
    char: "I",
    rotation: "rotate-[168.31deg]",
    top: "top-28",
    left: "left-16",
  },
  {
    char: "L",
    rotation: "rotate-[172.99deg]",
    top: "top-28",
    left: "left-16",
  },
  {
    char: "S",
    rotation: "rotate-[177.66deg]",
    top: "top-28",
    left: "left-14",
  },
];

export const MainHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="flex w-full items-end justify-center px-3 pt-28 pb-3 bg-background">
        <h1 className="flex-1 text-center font-montreal-bold font-bold text-foreground text-9xl leading-tight animate-fade-in-up">
          UMA DÉCADA <br />
          MAD JAM FEST
        </h1>
      </div>

      <div className="flex flex-col w-full items-start p-2.5">
        <div className="relative self-stretch w-full h-screen overflow-hidden animate-fade-in">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover scale-110"
            alt="Video"
            src="/video.png"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-background/30" />
        </div>
      </div>

      <div className="absolute top-1/2 left-72 w-52 h-52 cursor-pointer hover:scale-110 transition-transform duration-300 animate-spin-slow">
        <div className="absolute top-1 left-1 w-32 h-32 bg-foreground rounded-full shadow-md" />

        <div className="absolute top-4 left-3 w-60 h-28">
          {circularTextLetters.map((letter, index) => (
            <div
              key={`letter-${index}`}
              className={`absolute w-1 h-1 ${letter.top} ${letter.left} flex items-end justify-center ${letter.rotation} font-sans font-normal text-black text-xs text-center whitespace-nowrap`}
            >
              {letter.char}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
