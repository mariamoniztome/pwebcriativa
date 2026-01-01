import { useEffect, useRef } from "react";
import gsap from "gsap";

const images = [
  "/fest-1.png",
  "/fest-2.png",
  "/fest-3.png",
  "/fest-4.png",
  "/fest-5.png",
  "/fest-6.png",
  "/fest-7.png",
  "/fest-8.png",
  "/fest-9.png",
];

export const WaveImageScroll = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const items = Array.from(
      track.querySelectorAll(".wave-item")
    ) as HTMLElement[];

    const update = () => {
      const viewportCenter = window.innerWidth / 2;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;

        const distance = Math.abs(viewportCenter - itemCenter);
        const maxDistance = window.innerWidth * 0.6;

        const progress = gsap.utils.clamp(
          0,
          1,
          1 - distance / maxDistance
        );

        gsap.to(item, {
          scale: 0.85 + progress * 0.4,
          y: (1 - progress) * 70,
          duration: 0.4,
          ease: "power3.out",
        });
      });
    };

    update();
    track.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <div
        ref={trackRef}
        className="
          flex gap-8
          overflow-x-scroll
          py-20 px-12
          no-scrollbar
        "
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="
              wave-item
              flex-shrink-0
              w-[260px] sm:w-[320px]
              h-[360px] sm:h-[420px]
              transition-transform
            "
          >
            <img
              src={src}
              alt=""
              className="
                h-full w-full
                rounded-2xl
                object-cover
                shadow-xl
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};