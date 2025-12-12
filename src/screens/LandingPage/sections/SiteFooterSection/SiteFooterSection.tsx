import React from "react";

const contactInfo = [
  "email@email.com",
  "MAD Jam Fest",
  "Escola Superior de Media Artes e Design",
  "Rua D.Sancho I",
];

const navigationLinks = ["Home", "Programa", "Open Calls", "Contacto"];

const legalLinks = [
  "Política de Privacidade",
  "Termos de Utilização",
  "Política de Cookies",
];

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-transparent py-10">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col gap-2">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="[font-family:'Neue_Montreal-Bold',Helvetica] font-bold text-neutral-100 text-sm tracking-[0] leading-[22.4px]"
              >
                {info}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="[font-family:'Neue_Montreal-Bold',Helvetica] font-bold text-neutral-100 text-base tracking-[0] leading-[0.1px] hover:opacity-80 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex justify-end">
            <img
              className="w-full max-w-[515px] h-[18px]"
              alt="Social media"
              src="/social-media.svg"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-6 items-center">
          {legalLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="[font-family:'Azeret_Mono',Helvetica] font-normal text-neutral-100 text-xs tracking-[0.60px] leading-[19.2px] whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
