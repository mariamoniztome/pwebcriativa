/**
 * A single character in the circular text
 */
export function CircularCharacter({ char }: { char: string }) {
  return (
    <div className="flex-none h-6">
      <div className="flex flex-col font-normal justify-end leading-0 not-italic relative size-full text-black text-xs text-center">
        <p className="leading-normal">{char}</p>
      </div>
    </div>
  );
}
