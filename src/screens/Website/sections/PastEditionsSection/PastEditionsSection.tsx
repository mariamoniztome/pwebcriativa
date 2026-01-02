import { useState } from "react";
import { EditionTile } from "./components/EditionTile";
import editionsData from "./data/editionsData";
import { Edition } from "../../../../types/types";
import { Separator } from "../../../../components/ui/separator";
import { EditionDialog } from "./components/EditionDialog";

export const PastEditionsSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeEdition, setActiveEdition] = useState<Edition | null>(null);

  const handleHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative bg-black py-24 px-4">
      <Separator className="mb-12 bg-white" />
      <div className="mx-auto  ">
        <h2 className="mb-12 text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-white">
          Edições passadas
        </h2>

        <div className="flex h-[600px] gap-3 overflow-hidden">
          {editionsData.map((edition, index) => (
            <EditionTile
              key={edition.year}
              edition={edition}
              index={index}
              isActive={index === activeIndex}
              onHover={handleHover}
              onOpenDialog={setActiveEdition}
            />
          ))}
        </div>
      </div>

      <EditionDialog
        edition={activeEdition}
        onClose={() => setActiveEdition(null)}
      />
    </section>
  );
};