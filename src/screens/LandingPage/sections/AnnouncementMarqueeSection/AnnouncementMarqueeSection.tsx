const marqueeItems = Array(15).fill({
  text: "ESCOLA SUPERIOR DE MEDIA ARTES E DESIGN",
});

export const AnnouncementMarqueeSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-1">
      <div className="w-full flex items-center bg-[#fa5302] overflow-hidden py-12">
        <div className="flex h-10 items-start gap-10 animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div
              key={`marquee-1-${index}`}
              className="flex w-80 items-center justify-center gap-2.5 flex-shrink-0"
            >
              <div className="flex-1 font-montreal-bold font-bold text-[#101010] text-xl tracking-wider leading-5">
                {item.text}
              </div>
              <img
                className="w-2.5 h-2.5"
                alt="Vector"
                src="/vector.svg"
              />
            </div>
          ))}
          {marqueeItems.map((item, index) => (
            <div
              key={`marquee-1-duplicate-${index}`}
              className="flex w-80 items-center justify-center gap-2.5 flex-shrink-0"
            >
              <div className="flex-1 font-montreal-bold font-bold text-[#101010] text-xl tracking-wider leading-5">
                {item.text}
              </div>
              <img
                className="w-2.5 h-2.5"
                alt="Vector"
                src="/vector.svg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center bg-[#febf01] overflow-hidden py-12 rotate-[3.48deg]">
        <div className="flex h-10 items-start gap-10 animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div
              key={`marquee-2-${index}`}
              className="flex w-80 items-center justify-center gap-2.5 flex-shrink-0"
            >
              <div className="flex-1 font-montreal-bold font-bold text-[#101010] text-xl tracking-wider leading-5">
                {item.text}
              </div>
              <img
                className="w-2.5 h-2.5 rotate-[-3.48deg]"
                alt="Vector"
                src="/vector-3.svg"
              />
            </div>
          ))}
          {marqueeItems.map((item, index) => (
            <div
              key={`marquee-2-duplicate-${index}`}
              className="flex w-80 items-center justify-center gap-2.5 flex-shrink-0"
            >
              <div className="flex-1 font-montreal-bold font-bold text-[#101010] text-xl tracking-wider leading-5">
                {item.text}
              </div>
              <img
                className="w-2.5 h-2.5 rotate-[-3.48deg]"
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
