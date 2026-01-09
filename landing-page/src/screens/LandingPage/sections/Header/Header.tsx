type HeaderProps = {
  onMenuClick: () => void;
  isMenuOpen?: boolean;
};

export const Header = ({
  onMenuClick,
  isMenuOpen = false,
}: HeaderProps): JSX.Element => {
  return (
    <header className="flex h-36 w-full items-center justify-between bg-background px-3">
      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="h-28 w-auto" />

      {/* Date */}
      <div className="text-xl font-normal text-white">25–27 de fevereiro</div>

      {/* Hamburger Menu */}
      <button
        onClick={onMenuClick}
        aria-label="Toggle menu"
        className="
    relative z-[102]
    flex flex-col justify-center items-center
    size-20
    gap-2
    transition-opacity hover:opacity-70
  "
      >
        <span
          className={`
      block w-14 h-[3px] rounded-full bg-white
      transition-transform transition-opacity duration-300 ease-in-out
      origin-center
      ${isMenuOpen ? "translate-y-[20px] rotate-45" : ""}
    `}
        />

        <span
          className={`
      block  w-14 h-[3px] rounded-full bg-white
      transition-opacity duration-200 ease-in-out
      ${isMenuOpen ? "opacity-0" : ""}
    `}
        />

        <span
          className={`
      block  w-14 h-[3px] rounded-full bg-white
      transition-transform transition-opacity duration-300 ease-in-out
      origin-center
      ${isMenuOpen ? "-rotate-45" : ""}
    `}
        />
      </button>
    </header>
  );
};