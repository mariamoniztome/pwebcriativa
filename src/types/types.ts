export type JamItem = {
  id: string;
  title: string;
  image: string;
  description: string;
  category: "PHOTO" | "MOTION" | "GAME" | "ANIMATION";
};

export type Edition = {
  year: string;
  image: string;
  title?: string;
  description?: string;
  coverImage?: string;
};