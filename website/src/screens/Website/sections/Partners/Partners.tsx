import { Separator } from "../../../../components/ui/separator";
import partner1 from "../../../../assets/img/partners/partner-1.png";
import partner2 from "../../../../assets/img/partners/partner-2.png";
import partner3 from "../../../../assets/img/partners/partner-3.png";
import partner4 from "../../../../assets/img/partners/partner-4.png";
import partner5 from "../../../../assets/img/partners/partner-5.png";
import partner6 from "../../../../assets/img/partners/partner-6.png";
import partner7 from "../../../../assets/img/partners/partner-7.png";
import partner8 from "../../../../assets/img/partners/partner-8.png";
import partner9 from "../../../../assets/img/partners/partner-9.png";
import partner10 from "../../../../assets/img/partners/partner-10.png";
import partner11 from "../../../../assets/img/partners/partner-11.png";
import partner12 from "../../../../assets/img/partners/partner-12.png";

const partnerLogos = [
  { src: partner8, alt: "Partner logo" },
  { src: partner7, alt: "Partner logo" },
  { src: partner1, alt: "Partner logo" },
  { src: partner2, alt: "Partner logo" },
  { src: partner11, alt: "Partner logo" },
  { src: partner9, alt: "Partner logo" },
  { src: partner3, alt: "Partner logo" },
  { src: partner6, alt: "Partner logo" },
  { src: partner4, alt: "Partner logo" },
  { src: partner5, alt: "Partner logo" },
  { src: partner10, alt: "Partner logo" },
  { src: partner12, alt: "Partner logo" },
];

export const Partners = (): JSX.Element => {
  return (
    <section className="relative bg-black pt-24 px-4">
      <div className="mx-auto">
        {/* Divider */}
        <Separator className="mb-12 bg-white" />

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