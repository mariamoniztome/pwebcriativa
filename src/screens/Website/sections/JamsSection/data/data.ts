import { JamItem } from "../../../../../types/types";
import fest9 from "../../../../../assets/img/fest/fest-9.png";
import fest8 from "../../../../../assets/img/fest/fest-8.png";
import fest6 from "../../../../../assets/img/fest/fest-6.png";
import fest7 from "../../../../../assets/img/fest/fest-7.png";

export const jams: JamItem[] = [
  {
    id: "jam-1",
    title: "Photo Jam",
    category: "PHOTO",
    image: fest9,
    description:
      "An open collaborative jam with musicians and digital artists.",
    subtitle: "Projeto Fotográfico Intensivo",
    duration: "48 horas de captura criativa",
    details: [
      "A MAD Photo Jam desafia os participantes a desenvolver um projeto fotográfico original em formato intensivo e ao longo de 48h, sobre uma temática que apenas irão conhecer no primeiro dia do evento.",
      "Os trabalhos serão apresentados no final das 48 horas no evento e em formato expositivo após o evento.",
      "Modelo de funcionamento: Briefing inicial > Desenvolvimento > Apresentação Final",
    ],
  },
  {
    id: "jam-2",
    title: "Motion Jam",
    category: "MOTION",
    image: fest8,
    description:
      "Visual experimentation combining illustration and generative code.",
    subtitle: "Motion Graphics Workshop",
    duration: "36 horas de criação contínua",
    details: [
      "Crie animações visuais originais usando técnicas de motion graphics e design dinâmico.",
      "Trabalhe com software profissional e ferramentas de animação.",
      "Collaborate com designers e animadores para desenvolver conceitos inovadores.",
    ],
  },
  {
    id: "jam-3",
    title: "Game Jam",
    category: "GAME",
    image: fest6,
    description:
      "Hands-on sound exploration with modular and digital tools.",
    subtitle: "Game Development Sprint",
    duration: "48 horas de desenvolvimento",
    details: [
      "Desenvolva protótipos de jogos com foco em gameplay e mecânicas inovadoras.",
      "Acesso a engines populares como Unity e Godot.",
      "Orientação de game designers experientes durante todo o processo.",
    ],
  },
  {
    id: "jam-4",
    title: "Animation",
    category: "ANIMATION",
    image: fest7,
    description:
      "Rapid prototyping of interactive experiences.",
    subtitle: "Animação Digital Lab",
    duration: "3 dias de experimentação",
    details: [
      "Explore técnicas avançadas de animação 2D e 3D.",
      "Trabalhe com software profissional (Blender, After Effects, etc).",
      "Crie portfolios com trabalhos de alta qualidade durante o evento.",
    ],
  },
];