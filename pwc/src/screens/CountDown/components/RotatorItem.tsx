type RotatorItemProps = {
  value: string;
  active?: boolean;
};

export function RotatorItem({ value, active }: RotatorItemProps) {
  return (
    <div
      className={`
        flex items-center justify-center
        rounded-[48px]
        bg-background
        text-foreground
        transition-all duration-500
        ${active ? "h-40 w-40 text-8xl" : "h-24 w-24 text-5xl opacity-40"}
      `}
    >
      {value}
    </div>
  );
}