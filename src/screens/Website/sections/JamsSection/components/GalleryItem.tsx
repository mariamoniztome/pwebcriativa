import { JamItem } from "../../../../../types/types";
import { useState } from "react";
import Cursor from "../../../components/Cursor/Cursor";

type GalleryItemProps = {
  item: JamItem;
  onOpen: (item: JamItem) => void;
};

export const GalleryItem = ({ item, onOpen }: GalleryItemProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      onClick={() => onOpen(item)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative aspect-[6/3] w-full cursor-none border-2 border-transparent p-3 transition-all duration-300 hover:border-primary"
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

      {/* Custom Cursor */}
      {isHovering && (
        <div
          className="pointer-events-none absolute z-50 h-32 w-32"
          style={{
            left: cursorPosition.x - 64,
            top: cursorPosition.y - 64,
          }}
        >
          <Cursor text={"Open details"} />
        </div>
      )}
    </button>
  );
};