import { Button } from "../../../../components/ui/button";

export const Header = (): JSX.Element => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[95px]">
      <div className="mx-auto flex h-full items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo-orange.svg"
            alt="Mad Jam Fest"
            className="h-24 w-auto sm:h-10"
          />
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button
            size="lg"
            className="rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60"
          >
            Garante os teus bilhetes
          </Button>

          <img
            src="/icon-1.png"
            alt=""
            className="hidden h-10 w-10 sm:block"
          />
        </div>
      </div>
    </header>
  );
};
