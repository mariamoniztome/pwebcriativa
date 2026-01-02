import { Button } from "../../../../components/ui/button";
import { Menu } from "lucide-react";
type HeaderProps = {
  onMenuClick: () => void;
};

export const Header = ({ onMenuClick }: HeaderProps): JSX.Element => {
  return (
    <header className="mx-auto flex h-36 w-full items-center justify-between bg-background px-6">
      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="h-36 w-auto" />

      {/* Date */}
      <div className="text-xl font-normal text-foreground">
        25–27 de fevereiro
      </div>

      {/* Menu */}
      <Button
        variant="ghost"
        onClick={onMenuClick}
        className="hover:bg-transparent"
      >
        <Menu className="!size-24" />
      </Button>
    </header>
  );
};
