import { RotatorItem } from "./RotatorItem";

export function CountdownRotator() {
  return (
    <div className="flex items-center gap-6">
      <RotatorItem value="45" />
      <span className="text-6xl font-bold text-foreground">:</span>
      <RotatorItem value="53" active />
      <span className="text-6xl font-bold text-foreground">:</span>
      <RotatorItem value="19" />
    </div>
  );
}