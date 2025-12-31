import { Button } from "../../../../components/ui/button";

const navigationLinks = [
  { label: "BILHETES", arrow: "→" },
  { label: "VOLUNTARIADO", arrow: "→" },
];

export const FestivalIntroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[885px] overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
        src="/background.png"
      />

      <div className="relative w-full h-full max-w-[1440px] mx-auto px-6">
        <div className="absolute top-[198px] left-0 right-0 w-full">
          <h1 className="[font-family:'Montserrat',Helvetica] font-black text-[#fa5302] text-[190px] tracking-[0] leading-[198px] whitespace-nowrap">
            MAD JAM FEST
          </h1>
        </div>

        <div className="absolute top-[420px] left-6 right-6 flex gap-12">
          <nav className="flex flex-col gap-4 min-w-[300px]">
            {navigationLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex items-center gap-2 w-fit h-auto p-0 hover:bg-transparent group"
              >
                <span className="flex items-start w-[20.71px] h-[31.99px]">
                  <span className="relative w-fit mt-[-1.00px] mr-[-3.29px] [font-family:'Arial-Regular',Helvetica] font-normal text-neutral-100 text-2xl tracking-[0] leading-8 whitespace-nowrap group-hover:translate-x-1 transition-transform">
                    {link.arrow}
                  </span>
                </span>
                <span className="[font-family:'Montserrat',Helvetica] font-medium text-neutral-100 text-xl tracking-[0.50px] leading-7 whitespace-nowrap">
                  {link.label}
                </span>
              </Button>
            ))}
          </nav>

          <div className="flex flex-col gap-3 flex-1 max-w-[933px]">
            <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-neutral-100 text-2xl tracking-[0.60px] leading-8">
              MAD JAM FEST
            </h2>

            <p className="[font-family:'Montserrat',Helvetica] font-medium text-neutral-100 text-xl tracking-[0] leading-7">
              ESCOLA SUPERIOR DE MEDIA ARTES E DESIGN
            </p>

            <p className="[font-family:'Montserrat',Helvetica] font-medium text-neutral-100 text-xl tracking-[0] leading-7">
              RUA D.SANCHO I, PORTO
            </p>

            <p className="[font-family:'Montserrat',Helvetica] font-normal text-neutral-100 text-lg tracking-[0] leading-[29.2px] mt-1">
              Experimente o pulso da criatividade com uma jornada eletrizante
              pela experimentação artística e digital. De ritmos visuais a
              performances hipnóticas, este não é um festival comum—é um
              playground para inovadores criativos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
