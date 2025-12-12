import { contactInfo, menuLinks, legalLinks } from "../../../../assets/data/links";

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-transparent py-10">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col gap-2">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="font-montreal-bold font-bold text-neutral-100 text-sm leading-relaxed"
              >
                {info}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {menuLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-montreal-bold font-bold text-neutral-100 text-base hover:opacity-80 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex justify-end">
            <img
              className="w-full max-w-lg h-5"
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
              className="font-sans font-normal text-neutral-100 text-xs tracking-wide leading-relaxed whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
