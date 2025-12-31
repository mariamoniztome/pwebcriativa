import { Edition } from "../../../../../types/types";

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
        src={edition.coverImage}
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
          absolute bottom-8 left-1/2
          -translate-x-1/2
          rotate-90
          text-white
          text-6xl font-light
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
          flex items-center justify-center
          opacity-0
        "
      >
        <span
          className="
            rounded-full
            border border-white/40
            px-6 py-2
            text-white
            backdrop-blur
            text-sm
          "
        >
          Galeria
        </span>
      </div>
    </div>
  );
};

export { EditionTile };