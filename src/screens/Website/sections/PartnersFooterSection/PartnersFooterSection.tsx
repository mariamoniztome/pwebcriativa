export const PartnersFooterSection = (): JSX.Element => {
  const contactInfo = [
    { text: "email@email.com" },
    { text: "MAD Jam Fest" },
    { text: "Escola Superior de Media Artes e Design" },
    { text: "Rua D.Sancho I" },
  ];

  const navigationLinks = [
    { text: "Home" },
    { text: "Programa" },
    { text: "Open Calls" },
    { text: "Contacto" },
  ];

  const legalLinks = [
    { text: "Política de Privacidade" },
    { text: "Termos de Utilização" },
    { text: "Política de Cookies" },
  ];

  return (
    <section className="w-full flex flex-col justify-between gap-8">
      <footer className="w-full relative bg-transparent">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          <div className="flex flex-col gap-2">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-start [font-family:'Montserrat',Helvetica] font-bold text-neutral-100 text-sm tracking-[0] leading-[22.4px] pl-[43px]"
              >
                {item.text}
              </div>
            ))}
          </div>

          <nav className="flex flex-col gap-3 lg:ml-auto">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="[font-family:'Montserrat',Helvetica] font-bold text-neutral-100 text-base tracking-[0] leading-[0.1px] hover:opacity-80 transition-opacity cursor-pointer"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mt-12">
          <div className="flex flex-wrap items-center gap-6 pl-[42.63px]">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="[font-family:'Azeret_Mono',Helvetica] font-normal text-neutral-100 text-xs tracking-[0.60px] leading-[19.2px] whitespace-nowrap hover:opacity-80 transition-opacity cursor-pointer"
              >
                {link.text}
              </a>
            ))}
          </div>

          <img
            className="w-full lg:w-[515px] h-[18px]"
            alt="Social media"
            src="/social-media.svg"
          />
        </div>
      </footer>

      <div className="w-full relative flex items-center justify-between">
        <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-neutral-100 text-[160px] tracking-[0] leading-[120px] whitespace-nowrap">
          <span className="font-bold">DON&apos;T BE </span>
          <span className="font-bold italic">MAD</span>
        </h2>

        <img className="w-[110px] h-28" alt="Div" src="/div.svg" />
      </div>
    </section>
  );
};
