const partnerLogos = [
  {
    src: "/img-7.png",
    alt: "Partner logo",
    className:
      "row-[1_/_2] col-[1_/_2] justify-self-center self-center w-[149px] h-[47px]",
  },
  {
    src: "/img-6.png",
    alt: "Partner logo",
    className:
      "row-[1_/_2] col-[2_/_3] justify-self-start [align-self:end] w-full h-[64.08px]",
  },
  {
    src: "/img.png",
    alt: "Partner logo",
    className:
      "row-[1_/_2] col-[3_/_4] justify-self-start w-full h-[72.72px] object-cover",
  },
  {
    src: "/img-1.png",
    alt: "Partner logo",
    className:
      "row-[2_/_3] col-[1_/_2] justify-self-start w-full h-[72.72px] object-cover",
  },
  {
    src: "/img-10.png",
    alt: "Partner logo",
    className:
      "row-[2_/_3] col-[2_/_3] justify-self-start w-full h-[72.66px] object-cover",
  },
  {
    src: "/img-8.png",
    alt: "Partner logo",
    className:
      "row-[2_/_3] col-[3_/_4] justify-self-center self-center w-[148px] h-[50px]",
  },
  {
    src: "/img-2.png",
    alt: "Partner logo",
    className:
      "row-[3_/_4] col-[1_/_2] justify-self-start w-full h-[72.66px] object-cover",
  },
  {
    src: "/img-5.png",
    alt: "Partner logo",
    className:
      "row-[3_/_4] col-[2_/_3] justify-self-start w-full h-[72.88px] object-cover",
  },
  {
    src: "/img-3.png",
    alt: "Partner logo",
    className:
      "row-[3_/_4] col-[3_/_4] justify-self-start w-full h-[72.82px] object-cover",
  },
  {
    src: "/img-4.png",
    alt: "Partner logo",
    className:
      "row-[4_/_5] col-[1_/_2] justify-self-start w-full h-[72.88px] object-cover",
  },
  {
    src: "/img-9.png",
    alt: "Partner logo",
    className:
      "row-[4_/_5] col-[2_/_3] justify-self-start w-full h-[72.72px] object-cover",
  },
  {
    src: "/img-11.png",
    alt: "Partner logo",
    className:
      "row-[4_/_5] col-[3_/_4] justify-self-start [align-self:start] w-[223.58px] h-[77.83px] object-cover",
  },
];

export const Partners = (): JSX.Element => {
  return (
    <section className="relative flex flex-col max-w-[1920px] w-full items-start gap-[30px] pt-0 pb-[100px] px-[15px]">
      <img
        className="relative self-stretch w-full h-px object-cover"
        alt="Divider"
        src="/divider.svg"
      />

      <div className="relative w-full flex justify-between items-start">
        <h2 className="relative w-[625px] h-[146px] [font-family:'Montserrat',Helvetica] font-bold text-neutral-100 text-8xl tracking-[0] leading-[120px]">
          Parceiros
        </h2>

        <div className="grid grid-cols-3 grid-rows-4 w-[705px] h-[308px] gap-[0px_26px] bg-[#101010]">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              className={`relative ${logo.className}`}
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
