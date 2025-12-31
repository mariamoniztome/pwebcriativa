import { ArrowUpRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const VideoSection = (): JSX.Element => {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden bg-black">
      {/* Background */}
      <img
        src="/video.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <Button
          variant="outline"
          size="lg"
        >
          Garante os teus bilhetes
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};