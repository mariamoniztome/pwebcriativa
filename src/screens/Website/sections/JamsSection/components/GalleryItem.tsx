import { JamItem } from "../../../../../types/types";

type GalleryItemProps = {
  item: JamItem;
  onOpen: (item: JamItem) => void;
};

export const GalleryItem = ({ item, onOpen }: GalleryItemProps) => {
  return (
    <button
      onClick={() => onOpen(item)}
      className="group relative aspect-[6/3] w-full border-2 border-transparent p-3 transition-all duration-300 hover:border-primary"
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-4xl font-bold tracking-wide text-primary">
            {item.category}
          </span>
        </div>
      </div>
    </button>
  );
};