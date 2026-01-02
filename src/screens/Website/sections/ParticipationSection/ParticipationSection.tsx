import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { WaveImageScroll } from "./components/WaveImageScroll";

export const ParticipationSection = (): JSX.Element => {
  return (
    <section className="relative bg-black py-24 px-4">
      <div className="mx-auto  ">
        <Separator className="mb-12 bg-white" />
        <h2 className="mb-12 text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-white">
          Participa
        </h2>

        <WaveImageScroll />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row"
        >
          <Input placeholder="O teu nome" className="h-10" />

          <Button
            type="submit"
            className="h-10 rounded-full border-2 border-primary bg-primary px-9 text-white hover:bg-black hover:text-primary"
          >
            Inscreve-te
          </Button>
        </form>
      </div>
    </section>
  );
};