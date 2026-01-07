import TicketButton from "../Website/components/TicketButton";
import { CountdownRotator } from "./components/CountdownRotator";

export const CountDownPage = (): JSX.Element => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-neutral-950 to-neutral-950" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 text-center">
        <h1 className="text-4xl font-medium text-white md:text-5xl">
          Stay calm. Go <i><span className="underline">MAD</span></i> in:
        </h1>
        <CountdownRotator />
        <TicketButton />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-50 bg-[url('/grain.png')]"
        />
      </div>
    </section>
  );
};
