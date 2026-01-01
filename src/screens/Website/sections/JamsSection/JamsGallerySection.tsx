import { useState } from "react";
import { JamItem as JamItemType} from "../../../../types/types";
import { jams } from "./data/data";
import { Separator } from "../../../../components/ui/separator";
import { JamItem } from "./components/JamItem";
import { JamDialog } from "./components/JamDialog";

export const JamsGallerySection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState<JamItemType | null>(null);

  return (
    <section className="relative bg-black py-24 px-4">
      <Separator className="mb-12 bg-white/20" />
      <div className="mx-auto">
        <h2 className="mb-12 text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-white">
          Jams
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2">
          {jams.map((item) => (
            <JamItem
              key={item.id}
              item={item}
              onOpen={setActiveItem}
            />
          ))}
        </div>
      </div>

      {/* Dialog */}
      <JamDialog
        activeItem={activeItem}
        open={activeItem !== null}
        onOpenChange={() => setActiveItem(null)}
      />
    </section>
  );
};