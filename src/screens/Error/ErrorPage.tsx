import { ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/button";

export const ErrorPage = (): JSX.Element => {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-neutral-950 to-neutral-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 text-center">
        {/* Error code */}
        <h1 className="text-[clamp(6rem,20vw,15rem)] font-black leading-none text-orange-500">
          404
        </h1>

        {/* Error message */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Página Não Encontrada
          </h2>
          <p className="max-w-md text-lg text-white/70">
            Oops! A página que procura não existe ou foi movida. Vamos
            voltar ao festival?
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            onClick={handleGoBack}
            variant="outline"
            className="group flex items-center gap-2 border-white/20 bg-transparent text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar
          </Button>
          <Button
            onClick={handleGoHome}
            className="bg-orange-500 text-white hover:bg-orange-600"
          >
            Página Inicial
          </Button>
        </div>
      </div>
    </section>
  );
};
