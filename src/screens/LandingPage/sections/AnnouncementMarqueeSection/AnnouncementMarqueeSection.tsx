import React from "react";

const marqueeItems = Array(15).fill({
  text: "ESCOLA SUPERIOR DE MEDIA ARTES E DESIGN",
});

export const AnnouncementMarqueeSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-[2.4px]">
      <div className="w-full flex items-center bg-[#fa5302] overflow-hidden py-12">
        <div className="flex h-10 items-start gap-[41px] animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div
              key={`marquee-1-${index}`}
              className="flex w-[307px] items-center justify-center gap-2.5 flex-shrink-0"
            >
              <div className="flex-1 [font-family:'Neue_Montreal-Bold',Helvetica] font-bold text-[#101010] text-xl tracking-[1.50px] leading-5">
                {item.text}
              </div>
              <img
                className="w-[10.01px] h-2.5"
                alt="Vector"
                src="/vector.svg"
              />
            </div>
          ))}
          {marqueeItems.map((item, index) => (
            <div
              key={`marquee-1-duplicate-${index}`}
              className="flex w-[307px] items-center justify-center gap-2.5 flex-shrink-0"
            >
              <div className="flex-1 [font-family:'Neue_Montreal-Bold',Helvetica] font-bold text-[#101010] text-xl tracking-[1.50px] leading-5">
                {item.text}
              </div>
              <img
                className="w-[10.01px] h-2.5"
                alt="Vector"
                src="/vector.svg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center bg-[#febf01] overflow-hidden py-12 rotate-[3.48deg]">
        <div className="flex h-10 items-start gap-[41px] animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div
              key={`marquee-2-${index}`}
              className="flex w-[307px] items-center justify-center gap-2.5 flex-shrink-0"
            >
              <div className="flex-1 [font-family:'Neue_Montreal-Bold',Helvetica] font-bold text-[#101010] text-xl tracking-[1.50px] leading-5">
                {item.text}
              </div>
              <img
                className="w-[10.24px] h-[10.6px] rotate-[-3.48deg]"
                alt="Vector"
                src="/vector-3.svg"
              />
            </div>
          ))}
          {marqueeItems.map((item, index) => (
            <div
              key={`marquee-2-duplicate-${index}`}
              className="flex w-[307px] items-center justify-center gap-2.5 flex-shrink-0"
            >
              <div className="flex-1 [font-family:'Neue_Montreal-Bold',Helvetica] font-bold text-[#101010] text-xl tracking-[1.50px] leading-5">
                {item.text}
              </div>
              <img
                className="w-[10.24px] h-[10.6px] rotate-[-3.48deg]"
                alt="Vector"
                src="/vector-3.svg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
