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
    <div className="edition-tile" onMouseEnter={() => onHover(index)}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpenDialog(edition);
        }}
      >
        Galeria
      </button>
    </div>
  );
};
export { EditionTile };