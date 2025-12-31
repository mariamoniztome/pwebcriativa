import { useState } from "react";
import { JamItem } from "../../../../types/types";
import { GalleryItem } from "./components/GalleryItem";
import { jams } from "./data/data";
import { GalleryDialog } from "./components/Dialog";
import { Separator } from "../../../../components/ui/separator";

export const JamsGallerySection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState<JamItem | null>(null);

  return (
    <section className="relative bg-black py-24 px-4">
      <Separator className="mb-12 bg-white/20" />
      <div className="mx-auto  ">
        <h2 className="mb-12 text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-white">
          Jams
        </h2>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {jams.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              onOpen={setActiveItem}
            />
          ))}
        </div>
      </div>

      {/* Dialog */}
      <GalleryDialog
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </section>
  );
};