import { ArrowUpRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import ThreeDBackground from "../../3D/Hero3D";

const navigationLinks = [{ label: "BILHETES" }, { label: "VOLUNTARIADO" }];

export const FestivalIntroSection = (): JSX.Element => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background */}

      <div className="absolute inset-0 h-full w-full object-cover">
        <ThreeDBackground />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen flex-col px-4 pt-40 sm:px-6 lg:flex-row lg:gap-16">
        {/* Main content */}
        <div className="flex flex-1 flex-col gap-4 text-white mix-blend-exclusion">
          <h1 className="text-[clamp(3rem,10vw,10rem)] font-black leading-none text-primary">
            MAD JAM FEST
          </h1>

          <h2 className="mt-4 text-xl font-semibold tracking-wide">
            ESCOLA SUPERIOR DE MEDIA ARTES E DESIGN
          </h2>
          {/* Left navigation */}
          <nav className="mb-12 flex flex-col gap-4 lg:mb-0 lg:w-1/4">
            {navigationLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                className="group flex w-fit items-center gap-3 p-0 text-white hover:bg-transparent"
              >
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span className="tracking-wide">{link.label}</span>
              </Button>
            ))}
          </nav>

          <p className="text-lg">RUA D. SANCHO I, PORTO</p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90">
            Experimente o pulso da criatividade com uma jornada eletrizante pela
            experimentação artística e digital. De ritmos visuais a performances
            hipnóticas, este não é um festival comum — é um playground para
            inovadores criativos.
          </p>
        </div>
      </div>
    </section>
  );
};