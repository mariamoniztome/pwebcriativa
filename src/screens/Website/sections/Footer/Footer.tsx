export const Footer = (): JSX.Element => {
  const contactInfo = [
    "email@email.com",
    "MAD Jam Fest",
    "Escola Superior de Media Artes e Design",
    "Rua D. Sancho I",
  ];

  const navigationLinks = [
    "Home",
    "Programa",
    "Open Calls",
    "Contacto",
  ];

  const legalLinks = [
    "Política de Privacidade",
    "Termos de Utilização",
    "Política de Cookies",
  ];

  return (
    <footer className="bg-neutral-950 pt-24">
      <div className="mx-auto  px-4">
        {/* Top section */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Contact */}
          <div className="space-y-2 text-sm font-bold text-white">
            {contactInfo.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          {/* Navigation */}
          <nav className="space-y-3 text-base font-bold text-white lg:text-right">
            {navigationLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block transition-opacity hover:opacity-80"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Legal + socials */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/20 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-6 text-xs font-mono tracking-wide text-white">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="transition-opacity hover:opacity-80"
              >
                {link}
              </a>
            ))}
          </div>

          <img
            src="/social-media.svg"
            alt="Social media"
            className="h-5 w-auto"
          />
        </div>

        {/* Big slogan */}
        <div className="mt-24 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-[clamp(3rem,10vw,10rem)] font-bold leading-none text-white">
            DON&apos;T BE <span className="italic">MAD</span>
          </h2>

          <img
            src="/logo.svg"
            alt="MAD Jam Fest"
            className="h-24 w-auto"
          />
        </div>
      </div>
    </footer>
  );
};