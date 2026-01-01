import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../components/ui/dialog";

type JamDialogProps = {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function JamDialog({ children, open, onOpenChange }: JamDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
              PHOTO JAM
          </DialogTitle>
        </DialogHeader>

        <div className="mt-12 space-y-12">
          <section className="space-y-4">
            <p className="uppercase tracking-wide text-sm sm:text-base">
              Projeto Fotográfico Intensivo
            </p>

            <p className="uppercase tracking-wide text-sm sm:text-base">
              48 horas de captura criativa
            </p>

            <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-white/90">
              A MAD Photo Jam desafia os participantes a desenvolver um projeto
              fotográfico original em formato intensivo e ao longo de 48h, sobre
              uma temática que apenas irão conhecer no primeiro dia do evento.
              Os trabalhos serão apresentados no final das 48 horas no evento e
              em formato expositivo após o evento.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="uppercase tracking-wide text-base sm:text-lg">
              Modelo de funcionamento
            </h2>

            <div className="divide-y divide-white/20">
              {[
                {
                  title: "Categoria Única",
                  description:
                    "Existe apenas uma categoria, independentemente da(s) técnica(s) utilizadas. Cada projeto deve contemplar 10 imagens.",
                },
                {
                  title: "Temática",
                  description:
                    "Os participantes desenvolvem os trabalhos sobre uma temática que só vão conhecer no primeiro dia do evento.",
                },
                {
                  title: "Apresentação",
                  description:
                    "Os trabalhos são apresentados pelo autor e projetados perante o público 48 horas depois.",
                },
                {
                  title: "Premiação",
                  description:
                    "Os 3 melhores classificados serão premiados e serão atribuídas 4 menções honrosas.",
                },
              ].map((item) => (
                <div key={item.title} className="py-6">
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-2 text-sm sm:text-base text-white/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
