import TicketButton from "../../components/TicketButton";

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
      <TicketButton />

    </section>
  );
};