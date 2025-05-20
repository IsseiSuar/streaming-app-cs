import { ClassificationRating } from "../../enum";

  export interface Movie {
    id:             string;
    title:          string;
    year:           number;
    duration:       string;
    rating:          "PG" | "PG-13" | "R";
    quality:        "4K UHD";
    description:    string;
    isTopMovie:     boolean;
    similarContent: string[];
    posters:        Posters;
    cast:           Cast[];
    crew:           Crew;
    classification: Classification;
  }
  
  export interface ContainerMovie {
    id: string;
    title: string;
    layout: 'portrait-card' | 'landscape-card';
    items: Movie[];
  }

export interface MovieData{
    containers: ContainerMovie[];
}

export interface Cast {
    characterName: string;
    actorName:     string;
}

export interface Classification {
    rating:          ClassificationRating;
    advisoryContent: string[];
}
export interface Crew {
    directors: string[];
    producers: string[];
    writers:   string[];
}

export interface Posters {
  portrait:  Landscape;
  landscape: Landscape;
  thumbnail: Landscape;
}

export interface Landscape {
  url:         string;
  aspectRatio: "16/9" | "2/3" | "4/3";
}
