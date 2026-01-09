import { Edition } from "../../../../../types/types";
import { EditionWrapper } from "./EditionWrapper";

type EditionTileProps = {
  edition: Edition;
  index: number;
  isActive: boolean;
  onHover: (index: number) => void;
  onOpenDialog: (edition: Edition) => void;
};

const EditionTile = ({
  edition,
  index,
  isActive,
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
        transition-all duration-500 ease-out
      "
      style={{
        width: isActive ? '500px' : '120px',
        zIndex: isActive ? 10 : 1,
      }}
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
          px-2
          transition-opacity duration-300
        "
        style={{
          opacity: isActive ? 1 : 0,
          transitionDelay: isActive ? '200ms' : '0ms'
        }}
      >
        <EditionWrapper
          title={edition.title ?? `MAD JAM FEST ${edition.year}`}
          description={edition.description}
          buttonText="Ver edição"
          onButtonClick={() => onOpenDialog(edition)}
        />
      </div>
    </div>
  );
};

export { EditionTile };