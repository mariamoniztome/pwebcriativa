import { Edition } from "../../../../../types/types";
import { EditionWrapper } from "./EditionWrapper";

type EditionTileProps = {
  edition: Edition;
  index: number;
  onHover: (index: number) => void;
  onOpenDialog: (edition: Edition) => void;
};

const EditionTile = ({
  edition,
  index,
  onHover,
  onOpenDialog,
}: EditionTileProps) => {
  return (
    <div
      className="
        edition-tile
        relative h-full
        overflow-hidden
        cursor-pointer
        bg-black
      "
      onMouseEnter={() => onHover(index)}
      onClick={() => onOpenDialog(edition)}
    >
      {/* Background image */}
      <img
        src={edition.image}
        alt={`Edição ${edition.year}`}
        className="
          absolute inset-0 h-full w-full
          object-cover
        "
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Year (always visible) */}
      <div
        className="
          absolute bottom-16 left-12
          -translate-x-1/2
          -rotate-90
          text-white
          text-7xl font-normal
          tracking-widest
          pointer-events-none
          z-10
        "
      >
        {edition.year}
      </div>

      {/* Hover / expanded content */}
      <div
        className="
          edition-content
          absolute inset-0 z-20
          flex items-center justify-end
          opacity-0 px-2
        "
      >
        <EditionWrapper />
      </div>
    </div>
  );
};

export { EditionTile };