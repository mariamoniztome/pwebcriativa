import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const editionsData = [
  {
    year: "2024",
    image: "/img-12.png",
    isExpanded: true,
    title: "MAD JAM FEST",
    description:
      "Experimente o pulso da criatividade com uma jornada eletrizante pela experimentação artística e digital. De ritmos visuais a performances hipnóticas, este não é um festival comum—é um playground para inovadores criativos.",
  },
  {
    year: "2023",
    image: "/img-13.png",
    isExpanded: false,
  },
  {
    year: "2022",
    image: "/img-14.png",
    isExpanded: false,
  },
  {
    year: "2021",
    image: "/img-24.png",
    isExpanded: false,
  },
  {
    year: "2020",
    image: "/img-22.png",
    isExpanded: false,
  },
  {
    year: "2019",
    image: "/img-17.png",
    isExpanded: false,
  },
  {
    year: "2018",
    image: "/img-18.png",
    isExpanded: false,
  },
  {
    year: "2017",
    image: "/img-21.png",
    isExpanded: false,
  },
  {
    year: "2016",
    image: "/img-23.png",
    isExpanded: false,
  },
];

export const PastEditionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[38px] py-0 pb-[100px] px-[15px]">
      <img className="w-full h-px" alt="Divider" src="/divider-2.svg" />

      <div className="flex items-start justify-around gap-[339px] w-full">
        <h2 className="flex-1 mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-bold text-neutral-100 text-8xl tracking-[0] leading-[105.6px]">
          Edições passadas
        </h2>
      </div>

      <div className="w-full mb-[-25.00px] h-[600px] overflow-x-auto">
        <div className="flex items-start gap-3 h-[600px] min-w-max">
          {editionsData.map((edition, index) => (
            <div
              key={edition.year}
              className="relative h-[600px]"
              style={{ width: edition.isExpanded ? "145px" : "147px" }}
            >
              {edition.isExpanded ? (
                <>
                  <div
                    className="relative w-[145px] h-[600px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${edition.image})` }}
                  >
                    <div className="top-[390px] -left-10 absolute -rotate-90 [font-family:'Instrument_Sans',Helvetica] font-normal text-neutral-100 text-8xl tracking-[0] leading-[105.6px] whitespace-nowrap">
                      {edition.year}
                    </div>

                    <Card className="absolute top-[138px] left-[263px] w-[524px] h-[325px] bg-[#101010] border-0 rounded-none">
                      <CardContent className="p-0 h-full relative">
                        <Button className="absolute top-[272px] left-3.5 w-[203px] h-10 bg-[#fa5302] hover:bg-[#fa5302]/90 rounded-[26843500px] [font-family:'Inter',Helvetica] font-medium text-neutral-100 text-sm">
                          Galeria
                        </Button>

                        <div className="absolute top-[calc(50.00%_-_122px)] left-[calc(50.00%_-_248px)] w-[500px] h-[217px] flex flex-col gap-[55px]">
                          <h3 className="w-[360.32px] h-[25px] [font-family:'Montserrat',Helvetica] font-bold text-neutral-100 text-3xl tracking-[0.60px] leading-8 whitespace-nowrap">
                            {edition.title}
                          </h3>

                          <p className="w-[495.57px] h-[137px] [font-family:'Montserrat',Helvetica] font-normal text-neutral-100 text-base tracking-[0] leading-[29.2px]">
                            {edition.description}
                          </p>
                        </div>

                        <img
                          className="absolute top-[89px] left-3.5 w-[457px] h-px"
                          alt="Divider"
                          src="/divider-2.svg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </>
              ) : (
                <>
                  <img
                    className="absolute top-0 left-0 w-[145px] h-[600px] object-cover"
                    alt={`Img ${edition.year}`}
                    src={edition.image}
                  />

                  <div
                    className="absolute -rotate-90 [font-family:'Instrument_Sans',Helvetica] font-normal text-neutral-100 text-8xl tracking-[0] leading-[105.6px] whitespace-nowrap"
                    style={{
                      top:
                        index === 1
                          ? "388px"
                          : index === 2
                            ? "390px"
                            : index === 3
                              ? "398px"
                              : index === 4
                                ? "384px"
                                : index === 5
                                  ? "395px"
                                  : index === 6
                                    ? "397px"
                                    : index === 7
                                      ? "400px"
                                      : "396px",
                      left:
                        index === 1
                          ? "-38px"
                          : index === 2
                            ? "-39px"
                            : index === 3
                              ? "-32px"
                              : index === 4
                                ? "-45px"
                                : index === 5
                                  ? "-35px"
                                  : index === 6
                                    ? "-33px"
                                    : index === 7
                                      ? "-30px"
                                      : "-34px",
                    }}
                  >
                    {edition.year}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
