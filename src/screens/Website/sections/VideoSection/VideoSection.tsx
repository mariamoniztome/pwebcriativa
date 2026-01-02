import { useState, useRef } from "react";
import Cursor from "../../components/Cursor";
import TicketButton from "../../components/TicketButton";
import videoFile from "../../../../assets/video/video.mp4";

export const VideoSection = (): JSX.Element => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleVideoClick = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    if (videoRef.current) {
      videoRef.current.muted = newMutedState;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[180vh] px-3 w-full overflow-hidden bg-black cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        ref={videoRef}
        src={videoFile}
        className="absolute inset-0 h-full w-full object-cover cursor-none"
        onClick={handleVideoClick}
        autoPlay
        muted={isMuted}
        loop
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center justify-center">
        <TicketButton />
      </div>

      {isHovering && (
        <div
          className="pointer-events-none absolute z-50 h-32 w-32"
          style={{
            left: cursorPosition.x - 64,
            top: cursorPosition.y - 64,
          }}
        >
          <Cursor text={isMuted ? "Sound on" : "Sound off"} />
        </div>
      )}
    </section>
  );
};