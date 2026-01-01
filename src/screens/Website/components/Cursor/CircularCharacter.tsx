/**
 * A single character in the circular text
 */
export function CircularCharacter({ char }: { char: string }) {
  return (
    <div className="flex-none h-[6.505px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative size-full text-[#101010] text-[6px] text-center">
        <p className="leading-[normal]">{char}</p>
      </div>
    </div>
  );
}
