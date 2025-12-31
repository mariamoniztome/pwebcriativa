import { JamItem } from "../../../../../types/types";

type GalleryItemProps = {
  item: JamItem;
  onOpen: (item: JamItem) => void;
};

export const GalleryItem = ({ item, onOpen }: GalleryItemProps) => {
  return (
    <button
      onClick={() => onOpen(item)}
      className="group relative aspect-[4/3] w-full overflow-hidden"
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-4xl font-bold tracking-wide text-orange-500">
          PHOTO
        </span>
      </div>
    </button>
  );
};