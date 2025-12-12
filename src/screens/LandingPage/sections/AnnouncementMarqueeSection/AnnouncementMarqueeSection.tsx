import { Star } from "lucide-react";

const marqueeItems = Array(15).fill({
  text: "ESCOLA SUPERIOR DE MEDIA ARTES E DESIGN",
});

export const AnnouncementMarqueeSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-1">
      <div className="w-full flex items-center bg-primary overflow-hidden py-12">
        <div className="flex h-10 items-start gap-10 animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div
              key={`marquee-1-${index}`}
              className="flex w-80 items-center justify-center gap-2.5 flex-shrink-0"
            >
              <div className="flex-1 font-montreal-bold font-bold text-background text-xl tracking-wider leading-5">
                {item.text}
              </div>
              <Star className="w-2.5 h-2.5 fill-background text-background" />
            </div>
          ))}
          {marqueeItems.map((item, index) => (
            <div
              key={`marquee-1-duplicate-${index}`}
              className="flex w-80 items-center justify-center gap-2.5 flex-shrink-0"
            >
              <div className="flex-1 font-montreal-bold font-bold text-background text-xl tracking-wider leading-5">
                {item.text}
              </div>
              <Star className="w-2.5 h-2.5 fill-background text-background" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center bg-secondary overflow-hidden py-12 rotate-[3.48deg]">
        <div className="flex h-10 items-start gap-10 animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div
              key={`marquee-2-${index}`}
              className="flex w-80 items-center justify-center gap-2.5 flex-shrink-0"
            >
              <div className="flex-1 font-montreal-bold font-bold text-background text-xl tracking-wider leading-5">
                {item.text}
              </div>
              <Star className="w-2.5 h-2.5 fill-background text-background -rotate-[3.48deg]" />
            </div>
          ))}
          {marqueeItems.map((item, index) => (
            <div
              key={`marquee-2-duplicate-${index}`}
              className="flex w-80 items-center justify-center gap-2.5 flex-shrink-0"
            >
              <div className="flex-1 font-montreal-bold font-bold text-background text-xl tracking-wider leading-5">
                {item.text}
              </div>
              <Star className="w-2.5 h-2.5 fill-background text-background -rotate-[3.48deg]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
