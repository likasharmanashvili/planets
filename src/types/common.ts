export interface PlanetOverview {
  content: string;
  source: string;
}

export interface PlanetStructure {
  content: string;
  source: string;
}

export interface PlanetGeology {
  content: string;
  source: string;
}

export interface PlanetImages {
  planet: string;
  internal: string;
  geology: string;
}

export interface PlanetData {
  name: string;
  overview: PlanetOverview;
  structure: PlanetStructure;
  geology: PlanetGeology;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: PlanetImages;
}
