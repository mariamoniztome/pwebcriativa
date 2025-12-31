import TicketButton from "../../components/TicketButton";

export const Header = (): JSX.Element => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[95px]">
      <div className="mx-4 flex h-full items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo-orange.svg"
            alt="Mad Jam Fest"
            className="h-10 w-auto sm:h-20"
          />
        </div>

        {/* CTA */}
        <TicketButton />
      </div>
    </header>
  );
};
