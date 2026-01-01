import { useState } from "react";
import Cursor from "../../components/Cursor";
import TicketButton from "../../components/TicketButton";

export const VideoSection = (): JSX.Element => {
  const [showCursor, setShowCursor] = useState(false);

  return (
    <section className="relative h-[180vh] px-3 w-full overflow-hidden bg-black">
      <img
        src="/video.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover cursor-none"
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center justify-center">
        <TicketButton />
      </div>
      
      {showCursor && <Cursor text="Sound on" />}
    </section>
  );
};