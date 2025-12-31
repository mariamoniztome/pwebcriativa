import { Separator } from "../../../../components/ui/separator";

const partnerLogos = [
  { src: "/partner-8.png", alt: "Partner logo" },
  { src: "/partner-7.png", alt: "Partner logo" },
  { src: "/partner-1.png", alt: "Partner logo" },
  { src: "/partner-2.png", alt: "Partner logo" },
  { src: "/partner-11.png", alt: "Partner logo" },
  { src: "/partner-9.png", alt: "Partner logo" },
  { src: "/partner-3.png", alt: "Partner logo" },
  { src: "/partner-6.png", alt: "Partner logo" },
  { src: "/partner-4.png", alt: "Partner logo" },
  { src: "/partner-5.png", alt: "Partner logo" },
  { src: "/partner-10.png", alt: "Partner logo" },
  { src: "/partner-12.png", alt: "Partner logo" },
];

export const Partners = (): JSX.Element => {
  return (
    <section className="relative bg-black py-24 px-4">
      <div className="mx-auto  ">
        {/* Divider */}
        <Separator className="mb-12 bg-white/20" />

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Title */}
          <h2 className="text-[clamp(3rem,6vw,6rem)] font-bold leading-none text-white">
            Parceiros
          </h2>

          {/* Logos grid */}
          <div className="grid w-full max-w-xl grid-cols-2 gap-8 sm:grid-cols-4">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-96 object-contain opacity-80 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};