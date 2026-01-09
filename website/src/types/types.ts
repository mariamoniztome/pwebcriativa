export type JamDetail = {
  title: string;
  description: string;
};

export type JamItem = {
  id: string;
  title: string;
  image: string;
  description: string;
  category: "PHOTO" | "MOTION" | "GAME" | "ANIMATION";
  subtitle?: string;
  duration?: string;
  // Supports legacy string[] and new structured details
  details?: Array<string | JamDetail>;
};

export type Edition = {
  year: string;
  image: string;
  title?: string;
  description?: string;
  gallery?: string[];
  winners?: Array<{ title: string; description: string }>;
  partners?: Array<{ name: string; description: string }>;
  prizes?: Array<{ title: string; description: string }>;
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
