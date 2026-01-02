import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { CurvedImage } from "./components/CurvedImage";

import fest1 from "../../../../assets/img/fest/fest-1.png";
import fest2 from "../../../../assets/img/fest/fest-2.png";
import fest3 from "../../../../assets/img/fest/fest-3.png";
import fest4 from "../../../../assets/img/fest/fest-4.png";
import fest5 from "../../../../assets/img/fest/fest-5.png";
import fest6 from "../../../../assets/img/fest/fest-6.png";
import fest7 from "../../../../assets/img/fest/fest-7.png";
import fest8 from "../../../../assets/img/fest/fest-8.png";
import fest9 from "../../../../assets/img/fest/fest-9.png";

export const ParticipationSection = (): JSX.Element => {
  return (
    <section className="relative bg-black py-24 px-4">
      <div className="mx-auto">
        <Separator className="mb-12 bg-white" />
        <h2 className="mb-12 text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-white">
          Participa
        </h2>

        <CurvedImage 
          images={[fest1, fest2, fest3, fest4, fest5, fest6, fest7, fest8, fest9]} 
          config={{ curveIntensity: -0.19, rotationY: 0, rotationX: 0, zoom: 0.53, fov: 75, wireframe: false, brightness: 1, segments: 10, speed: 0.006, spacing: 8.4 }} 
        />
          
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