export type JamItem = {
  id: string;
  title: string;
  image: string;
  description: string;
  category: "PHOTO" | "MOTION" | "GAME" | "ANIMATION";
  subtitle?: string;
  duration?: string;
  details?: string[];
};

export type Edition = {
  year: string;
  image: string;
  title?: string;
  description?: string;
  gallery?: string[]; 
  
};

export interface CurveConfig {
  curveIntensity: number;
  rotationY: number;
  rotationX: number;
  zoom: number;
  fov: number;
  wireframe: boolean;
  brightness: number;
  segments: number;
  speed: number;
  spacing: number;
}
