import { Edition } from "../../../../../types/types";

import fest1 from "../../../../../assets/img/fest/fest-1.png";
import fest2 from "../../../../../assets/img/fest/fest-2.png";
import fest3 from "../../../../../assets/img/fest/fest-3.png";
import fest4 from "../../../../../assets/img/fest/fest-4.png";
import fest5 from "../../../../../assets/img/fest/fest-5.png";
import fest6 from "../../../../../assets/img/fest/fest-6.png";
import fest7 from "../../../../../assets/img/fest/fest-7.png";
import fest8 from "../../../../../assets/img/fest/fest-8.png";
import fest9 from "../../../../../assets/img/fest/fest-9.png";

const editionsData: Edition[] = [
  {
    year: "2024",
    image: fest1, // thumbnail
    title: "MAD JAM FEST 2024",
    description:
      "Experimente o pulso da criatividade com uma jornada eletrizante pela experimentação artística e digital.",
    gallery: [
      fest1,
      fest2,
      fest3,
      fest4,
      fest5,
    ],
  },
  {
    year: "2023",
    image: fest2,
    gallery: [fest2, fest3, fest6],
  },
  {
    year: "2022",
    image: fest3,
    gallery: [fest3, fest4, fest7],
  },
  {
    year: "2021",
    image: fest9,
    gallery: [fest9, fest1],
  },
  {
    year: "2020",
    image: fest7,
  },
  {
    year: "2019",
    image: fest4,
  },
  {
    year: "2018",
    image: fest5,
  },
  {
    year: "2017",
    image: fest6,
  },
  {
    year: "2016",
    image: fest8,
  },
];

export default editionsData;