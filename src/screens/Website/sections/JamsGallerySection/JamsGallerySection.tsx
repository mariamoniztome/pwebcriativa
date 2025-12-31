import { Button } from "../../../../components/ui/button";

const circularTextLetters = [
  {
    char: "O",
    rotation: "rotate-[-177.66deg]",
    top: "top-[109px]",
    left: "left-[53px]",
  },
  {
    char: "P",
    rotation: "rotate-[-172.99deg]",
    top: "top-[109px]",
    left: "left-[49px]",
  },
  {
    char: "E",
    rotation: "rotate-[-168.31deg]",
    top: "top-[108px]",
    left: "left-11",
  },
  {
    char: "N",
    rotation: "rotate-[-163.64deg]",
    top: "top-[107px]",
    left: "left-10",
  },
  {
    char: "D",
    rotation: "rotate-[-154.29deg]",
    top: "top-[104px]",
    left: "left-8",
  },
  {
    char: "E",
    rotation: "rotate-[-149.61deg]",
    top: "top-[101px]",
    left: "left-7",
  },
  {
    char: "T",
    rotation: "rotate-[-144.94deg]",
    top: "top-[99px]",
    left: "left-6",
  },
  { char: "A", rotation: "rotate-[-140.26deg]", top: "top-24", left: "left-5" },
  {
    char: "I",
    rotation: "rotate-[-135.59deg]",
    top: "top-[93px]",
    left: "left-[18px]",
  },
  {
    char: "L",
    rotation: "rotate-[-130.91deg]",
    top: "top-[90px]",
    left: "left-3.5",
  },
  {
    char: "S",
    rotation: "rotate-[-126.23deg]",
    top: "top-[87px]",
    left: "left-[11px]",
  },
  {
    char: "O",
    rotation: "rotate-[-116.88deg]",
    top: "top-[79px]",
    left: "left-[7px]",
  },
  {
    char: "P",
    rotation: "rotate-[-112.21deg]",
    top: "top-[75px]",
    left: "left-[5px]",
  },
  {
    char: "E",
    rotation: "rotate-[-107.53deg]",
    top: "top-[71px]",
    left: "left-1",
  },
  {
    char: "N",
    rotation: "rotate-[-102.86deg]",
    top: "top-[67px]",
    left: "left-0.5",
  },
  {
    char: "D",
    rotation: "rotate-[-93.51deg]",
    top: "top-[58px]",
    left: "left-px",
  },
  {
    char: "E",
    rotation: "rotate-[-88.83deg]",
    top: "top-[53px]",
    left: "left-px",
  },
  {
    char: "T",
    rotation: "rotate-[-84.16deg]",
    top: "top-[49px]",
    left: "left-px",
  },
  {
    char: "A",
    rotation: "rotate-[-79.48deg]",
    top: "top-[45px]",
    left: "left-0.5",
  },
  { char: "I", rotation: "rotate-[-74.81deg]", top: "top-10", left: "left-1" },
  {
    char: "L",
    rotation: "rotate-[-70.13deg]",
    top: "top-9",
    left: "left-[5px]",
  },
  { char: "S", rotation: "rotate-[-65.45deg]", top: "top-8", left: "left-1.5" },
  { char: "O", rotation: "rotate-[-56.10deg]", top: "top-6", left: "left-2.5" },
  {
    char: "P",
    rotation: "rotate-[-51.43deg]",
    top: "top-5",
    left: "left-[13px]",
  },
  {
    char: "E",
    rotation: "rotate-[-46.75deg]",
    top: "top-[17px]",
    left: "left-4",
  },
  {
    char: "N",
    rotation: "rotate-[-42.08deg]",
    top: "top-3.5",
    left: "left-[19px]",
  },
  {
    char: "D",
    rotation: "rotate-[-32.73deg]",
    top: "top-[9px]",
    left: "left-[26px]",
  },
  {
    char: "E",
    rotation: "rotate-[-28.05deg]",
    top: "top-1.5",
    left: "left-[30px]",
  },
  {
    char: "T",
    rotation: "rotate-[-23.38deg]",
    top: "top-1",
    left: "left-[34px]",
  },
  {
    char: "A",
    rotation: "rotate-[-18.70deg]",
    top: "top-[3px]",
    left: "left-[38px]",
  },
  {
    char: "I",
    rotation: "rotate-[-14.03deg]",
    top: "top-0.5",
    left: "left-[43px]",
  },
  {
    char: "L",
    rotation: "rotate-[-9.35deg]",
    top: "top-px",
    left: "left-[47px]",
  },
  {
    char: "S",
    rotation: "rotate-[-4.67deg]",
    top: "top-px",
    left: "left-[51px]",
  },
  {
    char: "O",
    rotation: "rotate-[4.67deg]",
    top: "top-px",
    left: "left-[60px]",
  },
  { char: "P", rotation: "rotate-[9.35deg]", top: "top-px", left: "left-16" },
  {
    char: "E",
    rotation: "rotate-[14.03deg]",
    top: "top-0.5",
    left: "left-[69px]",
  },
  {
    char: "N",
    rotation: "rotate-[18.70deg]",
    top: "top-[3px]",
    left: "left-[73px]",
  },
  {
    char: "D",
    rotation: "rotate-[28.05deg]",
    top: "top-1.5",
    left: "left-[81px]",
  },
  {
    char: "E",
    rotation: "rotate-[32.73deg]",
    top: "top-[9px]",
    left: "left-[86px]",
  },
  {
    char: "T",
    rotation: "rotate-[37.40deg]",
    top: "top-[11px]",
    left: "left-[88px]",
  },
  {
    char: "A",
    rotation: "rotate-[42.08deg]",
    top: "top-3.5",
    left: "left-[92px]",
  },
  {
    char: "I",
    rotation: "rotate-[46.75deg]",
    top: "top-[17px]",
    left: "left-24",
  },
  {
    char: "L",
    rotation: "rotate-[51.43deg]",
    top: "top-[21px]",
    left: "left-[99px]",
  },
  {
    char: "S",
    rotation: "rotate-[56.10deg]",
    top: "top-6",
    left: "left-[101px]",
  },
  {
    char: "O",
    rotation: "rotate-[65.45deg]",
    top: "top-8",
    left: "left-[105px]",
  },
  {
    char: "P",
    rotation: "rotate-[70.13deg]",
    top: "top-9",
    left: "left-[107px]",
  },
  {
    char: "E",
    rotation: "rotate-[74.81deg]",
    top: "top-[41px]",
    left: "left-[109px]",
  },
  {
    char: "N",
    rotation: "rotate-[79.48deg]",
    top: "top-[45px]",
    left: "left-[109px]",
  },
  {
    char: "D",
    rotation: "rotate-[88.83deg]",
    top: "top-[53px]",
    left: "left-[110px]",
  },
  {
    char: "E",
    rotation: "rotate-[93.51deg]",
    top: "top-[58px]",
    left: "left-[110px]",
  },
  {
    char: "T",
    rotation: "rotate-[98.18deg]",
    top: "top-[62px]",
    left: "left-[109px]",
  },
  {
    char: "A",
    rotation: "rotate-[102.86deg]",
    top: "top-[67px]",
    left: "left-[109px]",
  },
  {
    char: "I",
    rotation: "rotate-[107.53deg]",
    top: "top-[71px]",
    left: "left-[108px]",
  },
  {
    char: "L",
    rotation: "rotate-[112.21deg]",
    top: "top-[75px]",
    left: "left-[106px]",
  },
  {
    char: "S",
    rotation: "rotate-[116.88deg]",
    top: "top-[79px]",
    left: "left-[104px]",
  },
  {
    char: "O",
    rotation: "rotate-[126.23deg]",
    top: "top-[87px]",
    left: "left-[99px]",
  },
  {
    char: "P",
    rotation: "rotate-[130.91deg]",
    top: "top-[90px]",
    left: "left-[97px]",
  },
  {
    char: "E",
    rotation: "rotate-[135.59deg]",
    top: "top-[94px]",
    left: "left-[94px]",
  },
  {
    char: "N",
    rotation: "rotate-[140.26deg]",
    top: "top-24",
    left: "left-[90px]",
  },
  {
    char: "D",
    rotation: "rotate-[149.61deg]",
    top: "top-[102px]",
    left: "left-[83px]",
  },
  {
    char: "E",
    rotation: "rotate-[154.29deg]",
    top: "top-[104px]",
    left: "left-[79px]",
  },
  {
    char: "T",
    rotation: "rotate-[158.96deg]",
    top: "top-[105px]",
    left: "left-[75px]",
  },
  {
    char: "A",
    rotation: "rotate-[163.64deg]",
    top: "top-[107px]",
    left: "left-[71px]",
  },
  {
    char: "I",
    rotation: "rotate-[168.31deg]",
    top: "top-[108px]",
    left: "left-[67px]",
  },
  {
    char: "L",
    rotation: "rotate-[172.99deg]",
    top: "top-[109px]",
    left: "left-[62px]",
  },
  {
    char: "S",
    rotation: "rotate-[177.66deg]",
    top: "top-[109px]",
    left: "left-[58px]",
  },
];

const galleryImages = [
  {
    row: "row-[1_/_2]",
    col: "col-[1_/_2]",
    width: "w-[702px]",
    height: "h-[405px]",
    imgClass: "mt-[-100px] w-[730px] h-[757px] ml-[-30px]",
    src: "/img-24.png",
    alt: "Img",
  },
  {
    row: "row-[1_/_2]",
    col: "col-[2_/_3]",
    width: "w-[702px]",
    height: "h-[405px]",
    imgClass: "w-[732px] h-[488px] ml-[-25px]",
    src: "/img-23.png",
    alt: "Img",
  },
  {
    row: "row-[2_/_3]",
    col: "col-[1_/_2]",
    width: "w-[702px]",
    height: "h-[334px]",
    imgClass: "mt-[-74px] w-[712px] h-[534px] ml-[-30px]",
    src: "/img-21.png",
    alt: "Img",
  },
  {
    row: "row-[2_/_3]",
    col: "col-[2_/_3]",
    width: "w-[702px]",
    height: "h-[334px]",
    imgClass: "mt-[-77px] w-[700px] h-[700px] -ml-2.5",
    src: "/img-22.png",
    alt: "Img",
  },
];

export const JamsGallerySection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start pt-0 pb-[100px] px-[15px] relative">
      <img className="w-full h-px" alt="Divider" src="/divider-2.svg" />

      <div className="flex items-start justify-around gap-[339px] w-full">
        <h2 className="flex-1 mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-bold text-neutral-100 text-8xl tracking-[0] leading-[105.6px]">
          Jams
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(2,fit-content(100%))] h-[739px] top-[106px] left-[15px] w-[1405px] absolute">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`relative ${image.row} ${image.col} ${image.width} ${image.height}`}
          >
            <div className="relative w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] top-2.5 left-2.5 flex overflow-hidden">
              <img
                className={`${image.imgClass} object-cover`}
                alt={image.alt}
                src={image.src}
              />
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        className="absolute top-[395px] left-[650px] w-[135px] h-[136px] bg-neutral-100 rounded-[67.5px/68px] shadow-[0px_4px_4px_#00000040] hover:bg-neutral-100 p-0"
      >
        <div className="relative top-[11px] left-2.5 w-[246px] h-[114px]">
          {circularTextLetters.map((letter, index) => (
            <div
              key={index}
              className={`${letter.top} ${letter.left} ${letter.rotation} absolute w-[calc(100%_-_243px)] h-[calc(100%_-_109px)] flex items-end justify-center [font-family:'Inter',Helvetica] font-normal text-[#101010] text-[5px] text-center tracking-[0] leading-[normal] whitespace-nowrap`}
            >
              {letter.char}
            </div>
          ))}
        </div>
      </Button>
    </section>
  );
};
