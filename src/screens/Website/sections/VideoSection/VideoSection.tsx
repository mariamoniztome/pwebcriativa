import { Button } from "../../../../components/ui/button";

export const VideoSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[1350px]">
      <div className="w-full absolute top-0 h-[1350px]">
        <img
          className="left-[15px] w-[1410px] absolute top-0 h-[1350px]"
          alt="Video"
          src="/video.png"
        />
        <div className="absolute top-px left-0 w-full h-[1350px] bg-[#1010104c]" />
      </div>
      <div className="absolute top-[50.00%] left-[calc(50.00%_-_171px)] w-[313px] h-[58px]">
        <img
          className="absolute top-px left-[251px] w-[62px] h-[58px]"
          alt="Icon"
          src="/icon.png"
        />
        <Button className="flex w-[250px] h-[54px] items-center gap-2 px-6 py-4 absolute top-0 left-[calc(50.00%_-_156px)] rounded-[100px] overflow-hidden border border-solid border-neutral-100 backdrop-blur-[300px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(300px)_brightness(100%)] bg-transparent hover:bg-[#ffffff1a]">
          <span className="relative w-fit mt-[-2.14px] mb-[-0.14px] [font-family:'Poppins',Helvetica] font-normal text-neutral-100 text-base tracking-[0] leading-[normal]">
            Garante os teus bilhetes
          </span>
        </Button>
      </div>
    </section>
  );
};
