import { CircularText } from "./CircularText";
import { CursorBackground } from "./CursorBackground";

type CursorProps = {
  text?: string;
};

/**
 * Custom cursor component with circular rotating text
 */
export default function Cursor({ text = "Open details" }: CursorProps) {
  return (
    <div className="relative size-full" data-name="Cursor">
      <CursorBackground />
      <CircularText text={text} />
    </div>
  );
}
