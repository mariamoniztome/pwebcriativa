import { ArrowUpRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import ThreeDBackground from "../../3D/Hero3D";

const navigationLinks = [{ label: "BILHETES" }, { label: "VOLUNTARIADO" }];

export const FestivalIntroSection = (): JSX.Element => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <ThreeDBackground />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col px-3 pt-32 lg:pt-40">
        <div className="flex flex-1 flex-col gap-10 text-white mix-blend-exclusion">
          {/* Title */}
          <h1
            className="
              font-black leading-none text-primary
              text-[64px]
              sm:text-[96px]
              md:text-[140px]
              lg:text-[210px]
            "
          >
            MAD JAM FEST
          </h1>

          {/* Layout */}
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            {/* Navigation */}
            <nav className="flex flex-row gap-2 lg:flex-col lg:w-1/4">
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

            {/* Info */}
            <div className="max-w-2xl">
              <h2 className="text-lg font-semibold tracking-wide sm:text-xl">
                MAD JAM FEST
              </h2>
              <h2 className="mt-2 text-lg font-semibold tracking-wide sm:text-xl">
                ESCOLA SUPERIOR DE MEDIA ARTES E DESIGN
              </h2>
              <p className="mt-1 text-sm sm:text-base">
                RUA D. SANCHO I, PORTO
              </p>

              <p className="mt-6 text-sm leading-relaxed sm:text-base">
                Experimente o pulso da criatividade com uma jornada eletrizante
                pela experimentação artística e digital. De ritmos visuais a
                performances hipnóticas, este não é um festival comum — é um
                playground para inovadores criativos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};