const partnerLogos = [
  { src: "/img-7.png", alt: "Partner logo" },
  { src: "/img-6.png", alt: "Partner logo" },
  { src: "/img.png", alt: "Partner logo" },
  { src: "/img-1.png", alt: "Partner logo" },
  { src: "/img-10.png", alt: "Partner logo" },
  { src: "/img-8.png", alt: "Partner logo" },
  { src: "/img-2.png", alt: "Partner logo" },
  { src: "/img-5.png", alt: "Partner logo" },
  { src: "/img-3.png", alt: "Partner logo" },
  { src: "/img-4.png", alt: "Partner logo" },
  { src: "/img-9.png", alt: "Partner logo" },
  { src: "/img-11.png", alt: "Partner logo" },
];

export const Partners = (): JSX.Element => {
  return (
    <section className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Divider */}
        <img
          src="/divider.svg"
          alt=""
          className="mb-12 w-full"
        />

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Title */}
          <h2 className="text-[clamp(3rem,6vw,6rem)] font-bold leading-none text-white">
            Parceiros
          </h2>

          {/* Logos grid */}
          <div className="grid w-full max-w-xl grid-cols-2 gap-8 sm:grid-cols-3">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg bg-neutral-900 p-4"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};