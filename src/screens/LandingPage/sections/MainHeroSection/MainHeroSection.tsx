import { circularTextLetters } from "../../../../assets/data/circularTextLetters";

export const MainHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="flex w-full items-end justify-center px-3 pt-28 pb-3 bg-background">
        <h1 className="flex-1 font-montreal-bold font-extrabold text-foreground text-title leading-[1.45] tracking-normal animate-fade-in-up">
  UMA DÉCADA
  <br />
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
              className={`absolute w-1 h-1 ${letter.top} ${letter.left} flex items-end justify-center ${letter.rotation} font-sans font-normal text-black text-xs  whitespace-nowrap`}
            >
              {letter.char}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
