import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { EditionTile } from "./components/EditionTile";
import { EditionDialog } from "./components/EditionDialog";
import editionsData from "./data/data";
import { Edition } from "../../../../types/types";
import { Separator } from "../../../../components/ui/separator";

export const PastEditionsSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeEdition, setActiveEdition] = useState<Edition | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tiles = gsap.utils.toArray<HTMLDivElement>(
      containerRef.current.querySelectorAll(".edition-tile")
    );

    tiles.forEach((tile, i) => {
      gsap.set(tile, {
        width: i === activeIndex ? 500 : 120,
        zIndex: i === activeIndex ? 10 : 1,
      });
    });
  }, []);

  const handleHover = (index: number) => {
    if (!containerRef.current) return;

    const tiles = gsap.utils.toArray<HTMLDivElement>(
      containerRef.current.querySelectorAll(".edition-tile")
    );

    tiles.forEach((tile, i) => {
      gsap.to(tile, {
        width: i === index ? 500 : 120,
        duration: 0.5,
        ease: "power3.out",
        zIndex: i === index ? 10 : 1,
      });

      const content = tile.querySelector(".edition-content");
      if (content) {
        gsap.to(content, {
          opacity: i === index ? 1 : 0,
          duration: 0.3,
          delay: i === index ? 0.2 : 0,
        });
      }
    });

    setActiveIndex(index);
  };

  return (
    <section className="relative bg-black py-24 px-4">
      <Separator className="mb-12 bg-white" />
      <div className="mx-auto  ">
        <h2 className="mb-12 text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-white">
          Edições passadas
        </h2>

        <div
          ref={containerRef}
          className="flex h-[600px] gap-3 overflow-hidden"
        >
          {editionsData.map((edition, index) => (
            <EditionTile
              key={edition.year}
              edition={edition}
              index={index}
              onHover={handleHover}
              onOpenDialog={setActiveEdition}
            />
          ))}
        </div>
      </div>

      {/* ONE shared dialog */}
      <EditionDialog
        edition={activeEdition}
        onClose={() => setActiveEdition(null)}
      />
    </section>
  );
};