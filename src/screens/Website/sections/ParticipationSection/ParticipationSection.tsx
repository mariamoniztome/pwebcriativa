import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const ParticipationSection = (): JSX.Element => {
  return (
    <section className="relative bg-black py-24">
      <div className="mx-auto  ">
        {/* Divider */}
        <Separator className="mb-12 bg-white/20" />

        {/* Title */}
        <h2 className="mb-12 text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-white">
          Participa
        </h2>

        {/* Image */}
        <div className="mb-16 overflow-hidden rounded-lg">
          <img
            src="/scroll.png"
            alt=""
            className="h-[300px] w-full object-cover sm:h-[400px]"
          />
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row"
        >
          <Input
            placeholder="O teu nome"
            className="h-11"
          />

          <Button
            type="submit"
            className="h-11 rounded-full bg-orange-500 px-6 text-white hover:bg-orange-500/90"
          >
            Inscreve-te
          </Button>
        </form>
      </div>
    </section>
  );
};