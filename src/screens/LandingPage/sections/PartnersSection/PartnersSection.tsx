import { partnerLogos } from "../../../../assets/data/partnersLogo";

export const PartnersSection = (): JSX.Element => {
  return (
    <section id="contacto" className="relative w-full py-20">
      <div className="w-screen-xl mx-auto flex flex-col gap-3">
        <h2 className="flex items-center justify-center ml-10 w-72 h-8 font-montreal-medium font-medium text-foreground text-h3 whitespace-nowrap">
          Parceiros &amp; Patrocinios
        </h2>

        <div className="grid w-screen-xl h-40 relative grid-cols-6 grid-rows-2 gap-6 bg-background">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              className={`relative cursor-pointer hover:scale-110 transition-transform duration-300 ${logo.className}`}
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
