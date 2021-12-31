import { ResponsiveImageType } from "react-datocms";

interface _Game {
  title: string;
  tags: string[];
  thumbnail: {
    responsiveImage: ResponsiveImageType;
  };
}

export type Game = Partial<_Game>;
