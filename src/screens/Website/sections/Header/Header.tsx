import TicketButton from "../../components/TicketButton";

export const Header = (): JSX.Element => {
  return (
    <header className="relative z-40 h-[95px]">
      <div className="mx-4 flex h-full items-center justify-between">
        {/* Logo (scrolla normalmente) */}
        <div className="flex items-center gap-2">
          <img
            src="/logo-orange.svg"
            alt="Mad Jam Fest"
            className="h-10 w-auto sm:h-20"
          />
        </div>
      </div>

      {/* CTA FIXO */}
      <div className="fixed top-6 right-6 z-50">
        <TicketButton />
      </div>
    </header>
  );
};